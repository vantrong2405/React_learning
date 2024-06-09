/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import BareInput from './BareInput';
import Layout from './Layout';
function App() {

    return (
        <Layout>
            <BareInput type='1' value='123' autoFocus />
        </Layout>
    );
}

export default App;
