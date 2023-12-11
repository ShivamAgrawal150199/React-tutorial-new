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
            articles: this.articles,
            loading: false

        }
        
    }

  render() {

    return (
      <div>
        This is news component.
        <div className="container my-3">
            <div className="row">
                <div className="col-md-4">
                    <NewsItem style="this is style" description="this is desc" imageUrl="https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-20T231338Z_1487796443_RC2CG4ABS406_RTRMADP_3_CRICKET-T20-IND-AUS-1702200830-1702205476.jpg?resize=1200%2C630&quality=80" 
                    newsurl="TODO"></NewsItem>
                </div>
                <div className="col-md-4">
                    <NewsItem style="this is style" description="this is desc"></NewsItem>
                </div>
                <div className="col-md-4">
                    <NewsItem style="this is style" description="this is desc"></NewsItem>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default News
