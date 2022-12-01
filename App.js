import React, {useState} from 'react';
// import { BrowserRouter,Route, Routes} from 'react-router-dom';
import './App.css';
import axios from 'axios';
// 3import { useState } from 'react';

function App() {
  const [images , setImages]=useState("")
  const [result , setResult]=useState([])
  const changeImages=()=>{
   axios.get(`https://api.unsplash.com/search/photos?page=1&query=${images}&client_id=IJhVVp-eiBp38IwvsXy9SRsPrKjAfUqlb9khIt5Oowg`)
    .then((response)=>{
      console.log(response.data)
      setResult(response.data.results)
    })  
  }
  return (
 
    <div className="App">
    <div id='head'>
    <h1>React Photo Search </h1>
    <button id='bm'><h3>Bookmarks</h3></button>
    </div>
     
     <div>
     <input type="text" value={images}
     onChange={(e)=>{
      setImages(e.target.value)
     }} placeholder='search for high resolution images'/>
     <button type='submit' onClick={changeImages} id='search'>Search</button>
     </div>
     <div id='images'>
      {result.map((value)=>{
        return <div >
          <img id="img" src={value.urls.small}/>
        </div>
      })}
     </div>
    </div>
    
   
  );
}

export default App;
