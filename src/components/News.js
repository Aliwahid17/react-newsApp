import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=apple&from=2022-07-12&to=2022-07-12&sortBy=popularity&apiKey=60003c611f7b405a9158c123df7923d4&page=1pagesize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=apple&from=2022-07-12&to=2022-07-12&sortBy=popularity&apiKey=60003c611f7b405a9158c123df7923d4&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            })
        }
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=apple&from=2022-07-12&to=2022-07-12&sortBy=popularity&apiKey=60003c611f7b405a9158c123df7923d4&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>NewsMonkey - Top headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News