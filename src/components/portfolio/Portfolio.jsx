import React from 'react';
import './portfolio.css';
import Img1 from '../../assets/portfolio1.png';
import Img2 from '../../assets/portfolio2.png';
import Img3 from '../../assets/portfolio3.png';
import Img4 from '../../assets/portfolio4.png';
import Img5 from '../../assets/portfolio5.png';
import Img6 from '../../assets/portfolio6.png';


const data = [
  {
    title: 'Site laid out on the Material-UI',
    img: Img1,
    github: 'https://github.com/Diana-ctrl/Candy_App',
    demo: 'https://diana-ctrl.github.io/Candy_App/'
  },
  {
    title: 'Website with logic and layout using grids and TypeScript',
    img: Img2,
    github: 'https://github.com/Diana-ctrl/resume',
    demo: 'https://diana-ctrl.github.io/resume/'
  },
  {
    title: 'To do list',
    img: Img3,
    github: 'https://github.com/Diana-ctrl/ToDoList',
    demo: 'https://diana-ctrl.github.io/ToDoList/'
  },
  {
    title: 'Сurrency exchange',
    img: Img4,
    github: 'https://github.com/Diana-ctrl/CurrencyExchangeApp',
    demo: 'https://diana-ctrl.github.io/CurrencyExchangeApp/'
  },
  {
    title: 'Mobile application on React Native',
    img: Img6,
    github: 'https://github.com/Diana-ctrl/ReactNativeApp'
  },
  {
    title: 'Application with useEffect hook',
    img: Img5,
    github: 'https://github.com/Diana-ctrl/appWithUseEffect',
    demo: 'https://diana-ctrl.github.io/appWithUseEffect/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My resent work
      </h5>
      <h1>
        Portfolio
      </h1>
      <div className='container portfolio_container'>
        {data.map(({ title, demo, github, img }, index) =>
          <article className='portfolio_item' key={index}>
            <div className='portfolio_item-img'>
              <img src={img} alt='Img1' />
            </div>
            <h3>
              {title}
            </h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn' target={'__blank'}>
                Github
              </a>
              {demo &&
                <a href={demo} className='btn btn-primary' target={'__blank'}>
                  Live demo
                </a>
              }
            </div>
          </article>
        )}
      </div>
    </section >
  )
}

export default Portfolio;
