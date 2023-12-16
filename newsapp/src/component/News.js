import React, { Component , useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




const News =(props)=> {                                // FUNCTION BASED COMPONENT

  // articles=  [
  //     {
  //       "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
  //       "author": "Kevin Hand",
  //       "title": "LIVE: South Africa vs India – T20 cricket match",
  //       "description": "Follow our live updates as South Africa host India in the first T20 international of their three-match series.",
  //       "url": "http://www.aljazeera.com/sports/liveblog/2023/12/10/live-south-africa-vs-india-t20-cricket-match",
  //       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-20T231338Z_1487796443_RC2CG4ABS406_RTRMADP_3_CRICKET-T20-IND-AUS-1702200830-1702205476.jpg?resize=1200%2C630&quality=80",
  //       "publishedAt": "2023-12-10T12:00:46Z",
  //       "content": "blinking-dot\r\nLive updatesLive updates, \r\nFollow our live updates as South Africa host India in the first T20 international of their three-match series."
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  //   ]

  
  const[articles, setArticles]=useState([])
  const[loading, setLoading]=useState(true)
  const[page, setPage]=useState(1)
  const[totalResults, setTotalResults]=useState(0)
  //document.title = `${this.capitalizefirstletter(props.category)} - NewsMonkey`;
  



  const capitalizefirstletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }


  // constructor(props){
  //     super(props);
  //     console.log("constructor from news component");
  //     this.state={
  //         articles: [],
  //         loading: true,
  //         page:1,
  //         totalResults:0
  //         }

  //         document.title = `${this.capitalizefirstletter(props.category)} - NewsMonkey`;
  //     }

  

  
  const updatenews =async()=> {
    props.setProgress(10);
    console.log('update');
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({
      //   loading:true
      // })
      setLoading(true)
      let article=await fetch(url);
      props.setProgress(30);
      let parseddata=await article.json();
      console.log(parseddata);
      props.setProgress(70);
      setArticles(parseddata.articles)
      setTotalResults(parseddata.totalResults)
      setLoading(false)
      // this.setState(
      //     {articles:parseddata.articles,
      //     totalResults:parseddata.totalResults,
      //   loading:false});
      props.setProgress(100);
  }
  
  const fetchMoreData= async()=>{
    setPage(page+1)
    // this.setState({
    //   page:this.state.page+1
    // })

    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({
      //   loading:true
      // })
      let article=await fetch(url);
      let parseddata=await article.json();
      console.log(parseddata);
      setArticles(articles.concat(parseddata.articles))
      setTotalResults(parseddata.totalResults)
      setLoading(false)
      // this.setState(
      //     {articles:this.state.articles.concat(parseddata.articles),
      //     totalResults:parseddata.totalResults,
      //   loading:false})
  }

  useEffect(()=>{                   // work done by component did mount is done by useeffect
     updatenews();
  },[])

  // async componentDidMount(){
  //   props.setProgress(10);
  //     console.log("cdn");
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //     this.setState({
  //       loading:true
  //     })
  //     let article=await fetch(url);
  //     props.setProgress(30);
  //     let parseddata=await article.json();
  //     props.setProgress(50);
  //     console.log(parseddata);
  //     this.setState(
  //         {articles:parseddata.articles,
  //         totalResults:parseddata.totalResults,
  //       loading:false})
  //       props.setProgress(100);
  // }

  const handleprevclick= async()=>{
    console.log('prev');
      // console.log("prev");
      // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page-1}&pageSize=${props.pageSize}`;
      // this.setState({
      //   loading:true
      // })
      // let article=await fetch(url);
      // let parseddata=await article.json();
      // console.log(parseddata);
      // this.setState({
      //     articles:parseddata.articles,
      //     page:this.state.page-1,
      //     loading:false
      // })

      setPage(page-1)
      // this.setState({
      //   page:this.state.page-1
      // });

      updatenews();
  }


  const handlenextclick = async ()=>{

    console.log('next');
      // if ( !(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)))
      // {
      //     console.log("next");
      //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
      //     this.setState({
      //       loading:true
      //     })
      //     let article=await fetch(url);
      //     let parseddata=await article.json();
      //     console.log(parseddata);
      //     this.setState({
      //     page:this.state.page+1,
      //     articles:parseddata.articles,
      //     loading:false
      // })
      // }

      setPage(page+1)
      // this.setState({
      //   page:this.state.page+1
      // });

      updatenews();


  }



  //console.log("render");
  return (
    <>
     <div>
      This is news component.
      
      <div className="container my-3">
          <h1 className="text-center" style={{margin:'35 px 0px'}}>News Monkey- Top {props.category} headlines</h1>
          {loading &&  <Spinner></Spinner>}

          <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length!==totalResults}
              loader={<Spinner></Spinner>}
          >
            <div className="container">
            <div className="row">
              {!loading && articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                              <NewsItem style={element.title?element.title:""} description={element.description?element.description:""} 
                                              imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} 
                                              source={element.source.name}></NewsItem>
                          </div>
                  })}
          </div>
            </div>
          

          </InfiniteScroll>
       </div>

      

      <div className="container d-flex justify-content-between">
      <button type="button" className="btn btn-dark" disabled={page<=1} onClick={handleprevclick}>&#8249; Previous</button>
      <button type="button" className="btn btn-dark" disabled={page+1 > Math.ceil(totalResults/props.pageSize)} onClick={handlenextclick}>Next &#8250;</button>
      </div>
     </div>
    </>
  )




}


News.defaultProps={
  country:'in',
  category:'general',
  pageSize:8
}

News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number
}






// export class News extends Component {                             // CLASS BASED COMPONENT
 
