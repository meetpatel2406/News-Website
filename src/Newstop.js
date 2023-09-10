import React, { useEffect, useState } from "react";
import News from "./News";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const Newstop = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const componentDidMount = async () => {
    console.log("cmd");
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.API_KEY}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setLoading(false);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    props.setProgress(100)
  };

  useEffect((props) => {
    componentDidMount();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&&category=${props.category}&apiKey=${props.API_KEY}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setPage(page + 1);
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
    setLoading(false);
  };


  document.title=`News - ${capitalizeFirstLetter(props.category)}`

  return (
    <>
      <h2 style={{ textAlign: "center",marginTop:"90px"}}>
        {capitalizeFirstLetter(props.category)} headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="container row my-4">
            {articles &&
              articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <News
                      title={element.title}
                      description={element.description}
                      imgurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

Newstop.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

Newstop.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  API_KEY: PropTypes.string,
};

export default Newstop;
export { News };
