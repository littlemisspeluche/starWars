import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FilmCard from './Card'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'rgb(21, 22, 25, 0.97)',
    paddingTop: '5rem'
  },
}));

export default function StarWarsFilms({films}){
  const classes = useStyles();
  const [favorites, setFavorites] = useState([]);
  const [pastFavorites, setPastFavorites] = useState([]);
  const getFavoriteArray = JSON.parse(localStorage.getItem('favorites') || '0')
  const getPastFavoriteArray = JSON.parse(localStorage.getItem('pastFavorites') || '0')

  useEffect(() => {
    getFavoriteArray !== 0 && setFavorites([...getFavoriteArray])
    getPastFavoriteArray !== 0 && setPastFavorites([...getPastFavoriteArray])
   }, [])

  return (
    <Grid container justify="center" className={classes.container} spacing={2}> 
      {films && films.map((film, i) =>  (
        <FilmCard film={film} i={i} key={i} favorites={favorites} setFavorites={setFavorites} pastFavorites={pastFavorites} setPastFavorites={setPastFavorites} getFavoriteArray={getFavoriteArray} getPastFavoriteArray={getPastFavoriteArray} />
      ))}
    </Grid>
  )
}