//     // articles=  [
//     //     {
//     //       "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
//     //       "author": "Kevin Hand",
//     //       "title": "LIVE: South Africa vs India – T20 cricket match",
//     //       "description": "Follow our live updates as South Africa host India in the first T20 international of their three-match series.",
//     //       "url": "http://www.aljazeera.com/sports/liveblog/2023/12/10/live-south-africa-vs-india-t20-cricket-match",
//     //       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-11-20T231338Z_1487796443_RC2CG4ABS406_RTRMADP_3_CRICKET-T20-IND-AUS-1702200830-1702205476.jpg?resize=1200%2C630&quality=80",
//     //       "publishedAt": "2023-12-10T12:00:46Z",
//     //       "content": "blinking-dot\r\nLive updatesLive updates, \r\nFollow our live updates as South Africa host India in the first T20 international of their three-match series."
//     //     },
//     //     {
//     //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//     //       "author": null,
//     //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//     //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//     //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//     //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//     //       "publishedAt": "2020-04-27T11:41:47Z",
//     //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     //     },
//     //     {
//     //       "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//     //       "author": null,
//     //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//     //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//     //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//     //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//     //       "publishedAt": "2020-03-30T15:26:05Z",
//     //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     //     }
//     //   ]

//     static defaultProps={
//       country:'in',
//       category:'general',
//       pageSize:8
//     }

//     static propTypes={
//       country:PropTypes.string,
//       category:PropTypes.string,
//       pageSize:PropTypes.number
//     }


//     capitalizefirstletter=(string)=>{
//       return string.charAt(0).toUpperCase()+string.slice(1);
//     }

//     constructor(props){
//         super(props);
//         console.log("constructor from news component");
//         this.state={
//             articles: [],
//             loading: true,
//             page:1,
//             totalResults:0
//             }

//             document.title = `${this.capitalizefirstletter(this.props.category)} - NewsMonkey`;
//         }

    
//     async updatenews(){
//       this.props.setProgress(10);
//       console.log('update');
//       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({
//           loading:true
//         })
//         let article=await fetch(url);
//         this.props.setProgress(30);
//         let parseddata=await article.json();
//         console.log(parseddata);
//         this.props.setProgress(70);
//         this.setState(
//             {articles:parseddata.articles,
//             totalResults:parseddata.totalResults,
//           loading:false});
//         this.props.setProgress(100);
//     }
    
//     fetchMoreData= async()=>{
//       this.setState({
//         page:this.state.page+1
//       })

//       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         // this.setState({
//         //   loading:true
//         // })
//         let article=await fetch(url);
//         let parseddata=await article.json();
//         console.log(parseddata);
//         this.setState(
//             {articles:this.state.articles.concat(parseddata.articles),
//             totalResults:parseddata.totalResults,
//           loading:false})
//     }

//     async componentDidMount(){
//       this.props.setProgress(10);
//         console.log("cdn");
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
//         this.setState({
//           loading:true
//         })
//         let article=await fetch(url);
//         this.props.setProgress(30);
//         let parseddata=await article.json();
//         this.props.setProgress(50);
//         console.log(parseddata);
//         this.setState(
//             {articles:parseddata.articles,
//             totalResults:parseddata.totalResults,
//           loading:false})
//           this.props.setProgress(100);
//     }

//     handleprevclick= async()=>{
//       console.log('prev');
//         // console.log("prev");
//         // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//         // this.setState({
//         //   loading:true
//         // })
//         // let article=await fetch(url);
//         // let parseddata=await article.json();
//         // console.log(parseddata);
//         // this.setState({
//         //     articles:parseddata.articles,
//         //     page:this.state.page-1,
//         //     loading:false
//         // })

//         this.setState({
//           page:this.state.page-1
//         });

//         this.updatenews();
//     }


//     handlenextclick = async ()=>{

//       console.log('next');
//         // if ( !(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
//         // {
//         //     console.log("next");
//         //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=675a005308624f3e8a7574053ef15b95&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//         //     this.setState({
//         //       loading:true
//         //     })
//         //     let article=await fetch(url);
//         //     let parseddata=await article.json();
//         //     console.log(parseddata);
//         //     this.setState({
//         //     page:this.state.page+1,
//         //     articles:parseddata.articles,
//         //     loading:false
//         // })
//         // }

//         this.setState({
//           page:this.state.page+1
//         });

//         this.updatenews();


//     }

//   render() {

//     console.log("render");
//     return (
//       <>
//        <div>
//         This is news component.
        
//         <div className="container my-3">
//             <h1 className="text-center" style={{margin:'35 px 0px'}}>News Monkey- Top {this.props.category} headlines</h1>
//             {this.state.loading &&  <Spinner></Spinner>}

//             <InfiniteScroll
//                 dataLength={this.state.articles.length}
//                 next={this.fetchMoreData}
//                 hasMore={this.state.articles.length!==this.state.totalResults}
//                 loader={<Spinner></Spinner>}
//             >
//               <div className="container">
//               <div className="row">
//                 {!this.state.loading && this.state.articles.map((element)=>{
//                     return <div className="col-md-4" key={element.url}>
//                                 <NewsItem style={element.title?element.title:""} description={element.description?element.description:""} 
//                                                 imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} 
//                                                 source={element.source.name}></NewsItem>
//                             </div>
//                     })}
//             </div>
//               </div>
            

//             </InfiniteScroll>
//          </div>

        

//         <div className="container d-flex justify-content-between">
//         <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.handleprevclick}>&#8249; Previous</button>
//         <button type="button" className="btn btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handlenextclick}>Next &#8250;</button>
//         </div>
//        </div>
//       </>
//     )
//   }
// }

export default News
