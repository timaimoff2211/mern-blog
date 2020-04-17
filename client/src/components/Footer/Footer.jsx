import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer border-top shadow-sm">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <span>Автор проекта: Тимур Имангалиев</span>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <span className="mr-3">Я в соц.сетях:</span> 
                        <a href="https://vk.com/timurspecialone" rel="noopener noreferrer" target="_blank">
                            <svg className="footer__icon">
                                <use xlinkHref="#vkSvg"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
