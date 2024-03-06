import React from 'react';
import "./skill.css";

import Js from "../icon/logo-javascript.svg";
import Java from "../icon/java-vertical.svg";
import Php from "../icon/php-1.svg";
import GitHub from "../icon/github-mark.svg";
import tailwind from "../icon/tailwind-css-2.svg";
import bootstart from "../icon/bootstrap-5-1.svg";
import nodeJsImg from "../icon/nodejs-3.svg";
import reactImg from "../icon/react-2.svg";
import Laravel from "../icon/laravel-2.svg";
import html from "../icon/html-1.svg";
import css from "../icon/css-3.svg";


const Skill = () => {
    const Data = [
        {
            id: 1,
            image: Js,
            title: "JavaScript",
            level: "Intermediate",
        },
        {
            id: 2,
            image: Laravel,
            title: "Laravel",
            level: "Basic"
        },
        {
            id: 3,
            image: Php,
            title: "Php",
            level: "Intermediate"
        },
        {
            id: 5,
            image: GitHub,
            title: "Git&GitHub",
            level: "Basic"
        },
        {
            id: 6,
            image: tailwind,
            title: "TailWind",
            level: "Intermediate"
        },
        {
            id: 7,
            image: reactImg,
            title: "React.js",
            level: "Intermediate"
        },
        {
            id: 8,
            image: nodeJsImg,
            title: "NodeJs",
            level: "Basic"
        },
        {
            id: 9,
            image: bootstart,
            title: "BootStrap",
            level: "Intermediate"
        },
        {
            id: 4,
            image: Java,
            title: "Java",
            level: "Basic"
        },
        {
            id: 10,
            image: html,
            title: "HTML",
            level: "Advanced"
        },
        {
            id: 11,
            image: css,
            title: "CSS",
            level: "Intermediate"
        },
    ];
    return (
        <section className='skills__section container' id='skill'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">What Do i Know</span>

            <div className="container grid skills__container">
                <div className="skill__content">
                    {Data.map(({ id, image, title, level }) => {
                        return (
                            <div className="skill__info grid" key={id}>
                                <img src={image} className='skill__img' />
                                <span className="img__title">{title}</span>
                            </div>
                        )
                    })}
                </div>

                <div className="certi__container">
                    <div className="basic">
                        <h3 className="certi__title">Basic Programming Course/Fairway Tech</h3>
                        <a download='' className="button button--flex">Download Certificate
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                            </svg></a>
                    </div>
                    <div className="pwd">
                        <h3 className="certi__title ">Professional Web Dev Course/Fairway Tech</h3><a download='' className="button button--flex">Download Certificate
                            <svg
                                class="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                                <path
                                    d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                    fill="var(--botton-text-color)"
                                ></path>
                            </svg></a></div>
                </div>
            </div>
        </section>
    )
}

export default Skill