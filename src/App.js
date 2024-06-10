/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Style from './Style.module.css'
import { useState } from 'react';
function App() {
    const [people, setPeople] = useState({
        name: 'trọng',
        age: 18,
        address: 'tam kỳ - quảng nam',
        city: {
            house: 'building',
            color: 'red'
        }
    })

    const handleChangeCity = () => {
        setPeople(prevState => ({
            ...prevState,
            city: {
                ...prevState.city,
                color: 'yellow'
            }
        }))
    }
    return (
        <Layout>
            <div>Name : {people.name}</div>
            <div>age : {people.age}</div>
            <div>address : {people.address}</div>
            -----------------------------------
            <div>house : {people.city.house}</div>
            <div>color : {people.city.color}</div>
            <button onClick={handleChangeCity}>Change address</button>
        </Layout>
    );
}

export default App;
