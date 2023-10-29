import React from 'react';
import './App.css';
import HomePage from './HomePage';
// import ProductDetails from './ProductDetails';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    {/* <Route exact path='/productdetails' element={<ProductDetails/>}/> */}
                </Routes>
            </Router>
        </>
    );
}

export default App;
