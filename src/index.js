import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import About from './routes/AboutPage'
import Support from './routes/SupportPage'
import WebIDE from './routes/EditorPage'
import Login from './routes/LoginPage'
import Community from './routes/CommunityPage'
import LibDir from './components/lib/LibDir'
import Script from './components/lib/Script'

ReactDOM.render(
  <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/webide" element={<WebIDE/>} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/community" element={<Community/>}>
        <Route path="" element={<LibDir/>} />
        <Route path=":postSlug" element={<Script/>} />
      </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

