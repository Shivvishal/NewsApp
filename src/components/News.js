import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null); // Save nextPage token
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
      setNextPage(parsedData.nextPage || null); // store the nextPage token
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
    if (!nextPage) return; // no more data

    try {
      const url = `https://newsdata.io/api/1/latest?apikey=pub_86457c5bbea5e46bf2166b40b8e737ae16760&country=${props.country}&category=${props.category}&language=${props.language}&page=${nextPage}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const parsedData = await response.json();
      const moreArticles = Array.isArray(parsedData.results) ? parsedData.results : [];
      setArticles((prevArticles) => prevArticles.concat(moreArticles));
      setTotalResults(parsedData.totalResults || totalResults);
      setNextPage(parsedData.nextPage || null); // update nextPage token
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
        hasMore={!!nextPage}
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
  category: 'top',
  language: 'en',
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  language: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
