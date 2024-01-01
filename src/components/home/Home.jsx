import React from 'react';
import profileImg from '../../assets/profile-pic.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import CV from "../../assets/Terms.pdf"
import {FaGithub, FaInstagram, FaTiktok} from 'react-icons/fa'
import './home.css'


const Home = () => {
  return (
  <section className='home' id='home'>
    <div className="home__wrapper">
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>
                Welcome  <span>to,</span>
            </p>

            <h1 className='home__title text-cs'>
                <span>Tech</span>loop
            </h1>

            <p className='home__job'>
                <span className='text-cs'>Your</span><b>Web Development Agency</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt=""  className='home__profile'/>
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">
                        4 <b>+</b> 
                    </span>

                    <span className="text-sm text-cs">
                        Years of <span>Experience</span> 
                    </span>
                </p>

                <p className="home__data home__data-two">
                    <span className="text-lg">
                        100+
                    </span>

                    <span className="text-sm text-cs">
                        Completed <span>Projects</span> 
                    </span>
                </p>

                <img src={shapeOne} alt="" className="shape shape__1" />
                <img src={shapeTwo} alt="" className="shape shape__2" />
                <img src={shapeTwo} alt="" className="shape shape__3" />
            </div>

            <p className='home__text'>
                At Techloop, we specialize in developing compelling web and software applications that engage and captivate your audience. As a leading web development agency, we focus on creating visually striking and user-centric solutions that resonate with startups, medium-sized enterprises, and large-scale companies alike.

                Our dedication lies in delivering exceptional web design and software solutions customized to your precise requirements. Elevate your online presence with our expertise and let us shape innovative digital experiences that drive your success.
            </p>

            <div className='home__socials'>
                <a href="https://github.com/codemyhobby100" className='home__social-link'>
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/__techloop" className='home__social-link'>
                    <FaInstagram />
                </a>

                <a href="https://www.tiktok.com/@_techloop?lang=en" className='home__social-link'>
                    <FaTiktok />
                </a>
            </div>

            <div className="home__btns">
                <a download=''href={CV} className="btn text-cs">Terms & Policy</a>

                <a href="#contact" className="hero__link text-cs">
                    Start A Project
                </a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape' />
        </div>        
    </div>
    <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
    </div>
  </section>
  );
}

export default Home