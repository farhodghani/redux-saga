import React, {useState} from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './store/photoReducer';
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './components/Detail/Detail';
import Menu from './components/Menu/Menu';
import About from './components/AboutMe/About';

function App() {
  
  const dispatch = useDispatch()
  window.addEventListener('DOMContentLoaded', ()=>dispatch(fetchPhotos()))
  // const items = [{value: 'Обо мне', href: '/about', icon: 'person'}]
  // const [menuActive, setMenuActive] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/detail:detailID' element={<Detail/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
