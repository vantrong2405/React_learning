/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import Style from './Style.module.css'
import Main from './Main';
import { createContext, useContext, useEffect, useState } from 'react';
// Cần provider
export const userContext = createContext()

// Không cần provider
// export const userContext = createContext({
//     name: 'trọng',
//     age: 18,
//     address: 'tam kỳ - quảng nam',
//     city: {
//         house: 'building',
//         color: 'red'
//     }
// })
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
    useEffect(() => {
        // giống didupdate khi dòng 35 có tham số , và nó quan sát sự thay đổi của people
        return () => {
            // Chạy sau khi hủy *( hay còn gọi là clean up)
            console.log('Giống componentWillMount');
        }
    }, [people])

    useEffect(() => {
        // khi 1 components được update , nó chạy
        console.log('Giống componentDidUpdate ');
    })

    useEffect(() => {
        // Chạy sau khi re-render ,
        console.log('Giống componentDidMount ');
    }, [])



    console.log('render');
    return (
        <Layout>
            <userContext.Provider value={{
                people
            }}>
                <Main />
            </userContext.Provider>

        </Layout>
    );
}

export default App;
