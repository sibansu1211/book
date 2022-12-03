import React from 'react';
import img from "img.jpg";
import img2 from "img.jpg";
import img3 from "img.jpg";
import showbooklist from './showbooklist';


function booklist() {
  return (
    <div>
        <h1>booklist</h1>
        <button onClick={showbooklist}>
            Add new book
        </button>
        <div>
            <img src={img} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
        </div>
    </div>
  )
}

export default booklist