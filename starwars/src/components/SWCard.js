import React from 'react';
import './StarWars.css';

const SWCard = ({attributes}) => {
    console.log(attributes);
    return (
        <div className="card">
            <ul>
                <li className="attribute">Name: {attributes.name}</li>
                <li className="attribute">Birth Year: {attributes.birth_year}</li>
                <li className="attribute">Gender: {attributes.gender}</li>
                <li className="attribute">Eye Color: {attributes.eye_color}</li>
                <li className="attribute">Hair Color:{attributes.hair_color}</li>
                <li className="attribute">Height: {attributes.height}cm</li>
                <li className="attribute">Weight: {attributes.weight}kg</li>
                <li className="attribute">Skin Color: {attributes.skin_color}</li>
            </ul>
        </div>
    );
}

export default SWCard;