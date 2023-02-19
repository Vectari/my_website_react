import React from 'react'
import './portfolio.css'
import serduszkadwa from '../../assets/serduszka-dwa.png'
import jamming from '../../assets/jamming.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={serduszkadwa} alt="" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Vectari/serduszka-dwa" target="_blank" className='btn'>GitHub</a>
          <a href="https://serduszkadwa.pl" target="_blank" className="btn btn-primary">Serduszka Dwa</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={jamming} alt="" />
          </div>
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Vectari/Jamming" target="_blank" className='btn'>GitHub</a>
          <a href="https://vectari.github.io/Jamming/" target="_blank" className="btn btn-primary">Jammming</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio