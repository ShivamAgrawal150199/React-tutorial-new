import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {style,description, imageUrl , newsurl}=this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{style}</h5>
                <p className="card-text">{description}.</p>
                <a href="/" className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
        {/* This is news item component. */}
      </div>
    )
  }
}

export default NewsItem
