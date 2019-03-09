import React from 'react';
import SWCard from './SWCard';
import './StarWars.css';

const CardList = props => {
    return (
        <div className="card-container">
            {props.charlist.map( character => { 
                return <SWCard attributes={character} 
                /> })}
        </div>
    );
}

export default CardList;