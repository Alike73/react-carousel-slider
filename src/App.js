import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [resort, setResort] = useState(0);

  const {id, resortName, description, image, source, link} = data[resort];
  
  const [showMore, setShowMore] = useState(false);

  const showText = (data) => {
    
    data.showMore = !data.showMore;
    setShowMore(!showMore);
  }

  const previousResort = () => {
    setResort((resort => {
      resort --;
      if(resort < 0) {
        return data.length -1;
      }
      return resort;
    }))
  }

  const nextResort = () => {
    setResort((resort => {
      resort ++;
      if(resort > data.length -1) {
        resort = 0;
      }
      return resort;
      
    }))
  }

  const btnText = showMore ? "Show less" : "Show more";

  return (
    <div>
      <div className="wave">
        <h1 className='Title'>TOP <span className='ResortAmount'>{data.length}</span> THAILAND RESORTS</h1>
      </div>
      <div className="ImageBox">
        <div>{image}</div>
      </div>
      <div className="Container">
        <h2 className='numberText'>Number <span className='ResortNumber'>{id}.</span></h2>
      </div>
      <div className="wave">
        <h2 className='SubTitle'>{resortName}</h2>
      </div>
      <div className="Container">
        <p className='Description'>
          {showMore ? description : description.substring(0, 154) + "...."}
          <span className='whiteSpace'></span>
          <button className='SeeMoreBtn' onClick={() => showText(data)}>{btnText}</button>
        </p>
      </div>
      <div className="Container">
        <p className='SourceText'>Source: <a className='SourceLink' href={"https://www.expedia.com/"} target={"_blank"} rel={"noopener noreferrer"}>{source}</a></p>
      </div>
      <div className="Container">
      <div className="buttons">
        <button onClick={previousResort}>Prev</button>
        <button onClick={nextResort}>Next</button>
      </div>
      </div>
      <a href={link} target={'_blank'} rel={"noopener noreferrer"}>
        <div className="banner">
          <div className="inner">
              <h1>Book now</h1>
          </div>
        </div>
      </a>
      <div className="Container">
        <p className='FooterText'>All images were taken from: <a className='SourceLink' href={"https://www.expedia.com/"} target={"_blank"} rel={"noopener noreferrer"}>expedia.com</a> and, are used for educational purposes only.</p>
      </div>
      
    </div>
    
  );
}

export default App;
