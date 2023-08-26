import React, { Component } from 'react'

export class News extends Component {
    
    render() {
    const {title,description,imgurl,newsurl}=this.props;
  return (
    <div>
        <div className="card">
            <img src={imgurl?imgurl:"https://www.cartoq.com/wp-content/uploads/2023/08/hyundai-venue-2.8-kmpl-mileage-featured.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} className="btn btn-dark">Read More</a>
            </div>
        </div>
    </div>
    
  )
  }
}

export default News
