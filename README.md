import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string?.charAt(0).toUpperCase() + string?.slice(1);

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const updateNews = async () => {
    props.setProgress(0);
    try {
      setLoading(true);
      const url = `https://newsdata.io/api/1/latest?apikey=pub_86457c5bbea5e46bf2166b40b8e737ae16760&country=${props.country}&category=${props.category}&language=${props.language}`;
      props.setProgress(30);

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const parsedData = await response.json();
      props.setProgress(70);

      const results = Array.isArray(parsedData.results) ? parsedData.results : [];
      setArticles(results);
      setTotalResults(parsedData.totalResults || results.length);
      // setPage(1);
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  const fetchMoreData = async () => {
    try {
      // const nextPage = page + 1;
      const url = `https://newsdata.io/api/1/latest?apikey=pub_86457c5bbea5e46bf2166b40b8e737ae16760&country=${props.country}&category=${props.category}&language=${props.language}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const parsedData = await response.json();
      const moreArticles = Array.isArray(parsedData.results) ? parsedData.results : [];
      setArticles(articles.concat(moreArticles));
      setTotalResults(parsedData.totalResults || totalResults);
      // setPage(nextPage);
    } catch (error) {
      console.error('Error fetching more news:', error);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-3">
        <strong>Top {capitalizeFirstLetter(props.category)} Headlines</strong>
      </h1>

      {loading && <Spinner />}

      {!loading && articles.length === 0 && (
        <div className="text-center text-danger">No articles available or request limit reached.</div>
      )}

      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {Array.isArray(articles) &&
              articles.map((element, index) => (
                <div className="col-md-4" key={element.link || index}>
                  <Newsitem
                    title={element.title?.slice(0, 45) || 'No Title'}
                    description={
                      element.description
                        ? element.description.slice(0, 95)
                        : 'No description available...'
                    }
                    imgUrl={element.image_url || 'https://c.ndtvimg.com/2025-05/g5a62sv8_khloe-pantry_625x300_13_May_25.jpg'}
                    newsUrl={element.link}
                    author={element.source_name || 'Unknown'}
                    date={element.pubDate}
                    source={element.source_name}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  category: 'food',
  language: 'en', // changed to 'en' to ensure it's supported by API
};

News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes.number,
  category: PropTypes.string,
  language: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;

import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={{marginBottom:'90px'}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(55, 72, 97)" }}>
        <div className="container-fluid">
          <img src="https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151157248.jpg?semt=ais_country_boost&w=740" alt="" height={"60px"} width={"60px"} border-radius="50%" />
          <a className="navbar-brand" href="#" >News App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* business entertainment top politics health science world education food sports technology crime            domestic   environment  other    tourism  */}
              <li className="nav-item"> <Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/politics">Politics</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/technology">Technology</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/world">World</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/education">Education</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/food">Food</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/ lifestyle"> Lifestyle</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/crime">Crime</Link></li>
               <li className="nav-item"> <Link className="nav-link active" to="/world">World</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/education">Education</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/food">Food</Link></li>
              <li className="nav-item"> <Link className="nav-link active" to="/ lifestyle"> Lifestyle</Link></li>
            
              <li className="nav-item"> <Link className="nav-link active" to="/sports">Sports</Link></li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
