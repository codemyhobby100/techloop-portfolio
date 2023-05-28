import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { projects } from '../../Data';
import './portfolio.css';
import {AnimatePresence} from 'framer-motion'

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
      <h2 className='section__title text-cs'>Portfolio</h2>
      <p className='section__subtitle'>
        My <span>Work</span>
      </p>

      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <AnimatePresence initial = {false}>
          <Items projectItems={projectItems}/>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio