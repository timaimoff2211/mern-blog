import React from 'react';
import Article from './Article';

const Articles = ({AllArticles, userArticles, users, isUserArts}) => {
    return (
        <div className="row pt-5 pb-5">
            {isUserArts ? (userArticles.length ? (
                userArticles.map((art, i) => {
                    let user;
                    if(users) user = users.find(user => user._id === art.authorID);
                    return <Article key={i} article={art} author={user} />
                })
            ) : (
                <div>Пока нет статей</div>
            )) : (AllArticles.length ? (
                    AllArticles.map((art, i) => {
                        let user;
                        if(users) user = users.find(user => user._id === art.authorID);
                        return <Article key={i} article={art} author={user} />
                    })
                ) : (
                    <div>Пока нет статей</div>
                )
            )}
        </div>
    )
}

export default Articles;
