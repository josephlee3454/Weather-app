import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [query,setQuery] = (d) => useState('');

  const dateBuilder = (d) => {
    let months = ["Janurary","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="App">
      <main>
      <div className="search-box">
        <input 
        type= "text" 
        className = "search-bar"
        placeholder = "Search ..."
        />
      </div>
      <div className="location-box">
        <div className='location'>New york City, US</div>
  <div className="date">{dateBuilder(new Date())}</div>

      </div>
      <div className= "weather-box"> 
      <div className='temp'> 15 </div>
      <div className="weather">sunny</div>
      </div>
      </main>
    </div>
  );
}

export default App;
