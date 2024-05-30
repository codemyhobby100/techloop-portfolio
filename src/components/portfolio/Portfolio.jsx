import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { projects } from '../../Data';
import './portfolio.css';
import {AnimatePresence} from 'framer-motion';
import shapeOne from '../../assets/shape-1.png';

const allNavList = [ 
  'all',
  ...new Set(projects.map((project) => project.category))];
console.log(allNavList)

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(projects);
      return;
    }
    const newProojectItems = projects.filter((item) => item.category == category);

    setMenuItems(newProojectItems)
  }
  return (
    <section className='portfolio section' id='work'>
      <div 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h2 className='section__title text-cs'>Portfolio</h2>
        <p className='section__subtitle'>
          Our <span>Work</span>
        </p>
      

        <List list={navList} filterItems={filterItems} />
      </div>

      <div 
      data-aos="fade-up" 
      // data-aos-offset="200"
      // data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="portfolio__container container grid">
        <AnimatePresence initial = {false}>
          <Items projectItems={projectItems}/>
        </AnimatePresence>
      </div>

      <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Portfolio</span>
        </div>
    </section>
  )
}

export default Portfolio