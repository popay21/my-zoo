import React from 'react';
import { mammals as mammalData } from './data';

const MammalsComponent = () => (
    <div>
        <h2>Mammals</h2>
        <ul>
            {mammalData.map(animal => (
                <li key={animal.id}>
                    {animal.name} <img src={animal.image} alt={animal.name} style={{ width: "100px" }} />
                </li>
            ))}
        </ul>
    </div>
);

export default MammalsComponent;


