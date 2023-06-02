import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-1.png';
import CV from "../../assets/CV.pdf"
import {FaTwitter, FaInstagram, FaTiktok} from 'react-icons/fa'
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
                <span className='text-cs'>Your</span> <b>Web Development Agency</b>
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
                        100
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi ducimus quas quidem, totam nisi
                culpa dolores corporis blanditiis harum esse dicta dolore tempore atque commodi quia veniam provident amet!
            </p>

            <div className='home__socials'>
                <a href="" className='home__social-link'>
                    <FaTwitter />
                </a>

                <a href="" className='home__social-link'>
                    <FaInstagram />
                </a>

                <a href="" className='home__social-link'>
                    <FaTiktok />
                </a>
            </div>

            <div className="home__btns">
                <a download=''href={CV} className="btn text-cs">Download CV</a>

                <a href="#skills" className="hero__link text-cs">
                    My Skills
                </a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape' />
        </div>
    </div>
  </section>
  );
}

export default Home