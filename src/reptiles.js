// reptiles.js
import React from 'react';
import { reptiles as reptileData } from './data';

const ReptilesComponent = () => (
    <div>
        <h2>Reptiles</h2>
        <ul>
            {reptileData.map(animal => (
                <li key={animal.id}>
                    {animal.name} <img src={animal.image} alt={animal.name} />
                </li>
            ))}
        </ul>
    </div>
);

export default ReptilesComponent;
