/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import BareInput from './BareInput';
import Layout from './Layout';
function App() {
    const handleClick = (value, event) => {
        console.log(value);
        console.log(event);
    }
    return (
        <div style={{ 'margin': 'auto', 'width': '200px', 'textAlign': 'center' }}>
            <input type='text' />
            <div>
                <button onClick={(e) => handleClick('add', e)}>Add</button>
                <button onClick={(e) => handleClick('edit', e)}>Edit</button>
                <button onClick={(e) => handleClick('delete', e)}>Delete</button>
            </div>
        </div>
    );
}

export default App;
