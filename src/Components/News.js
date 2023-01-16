import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: '20',
    category: 'general'
  }

   static propTypes = {
    country:  PropTypes.string, 
    pageSize: PropTypes.string,
    category: PropTypes.string
  }

  constructor() {
    super();
    // console.log("Hello I am a Constructor from News.js");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    // console.console.log(this.articles);
  }

  async componentDidMount(){
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13727f57ff5a42ca90dcb9a8e6fabfab&page=1&pageSize=${this.props.pageSize}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    });
    console.log("URL " + url);
    // console.log(parsedData);
  }

  
  handlePreClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13727f57ff5a42ca90dcb9a8e6fabfab&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) 
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  }
  
  handleNextClick =async () => {
    console.log("Next");
    
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=13727f57ff5a42ca90dcb9a8e6fabfab&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true}) 
    let data = await fetch(url);
    let parsedData = await data.json();
       
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading:false
        });
     
    
  }
  cha = () => {
    this.setState({
      page:2
    })
    console.log("clicked")
  }
  render() {
     
    return (
      <div className='container my-3'>
        {/* <h1 className='text-center' > This is News Component </h1> */}
        {this.state.loading && <Spinner />}
        <div className="row">
          
          {!this.state.loading && this.state.articles.map((element) => {     
            return <div className="col-md-3" key = {element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"} description={element.description ? element.description.slice(0, 80) : ""}
                newsUrl={element.url} author={element.author} date = {element.publishedAt}
              />
            </div>
    // console.log("Hello")
          })}
        
        
          
           
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page <= 1} className="btn btn-dark" onClick = {this.handlePreClick}>&larr; Previous</button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
          {/* <button className="btn btn-dark" onClick={this.cha} >Next &rarr;</button> */}
        </div>

      </div>
    )
  }
}

export default News
