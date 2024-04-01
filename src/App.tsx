import React, { useEffect, useState } from 'react';
import './App.css';
import BlogMain from './components/blog/BlogMain';
import ServiceMain from './components/service/ServiceMain';
import SkillsMain from './components/skill/SkillsMain';
import LinkMain from './components/linek/LinkMain';
import ProfilePageMain from './components/profilePage/ProfilePageMain';
import BlogPageMain from './components/blogPage/BlogPageMain';
import { createClient } from 'microcms-js-sdk';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const client = createClient({
    serviceDomain:"fumi",
    apiKey:"GraWXgDLr9FxYPxq8uHSKyafAriS6CsxDfMi"
})

function App() {

  return (
    <div className="App">
        {/* <ProfilePageMain/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProfilePageMain/>}/>
            <Route path='/blog/:id' element={<BlogPageMain/>}/>
          </Routes>
        </BrowserRouter>
        <div style={{height:"30px"}}></div>
    </div>
  );
}

export default App;
