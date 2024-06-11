import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from'./pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Shop from './pages/Shop/Shop'
import Lookbook from './pages/Lookbook/Lookbook'
import Features from './pages/Features/Features'
import Pages from './pages/Pages/Pages'
import './App.scss'
import axios from 'axios';
const App = () => {
    return (
        <>
           <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='Home' element={<Home/>}/>
            <Route path='Shop' element={<Shop/>}/>
            <Route path='Lookbook' element={<Lookbook/>}/>
            <Route path='Pages' element={<Pages/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Features' element={<Features/>}/>
            </Route>
            </Routes> 
        </>
    );
};

export default App;