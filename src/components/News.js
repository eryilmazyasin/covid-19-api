import React from 'react'
import loading from '../images/loading2.gif'

export default function News({ news }) {
    if (!news) {
        return (
            <div className="text-center">
            <img src={loading} width="150"/>
        </div>
        )
    }


    return (
        <div className="news-wrapper">
            <h4 className="title-style">Basından Haberler</h4>
            <div>
                {
                    news.map((newsItem, index) => {
                        return (
                            <div className="card shadow" key={index}>
                                <img src={newsItem.image} className="img-fluid" alt={newsItem.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{newsItem.name}</h5>
                                    <p className="card-text">{newsItem.description}</p>
                                    <a href={newsItem.url} target="_blank" className="btn btn-light">Devamını Oku</a>
                                </div>
                            </div>

                        )
                    }

                    )
                }
            </div>

        </div>
    )
}
