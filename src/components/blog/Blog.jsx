import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from "../../assets/logo.png";
import Blog2 from "../../assets/ai.jpg";
import Blog3 from "../../assets/ui-designer.jpg";
import shapeOne from '../../assets/shape-1.png';
import './blog.css'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <div
             data-aos="fade-up" 
             // data-aos-offset="200"
             // data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
        >
            
            <h2 className="section__title text-cs">Latest Blog</h2>
            <p className="section__subtitle">
                Trending <span>Articles</span>
            </p>
        </div>
        

        <div className="blog__container container grid">
            <div 
                data-aos="fade-right" 
                // data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="blog__item card card-two"
            >
                <span className="blog__date text-cs">July 3rd, 2024</span>
                <h3 className="blog__title"> Introducing Techloop, Your Premier Software Development Agency.</h3>
                <p className="blog__description">I started as a regular freelance web developer, always on the lookout for new job opportunities. Despite my efforts with cold outreach, I found myself hitting a dead end. It wasn't until I stumbled upon Iman Ghazi's videos
                </p>

                <a href="https://www.linkedin.com/posts/techlooop_techloop-softwaredevelopment-innovation-activity-7214165887765864448-hWvZ?utm_source=share&utm_medium=member_desktop" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div 
                data-aos="fade-up" 
                // data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="blog__item card card-two"
            >
                <span className="blog__date text-cs">APRIL 6, 2023</span>
                <h3 className="blog__title">How AI is taking over the Tech Industry</h3>
                <p className="blog__description">
                Artificial Intelligence (AI) has emerged as a dominant force revolutionizing the tech industry. With its ability to process vast amounts of data and perform complex tasks, AI is transforming various sectors. From intelligent chatbots to personalized recommendations...
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div 
                data-aos="fade-left" 
                // data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="blog__item card card-two"
            >
                <span className="blog__date text-cs">May 7, 2023</span>
                <h3 className="blog__title">Create Better User Interface</h3>
                <p className="blog__description">Creating engaging, information-rich content for your readers, however, is only half of the job: equally important is presenting the content in a visually stimulating way.. When it comes to blog design, there are a variety of different factors to look from.
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Blog</span>
        </div>
    </section>
  )
}

export default Blog