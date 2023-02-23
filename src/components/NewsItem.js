import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { Tittle, Description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ margin: '35px 0px' }}>
                    <div style={{
                        display: 'flex',
                        justifyontent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className=" badge rounded-pill bg-primary"  > {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://i.ytimg.com/vi/UtQYd73eNPE/hqdefault.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Tittle}...</h5>
                        <p className="card-text">{Description}...</p>
                        <p className="card-text"><small className="text-success">BY {!author ? "unknown" : author} <br />
                            on {new Date(date).toGMTString()} </small></p>
                        <a href={newsUrl} target="blank" className="btn  btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
