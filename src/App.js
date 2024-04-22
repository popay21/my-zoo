// App.js
import React, { useState } from 'react';
import MammalsComponent from './mammals';
import BirdsComponent from './birds';
import ReptilesComponent from './reptiles';
import './App.css';

const App = () => {
    const [category, setCategory] = useState('mammals');

    return (
        <div>
            <h1>Welcome to the Zoo</h1>
            <button onClick={() => setCategory('mammals')}>Mammals</button>
            <button onClick={() => setCategory('birds')}>Birds</button>
            <button onClick={() => setCategory('reptiles')}>Reptiles</button>
            {category === 'mammals' && <MammalsComponent />}
            {category === 'birds' && <BirdsComponent />}
            {category === 'reptiles' && <ReptilesComponent />}
        </div>
    );
}

export default App;
