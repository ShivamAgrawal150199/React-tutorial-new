import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles=  [
        {
          "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
          "author": "Kevin Hand",
          "title": "LIVE: South Africa vs India – T20 cricket match",
          "description": "Follow our live updates as South Africa host India in the first T20 international of their three-match series.",
          "url": "http://www.aljazeera.com/sports/liveblog/2023/12/10/live-south-africa-vs-india-t20-cricket-match",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-20T231338Z_1487796443_RC2CG4ABS406_RTRMADP_3_CRICKET-T20-IND-AUS-1702200830-1702205476.jpg?resize=1200%2C630&quality=80",
          "publishedAt": "2023-12-10T12:00:46Z",
          "content": "blinking-dot\r\nLive updatesLive updates, \r\nFollow our live updates as South Africa host India in the first T20 international of their three-match series."
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]


    constructor(){
        super();
        console.log("constructor from news component");
        this.state={
            articles: [],
            loading: false,
            page:1,
            totalResults:0
            }
        }


    async componentDidMount(){
        console.log("cdn");
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=675a005308624f3e8a7574053ef15b95&page=1&pageSize=20";
        let article=await fetch(url);
        let parseddata=await article.json();
        console.log(parseddata);
        this.setState(
            {articles:parseddata.articles,
            totalResults:parseddata.totalResults})
    }

    handleprevclick= async()=>{
        console.log("prev");
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page-1}&pageSize=20`;
        let article=await fetch(url);
        let parseddata=await article.json();
        console.log(parseddata);
        this.setState({
            articles:parseddata.articles,
            page:this.state.page-1
        })

    }


    handlenextclick = async ()=>{
        if ( this.state.page+1 > Math.ceil(this.state.totalResults/20))
        {

        }
        else
        {
            console.log("next");
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page + 1}&pageSize=20`;
            let article=await fetch(url);
            let parseddata=await article.json();
            console.log(parseddata);
            this.setState({
            page:this.state.page+1,
            articles:parseddata.articles
        })
        }
    }

  render() {

    console.log("render");
    return (
      <div>
        This is news component.
        
        <div className="container my-3">
        <h2>News Monkey - Quick grasp to news headlines</h2>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                                <NewsItem style={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} 
                                newsurl={element.url}></NewsItem>
                            </div>
                    })}
            </div>
        </div>

        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handleprevclick}>&#8249; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &#8250;</button>
        </div>
      </div>
    )
  }
}

export default News
