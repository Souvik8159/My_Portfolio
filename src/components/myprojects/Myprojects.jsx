import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img12.png'
import IMG6 from '../../assets/img6.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Weather App</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/Weather_App" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://weather-app-iota-khaki-99.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  

            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>TO_DO_APP</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/Todo-App" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://todo-app-azure-six-65.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>GO_TO_TRAVEL</h3>
            <small className='text-light'>HTML | CSS | JS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/Travel-Website" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://travel-with-me-mu.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>RealTime Pizza App</h3>
            <small className='text-light'>Express js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/RealTime-Pizza-Delivery-App" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/Souvik8159/RealTime-Pizza-Delivery-App" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>My Portfolio(This Website)</h3>
            <small className='text-light'>React js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/My_Portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://github.com/Souvik8159/My_Portfolio" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Pig_Game</h3>
            <small className='text-light'>React js</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Souvik8159/Pig_Game" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://pig-game-gamma-topaz.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects