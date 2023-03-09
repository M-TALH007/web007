import React, { Component } from "react";
import LoadSpin from "./LoadSpin";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
     country:'us',
     pageSize:9,
     catagory:'health',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    catagory:PropTypes.string,
  }
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title=`${this.Capitalize(this.props.catagory)}- newsmonkey`
  }
   async updateNews(){
    // this.props.setProgress(0);
    const url = `
    https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=39b783c1267a44099b38d3fde5da524c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    console.log(this.state);
    this.setState({
      ...this.state,
      articles: parsedDate.articles,
      totalResults: parsedDate.totalResults,
      loading:false,
    });
    // this.props.setProgress(0);
   }
  async componentDidMount() { 
    this.updateNews();
  }
//my comment
  // handleNextClick = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //     console.log("NEXT");
  //     this.setState({
  //       ...this.state,
  //       page:this.state.page+1,
  //     });
  //     this.updateNews();
  //   }
  // };
  // handlePrevClick = async () => {
  //   console.log("PREV");
  //  this.setState({
  //   ...this.State,
  //   page:this.state.page-1
  //  })
  //  this.updateNews();
  // };
  

  fetchMoreData =async () => {
  this.setState({page:this.state.page+1});
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=39b783c1267a44099b38d3fde5da524c&page=${this.state.page}&pageSize=${this.props.pageSize}
 `;
    this.setState({loading : true})
    let data = await fetch(url);
    let parsedDate = await data.json();
    console.log(parsedDate);
    console.log(this.state);
    this.setState({
      ...this.state,
      articles: this.state.articles.concat(parsedDate.articles),
      totalResults: parsedDate.totalResults,
      loading:false,
    });

  };
  
  render() {
    return (
    <>
      
        <h2 className="text-center" style={{ color: "darkGreen" ,marginTop:'60px' }}>
          NEWS MONKEY -TOP HEADLINE 
        </h2>
        {this.state.loading&&<LoadSpin/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<LoadSpin/>}
        >
         
          <div className="container">        <div className="row ">
          {/*!this.state.loading&&*/this.state.articles.map((element,key) => {
            return (
              <div className="col-md-4 my-1 " key={key}>
                <NewsItem
                  Tittle={element.title ? element.title.slice(0, 60) : ""}
                  Description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              
            );
          })}
        </div>
        </div>

        </InfiniteScroll>
     

        {/* <div className="container d-flex justify-content-between">
          {
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous Page
            </button>
          }
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults /this.props.pageSize
              )
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next Page &rarr;
          </button>
        </div> */}
           </>
      
    );
  }
}

export default News;
