import React from 'react'
import "./Headline.css"
import headline_with_text from '../../assets/headline.png';

const Headline = () => {
  return (
    <div className="image">
      <img className="img" alt="Image" src={headline_with_text} />
    </div>
  );
};


export default Headline