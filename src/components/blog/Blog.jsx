import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import './blog.css'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            Trending <span>Articles</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">OCTOBER 1, 2023</span>
                <h3 className="blog__title">The Main hing For The Designer</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore blanditiis inventore, odit, quia maxime unde esse iusto faci
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">APRIL 11, 2023</span>
                <h3 className="blog__title">Follow Your Own Design Process</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore blanditiis inventore, odit, quia maxime unde esse iusto faci
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">NOVEMBER 7, 2023</span>
                <h3 className="blog__title">Create Better User Interface</h3>
                <p className="blog__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore blanditiis inventore, odit, quia maxime unde esse iusto faci
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>
    </section>
  )
}

export default Blog