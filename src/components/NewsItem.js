import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description, imageUrl,newsUrl,author,date, source}=this.props;
        return (
            <div>
                <div className="card my-3" /*style={{height:"28rem"}}> */>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%', zIndex:'1'}}>{source}</span>
                    <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} className="card-img-top" alt="..." style={{height:"11rem"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}..
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                    </div>
                    <div class="card-footer bg-transparent border-secondary">
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default NewsItem
