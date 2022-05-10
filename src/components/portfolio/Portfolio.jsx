import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Real State Manager App',
    gitHub: 'https://github.com/gvfmarques/RealStateManagerApp',
    demo: 'https://github.com/gvfmarques/RealStateManagerApp'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Expense Manager App',
    gitHub: 'https://github.com/gvfmarques/https://github.com/gvfmarques/ExpenseManager',
    demo: 'https://github.com/gvfmarques/https://github.com/gvfmarques/ExpenseManager'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Vendor Machine App',
    gitHub: 'https://github.com/gvfmarques/VendorMachine',
    demo: 'https://github.com/gvfmarques/VendorMachine'
  },
  {
    id: 4,
    image: IMG4,
    title: 'API Calatog of Games App',
    gitHub: 'https://github.com/gvfmarques/ApiCatalogJogos',
    demo: 'https://github.com/gvfmarques/ApiCatalogJogos'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Learning Center App',
    gitHub: 'https://github.com/gvfmarques/LearningCenter',
    demo: 'https://github.com/gvfmarques/LearningCenter'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Netflix Clone App',
    gitHub: 'https://github.com/gvfmarques/netflixclone',
    demo: 'https://github.com/gvfmarques/netflixclone'
  }
]

const  Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {   
            return(         
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">            
              <a href={github} className='btn' target='_blank'>Real State Manager App</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio