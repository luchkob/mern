import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
 import Home from './page/Home';
 import Auth from './page/auth'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/auth' element={<Auth /> } />
   
   
    </Routes>
    
    
    
    </BrowserRouter>
);
 

