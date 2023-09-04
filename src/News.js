import React, { Component } from 'react'

export class News extends Component {
    
    render() {
    const {title,description,imgurl,newsurl,author,date,source}=this.props;
  return (
    <div>
        <div className="card">
            <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:"85%",zIndex:"1",color:"white"}}>{source}</span>
            <img src={imgurl?imgurl:"https://www.cartoq.com/wp-content/uploads/2023/08/hyundai-venue-2.8-kmpl-mileage-featured.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By <span className='text-danger'>{!author?"unknown":author}</span> on {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} className="btn btn-dark">Read More</a>
            </div>
        </div>
    </div>
    
  )
  }
}

export default News;