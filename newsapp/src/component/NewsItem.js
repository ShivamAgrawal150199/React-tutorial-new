import React, { Component } from 'react'

const NewsItem =(props)=> {

    let {style,description, imageUrl , newsurl , author , date, source}=props;               // FUNCTION BASED COMPONENT

    return (
      <div>
        <div className="card">
          <div  style={{    display: 'flex',
                            position: 'absolute',
                            right: '0',
                            justifyContent: 'flex-end'}}>
            <span className="badge rounded-pill bg-danger">
                {source}
            </span>
          </div>
        
        <img src={imageUrl?imageUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3AQMM7HNVTIF24YOG6U6MXOWPE.jpg&w=1440"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{style}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl}  target="__blank" className="btn btn-sm btn-dark">Read more</a>
                
               

                <p className="card-text"><small className="text-muted">By {author? author:'unknown'} on {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
        {/* This is news item component. */}
      </div>
    )
  
}


// export class NewsItem extends Component {                    //CLASS BASED COMPONENT
//   render() {

//     let {style,description, imageUrl , newsurl , author , date, source}=this.props;

//     return (
//       <div>
//         <div className="card">
//           <div  style={{    display: 'flex',
//                             position: 'absolute',
//                             right: '0',
//                             justifyContent: 'flex-end'}}>
//             <span className="badge rounded-pill bg-danger">
//                 {source}
//             </span>
//           </div>
        
//         <img src={imageUrl?imageUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3AQMM7HNVTIF24YOG6U6MXOWPE.jpg&w=1440"} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">{style}...</h5>
//                 <p className="card-text">{description}...</p>
//                 <a href={newsurl}  target="__blank" className="btn btn-sm btn-dark">Read more</a>
                
               

//                 <p className="card-text"><small className="text-muted">By {author? author:'unknown'} on {new Date(date).toGMTString()}</small></p>
//             </div>
//         </div>
//         {/* This is news item component. */}
//       </div>
//     )
//   }
// }

export default NewsItem
