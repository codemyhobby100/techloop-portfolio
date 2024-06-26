import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from "../../assets/shape-2.png";
import { motion } from 'framer-motion';

const Items = ({projectItems}) => {
  return (
    <>
        {projectItems.map((projectItem) =>{
            const {id, img, category, title, link, description}= projectItem;
            return(
                <motion.div 
                 layout
                 animate={{opacity:1, scale: 1 }}
                 initial={{opacity: 0.8, scale: 0.6}}
                 exit={{opacity: 0.8, scale: 0.6}}
                 transition={{duration:  0.3}}
                 className='portfolio__items card card-two'
                  key={id}>
                    <div className="portfolio__img-wrapper">
                        <img src={img} alt="" className="portfolio__img" />
                    </div>

                    <span className="portfolio__category text-cs">{category}</span>
                    <h3 className="portfolio__title">{title}</h3>
                    <h4 className='porfolio__title'><a href={link} className='link' target="_blank" rel="noopener noreferrer"> View Project</a></h4>
                    <p className="portfolio__description">{description}</p>

                    <a href="#contact" className="link">
                        Start Project
                        <FaArrowRight className='link__icon'></FaArrowRight>
                    </a>

                    <img src={shapeTwo} alt="" className='shape c__shape' />
                </motion.div>
            )
        })}
    </>
  )
}

export default Items