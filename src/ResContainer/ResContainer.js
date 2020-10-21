import React from 'react';
import ResCard from '../ResCard/ResCard.js';
import './resContainer.css';

function ResContainer(props) {
  let allResCards = props.existingReservations.map(res => {
    return (
      <ResCard 
       date={res.date}
       id={res.id}
       name={res.name}
       number={res.number}
       time={res.time} 
      />
    )
  })

return (<section>{allResCards}</section>)
}

export default ResContainer;