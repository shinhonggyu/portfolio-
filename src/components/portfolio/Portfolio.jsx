import { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data';

const list = [
  {
    id: 'featured',
    title: 'featured',
  },
  {
    id: 'web',
    title: 'web App',
  },
  {
    id: 'mobile',
    title: 'mobile App',
  },
  {
    id: 'design',
    title: 'design',
  },
  {
    id: 'content',
    title: 'Content',
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selected === 'featured') {
      setData(featuredPortfolio);
    }
    if (selected === 'web') {
      setData(webPortfolio);
    }
    if (selected === 'mobile') {
      setData(mobilePortfolio);
    }
    if (selected === 'design') {
      setData(designPortfolio);
    }
    if (selected === 'content') {
      setData(contentPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Prtfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
