import React from 'react';
import { birds as birdData } from './data';

const BirdsComponent = () => (
    <div>
        <h2>Birds</h2>
        <ul>
            {birdData.map(animal => (
                <li key={animal.id}>
                    {animal.name} <img src={animal.image} alt={animal.name} />
                </li>
            ))}
        </ul>
    </div>
);

export default BirdsComponent;
