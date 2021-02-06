import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import StarWarsFilms from './components/index';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [films, setFilms] = useState()
  const baseTheme = createMuiTheme();

  useEffect(() => {
    getFilmList()
  }, [])

  const getFilmList = async () => {
   await axios.get('http://swapi.dev/api/films/').then(response => {
      setFilms(response.data.results)
      return response.data.results
    }).catch(error => {
      console.log('error:', error)
    })
  } 
  
  return (
    <ThemeProvider theme={baseTheme}>
      <Navbar />
      <StarWarsFilms films={films} />
    </ThemeProvider>
  );
}

export default App;
