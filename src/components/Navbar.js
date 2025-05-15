// NavbarHiddenScrollbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div style={{ marginBottom: '90px' }}>
        <nav
          className="navbar fixed-top navbar-dark"
          style={{
            backgroundColor: 'rgb(55, 72, 97)',
            padding: '10px 0',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
          }}
        >
          <div className="container-fluid" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://img.freepik.com/free-vector/gradient-breaking-news-logo-design_23-2151157248.jpg?semt=ais_country_boost&w=740"
              alt="logo"
              height="60px"
              width="60px"
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            <span className="navbar-brand" style={{ marginRight: '20px' }}>News App</span>

            {/* Scrollable container with hidden scrollbar */}
            <div
              className="scroll-container"
              style={{
                display: 'flex',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                flex: 1,
                scrollbarWidth: 'none',       // Firefox
                msOverflowStyle: 'none',       // IE/Edge
              }}
            >
              {[
                'home', 'business', 'entertainment', 'politics', 'health', 'science', 'technology',
                'world', 'education', 'food', 'lifestyle', 'crime', 'domestic', 'enviroment',
                'tourism', 'sports', 'other'
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item === 'home' ? '/' : `/${item}`}
                  className="nav-link"
                  style={{
                    color: 'white',
                    padding: '0 10px',
                    display: 'inline-block',
                    textTransform: 'capitalize',
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
