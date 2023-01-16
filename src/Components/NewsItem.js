import React, { Component } from 'react'
export class NewsItem extends Component {
  
  
  render() {
    let { title,description ,imageUrl,newsUrl , author , date}  = this.props;
    return (
      // const { title, description } = this.props;
      <div className='my-3'>  
            <div className="card" >
              <img src={imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">{ title}...</h5>
              <p className="card-text">{ description}...</p>
              <a rel='noopener noreferrer' href= {newsUrl} target = "_blank" className="btn btn-dark">Read More</a>
              <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} On {new Date(date).toGMTString() }</small></p>        
          </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
