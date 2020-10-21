import React from 'react';
import './resCard.css';

function ResCard(props) {
  return (
     <article>
       <h3>{props.name}</h3>
       <h4>{props.date}</h4>
       <h4>{props.time} pm</h4>
       <h4>Number of guests: {props.number}</h4>
       <button>Cancel</button>
     </article>
  )
}

export default ResCard;