import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Amallar from './components/Amallar';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Foydanavchilar from './components/Foydanavchilar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   
    <Routes> 
      <Route path='/' element={<Amallar/>}/>
      <Route path="/foydanuvchilar" element={<Foydanavchilar/>}/>
    </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
