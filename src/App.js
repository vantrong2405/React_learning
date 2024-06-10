/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';
import BareInput from './BareInput';
import Layout from './Layout';
import ProductList from './ProductList';
function App() {

    return (
        <Layout>
            <ProductList />
        </Layout>
    );
}

export default App;
