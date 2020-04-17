import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';

const Header = ({ isLogged, logout }) => {
    
    return (
        <header className="header shadow-sm">
            <div className="container">
                <div className="header__items">
                    <div className="header__items-logo">
                        <Link to="/"><h2 className="text-primary">MERN BLOG</h2></Link>
                    </div>
                    <nav className="nav nav-navbar">
                        <Link className="link" to="/">Главная</Link>
                        {isLogged && 
                        <Link className="link" to="/create">Добавить статью</Link>
                        }
                    </nav>
                    <div className="header__items-right">
                    {isLogged ? (
                        <>
                        <Link className="btn btn-info mr-3" to="/cabinet">Кабинет</Link>
                        <button
                            className="btn btn-outline-primary" 
                            to="/"
                            onClick={logout}
                        >
                            Выйти
                        </button>
                        </>
                        )
                        : (
                        <>
                        <Link className="btn btn-outline-primary" to="/reg">Регистрация</Link>
                        <Link className="btn btn-outline-primary ml-3" to="/auth">Войти</Link>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
