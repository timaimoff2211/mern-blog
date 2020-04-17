import React from 'react';

import './Articles.scss';
import artImg from '../../assets/img/main-banner.jpg';
import { Link } from 'react-router-dom';

const Article = ({ article, author }) => { 
    const path = `/article/${article._id}`;
    return (
        <div className="card article">
            <img src={artImg} className="card-img-top" alt={article.title} />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.text}</p>
                <div className="d-flex justify-content-between align-items-center border-top">
                    <span className="article__date">{article.data}</span>
                    <div className="article__author">
                        <p>Автор:</p>
                        <span>{author && author.name}</span>
                    </div>
                </div>
                <Link to={path} className="btn btn-primary">Подробнее</Link>
            </div>
        </div>
    )
}

export default Article;
