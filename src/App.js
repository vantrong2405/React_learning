/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';

function App() {
    const [name, setName] = useState('Sara')
    const [visible, setVisible] = useState(true)
    return (
        <div>
            {visible && <Clock name={name} />}
            <button onClick={() => setName('văn trọng')}>Change name</button>
            <button onClick={() => setVisible((prev) => !prev)}>Change visible</button>
        </div >

    );
}

export default App;
