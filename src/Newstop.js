import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class Newstop extends Component {

  static defaultProps={
    country:"in",
    pageSize:10,
    category:"general"

  }
  
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

    constructor(){
        super()
        this.state=
        {
            articles:[],
            loading:true,
            page:1
        }
    }

    handlePrevClick=async()=>
    {
      console.log("prev")
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b34e762f3bd4460bd9645b691e2a260&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url)
      let parseData=await data.json()
      console.log(parseData)
      this.setState(
        {
          loading:false,
          page:this.state.page-1,
          articles:parseData.articles
        })
    }
    handleNextClick=async()=>
    {
      console.log("next")
      if(this.state.page+1>=Math.ceil(this.state.totalResults/this.props.pageSize))
      {

      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b34e762f3bd4460bd9645b691e2a260&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url)
      let parseData=await data.json()
      console.log(parseData)
      this.setState(
        {
          loading:false,
          page:this.state.page+1,
          articles:parseData.articles
        })
      }
    }

    async componentDidMount(){
        console.log("cmd")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=4b34e762f3bd4460bd9645b691e2a260&page=1&pageSize=${this.props.pageSize}`
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

  render() {
    return (
      <div className='container my-3'>
        <h2 style={{textAlign:"center"}}>{this.props.category} headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="container row my-5">
            {!this.state.loading && this.state.articles.map((element)=>
            {
                return  <div className="col-md-4 my-4"  key={element.url}>
                <News title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>=Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
