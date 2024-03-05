import React from 'react';
import "./portfolio.css";
import disneyplus from "../../assets/disneyplus.jpg";
import ecommerce from "../../assets/eCommerce.jpg";
import movieRatine from "../../assets/movieRating.jpg";
const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Recent Projects</span>
            <div className="portfolio__container container grid">
                <div className="portfolio__content">
                    <div className="card__header">
                        <h3 className="portfolio__title">Disney+ Clon</h3>
                    </div>
                    <div className="card__body">
                        <img src={disneyplus} className='card__img' />
                    </div>
                    <div className="card__footer">
                        <p className="portfolio__descripion">Lorem grrt erefs ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit.</p>
                    </div>
                    <div className="card__link">
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-github portfolio__icon"></i><span className='portfolio__subtitle'>Source Code</span></a>
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-clapper-board portfolio__icon"></i><span className='portfolio__subtitle'>Show Demo </span></a>
                    </div>
                </div>
                <div className="portfolio__content">
                    <div className="card__header">
                        <h3 className="portfolio__title">Movie Rating</h3>
                    </div>
                    <div className="card__body">
                        <img src={movieRatine} className='card__img' />
                    </div>
                    <div className="card__footer">
                        <p className="portfolio__descripion">Lorem grrt erefs ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit.</p>
                    </div>
                    <div className="card__link">
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-github portfolio__icon"></i><span className='portfolio__subtitle'>Source Code</span></a>
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-clapper-board portfolio__icon"></i><span className='portfolio__subtitle'>Show Demo </span></a>
                    </div>
                </div>
                <div className="portfolio__content">
                    <div className="card__header">
                        <h3 className="portfolio__title">eCommerce</h3>
                    </div>
                    <div className="card__body">
                        <img src={ecommerce} className='card__img' />
                    </div>
                    <div className="card__footer">
                        <p className="portfolio__descripion">Lorem grrt erefs ipsum dolor sit amet consectetur adipisicing elit. Eius, suscipit.</p>
                    </div>
                    <div className="card__link">
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-github portfolio__icon"></i><span className='portfolio__subtitle'>Source Code</span></a>
                        <a href="https://github.com/PrimeBeyonder"><i class="uil uil-clapper-board portfolio__icon"></i><span className='portfolio__subtitle'>Show Demo </span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio