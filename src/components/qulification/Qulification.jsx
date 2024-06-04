import React, { useState } from 'react';
import './qulification.css';

const Qulification = () => {
    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
    }
    return (
        <section id='qulification' className="qulification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">What I Offer</span>
            <div className="qulification__container container">
                <div className="qulification__tabs">
                    <div className="qulification__button Education button--flex" onClick={() => toggleTab(1)}>
                        <i className={toggle === 1 ? 'uil uil-graduation-cap qulification__active qulification__icon' : 'uil uil-graduation-cap qulification__icon'}
                        ></i>Education
                    </div>
                    <div className="qulification__button button--flex Experience" onClick={() => toggleTab(2)}>
                        <i className={toggle === 2 ? 'uil uil-graduation-cap qulification__active qulification__icon' : 'uil uil-graduation-cap qulification__icon'}
                        ></i>Experience
                    </div>
                </div>
                <div className="qulification__sections">
                    <div className={toggle === 1 ? 'qulification__content qulification__content-active' : "qulification__content"}>
                        <div className="qulification__data">
                            <div>
                                <h3 className="qulification__title">Web Design</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                        </div>
                        <div className="qulification__data">
                            <div></div>
                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                            <div>
                                <h3 className="qulification__title">Web Developing</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>


                        </div>
                        <div className="qulification__data">
                            <div>
                                <h3 className="qulification__title">Web Design</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                        </div>
                        <div className="qulification__data">
                            <div></div>
                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                            <div>
                                <h3 className="qulification__title">Web Developing</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className={toggle === 2 ? 'qulification__content qulification__content-active' : "qulification__content"}>
                        <div className="qulification__data">
                            <div>
                                <h3 className="qulification__title">Web Design</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                        </div>
                        <div className="qulification__data">
                            <div></div>
                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                            <div>
                                <h3 className="qulification__title">Web Developing</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>


                        </div>
                        <div className="qulification__data">
                            <div>
                                <h3 className="qulification__title">Web Design</h3>
                                <span className="qulification__subtitle">Spain - Institute</span>
                                <div className="qulification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qulification__rounder"></span>
                                <span className="qulification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qulification