import React from 'react';
import Button from './Button';

const Newsitem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;
  
  return (
    <div className="my-5">
      {/* Only one <a> tag wrapping the whole content */}
      <a href={newsUrl} className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" rel="noopener noreferrer">
        <div className="card mx-4" style={{ height: "37rem", borderRadius: '31px', background: 'rgb(204, 213, 220)', boxShadow: '23px 23px 46px #828282,-23px -23px 46px #ffffff' }}>
          <img 
            src={!imgUrl ? "https://c.ndtvimg.com/2025-05/g5a62sv8_khloe-pantry_625x300_13_May_25.jpg" : imgUrl} 
            className="card-img-top" 
            height={"250px"} 
            alt="..." 
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}.... 
              <br />
              <span className="badge text-bg-success my-1">{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            {/* Button link is now part of the same <a> tag */}
            <Button />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Newsitem;
