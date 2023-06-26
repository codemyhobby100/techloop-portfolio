import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from "../../assets/ios17.jpg";
import Blog2 from "../../assets/ai.jpg";
import Blog3 from "../../assets/ui-designer.jpg";
import shapeOne from '../../assets/shape-1.png';
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
                <span className="blog__date text-cs">June 22nd, 2023</span>
                <h3 className="blog__title">The next-generation version of iOS, set to be released in September.</h3>
                <p className="blog__description">iOS 17 is the newest version of iOS, the operating system that is designed to run on the iPhone. Previewed in June, iOS 17 is in beta testing and is set to see a release in September alongside new iPhones
                </p>

                <a href="" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">APRIL 11, 2023</span>
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

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">NOVEMBER 7, 2023</span>
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