/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { createContext, useContext, useEffect, useState } from 'react';
import Cart from './CustomHook/Cart';
import Navigation from './CustomHook/Navigation';
export const getUser = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: {
                    name: 'Văn trọng',
                    age: '18'
                }
            })
        }, 1500)
    })
}
function App() {
    return (
        <Layout>
            <Cart />
            <Navigation />

        </Layout>
    );
}

export default App;
