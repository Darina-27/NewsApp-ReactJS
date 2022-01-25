import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:12,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }


    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
        })
        }
        
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d0e94183c11445c90ee1a63ec52d37e&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data= await fetch(url);
        // let parsedData=await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles:parsedData.articles, totalResults: parsedData.totalResults, 
        //     loading:false})
        this.updateNews();
    }

    handlePrevClick = async ()=>{
        console.log("Previous");

        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d0e94183c11445c90ee1a63ec52d37e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true})
        // let data= await fetch(url);
        // let parsedData=await data.json();
        // this.setState({
        //     page:this.state.page-1,
        //     articles:parsedData.articles,
        //     loading: false
        // })
        this.setState({page:this.state.page-1},()=>{this.updateNews()});

    }

    handleNextClick = async ()=>{
        console.log("next");

        // if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
        // }
        // else{
        //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d0e94183c11445c90ee1a63ec52d37e&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true})
        //     let data= await fetch(url);
        //     let parsedData=await data.json();
            

        //     this.setState({
        //         page:this.state.page+1,
        //         articles:parsedData.articles,
        //         loading:false
        //     })
        // }
        this.setState({page:this.state.page+1},()=>{this.updateNews()});
        
    }

    render(){
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{marginTop:'75px'}}>Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                
                <div className="row my-2">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div class="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,100):""} description={element.description?element.description.slice(0,85):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                })} 
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className="btn btn-light"><i className="fas fa-chevron-left" onClick={this.handlePrevClick}></i> Previous</button>
                    <button type='button' className="btn btn-light" onClick={this.handleNextClick}>Next <i className="fas fa-chevron-right"></i></button> 

                </div>
              
            </div>
        )
    }
}

export default News
