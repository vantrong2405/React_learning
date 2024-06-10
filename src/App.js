/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import Layout from './Layout';
import Main from './ThinkingReact/Main';
function App() {

    return (
        <Layout>
            <Main />
        </Layout>
    );
}

export default App;
