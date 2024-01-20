import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get("https://free-nba.p.rapidapi.com/players", {
      params: {
        page: '0',
        per_page: '25'
      },
      headers: {
        'X-RapidAPI-Key': '489a4fa2femshe401e0284dafe25p1959fejsn73d8f2d40328',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
      }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((er) => {
        console.log(er)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
