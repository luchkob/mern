import React from 'react';
import ReactDOM from 'react-dom/client';
 
import  App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
   <p className='bg-green-600 hover:bg-slate-300'>hello world</p>
   <App />
 
   <p>{new Date().toLocaleTimeString()}</p>
  </React.StrictMode>
);

 
 