// import React from 'react';
import './App.css';
import HomePage from './HomePage';
import './ProductDetails.css'
import ProductDetails from './ProductDetails';
import './Cart.css'
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/ProductDetails' element={<ProductDetails />}></Route>
                    <Route path='/Cart' element={<Cart />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
