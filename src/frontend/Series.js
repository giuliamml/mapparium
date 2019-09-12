import React from 'react';
import { Link } from 'react-router-dom';

export default function Series(props) {
  return (
    <Link to={'/' + (props.id)} className='series' >
      
        <img src={props.image} alt={`${props.name}`} />
         <div className='overlay'>
          <h4>{props.name}</h4>
        </div>
      
    </Link>
  );
}