import React, {Fragment} from 'react';
import Articles from '../components/Articles/Articles';

const Home = ({articles, userArts, isLogin, users}) => {
    return (
        <Fragment>
            <div className="main-banner">
                <div className="main-banner__dark-bg">
                    <h1>Блог не о чем</h1>
                </div>
            </div>

            <div className="container pt-5 pb-5">
                <div className="border-bottom">
                    <h3>Все статьи</h3>
                </div>
                {articles ? (
                    <Articles AllArticles={articles} users={users} isUserArts={false} />
                ) : (
                    <div className="pt-5 text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>

            {isLogin && <div className="container pb-5">
                <div className="border-bottom">
                    <h3>Ваши статьи</h3>
                </div>
                {userArts ? (
                    <Articles userArticles={userArts} users={users} isUserArts={true} />
                ) : (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
            </div>}
        </Fragment>
    )
}

export default Home;
