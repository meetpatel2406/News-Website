import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class Newstop extends Component {

  static defaultProps={
    country:"in",
    pageSize:10,
    category:"general"

  }
  
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    API_KEY:PropTypes.string
  }

  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

    constructor(props){
        super(props)
        this.state=
        {
            articles:[],
            loading:true,
            page:1
        }
        document.title=`News - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    // handlePrevClick=async()=>
    // {
    //   console.log("prev")
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b34e762f3bd4460bd9645b691e2a260&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data=await fetch(url)
    //   let parseData=await data.json()
    //   console.log(parseData)
    //   this.setState(
    //     {
    //       loading:false,
    //       page:this.state.page-1,
    //       articles:parseData.articles
    //     })
    // }
    // handleNextClick=async()=>
    // {
    //   console.log("next")
    //   if(this.state.page+1>=Math.ceil(this.state.totalResults/this.props.pageSize))
    //   {

    //   }
    //   else{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b34e762f3bd4460bd9645b691e2a260&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading:true})
    //   let data=await fetch(url)
    //   let parseData=await data.json()
    //   console.log(parseData)
    //   this.setState(
    //     {
    //       loading:false,
    //       page:this.state.page+1,
    //       articles:parseData.articles
    //     })
    //   }
    // }

    componentDidMount=async()=>{
        console.log("cmd")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        let parseData=await data.json()
        console.log(parseData)
        this.setState(
          {
            loading:false,
            articles:parseData.articles,
            totalResults:parseData.totalResults
          }
          )
    }

    fetchMoreData = async() => {
        // this.setState({})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        let parseData=await data.json()
        console.log(parseData)
        this.setState(
          {
            page:this.state.page+1,
            
            articles:this.state.articles.concat(parseData.articles),
            totalResults:parseData.totalResults
          }
          )
        this.setState({loading:false})
        console.log("done")
    };



  render() {
    return (
      <>
        <h2 style={{textAlign:"center"}}>{this.capitalizeFirstLetter(this.props.category)} headlines</h2>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">
          <div className="container row my-5">
              {this.state.articles && this.state.articles.map((element)=>
              {
                  return  <div className="col-md-4 my-4"  key={element.url}>
                  <News title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
              })}
          </div>
        </div>
        </InfiniteScroll>      
      </>
    )
  }
}