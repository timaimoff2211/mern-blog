import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const ArticlePage = ({arts}) => {
    const history = useHistory();
    let currArt;
    if(arts) {
        const artId = history.location.pathname.split('article/')[1];
        currArt = arts.find(art => art._id === artId);
    }

     return (
         <Fragment>
             {currArt ? (
                <div>
                    <div className="article-banner main-banner">
                        <div className="main-banner__dark-bg">
                            <h1>{currArt.title}</h1>
                        </div>
                    </div>
                </div>
             ): (
                <div>Статья не найдена</div>
             )}
    </Fragment>)
}

export default ArticlePage;
