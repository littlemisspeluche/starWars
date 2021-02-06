import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardMedia, CardContent} from '@material-ui/core';
import aNewHope from '../assets/images/a_new_hope.jpg';
import attackOfTheClones from '../assets/images/attac_of_the_clones.jpg';
import returnOfTheJedi from '../assets/images/return_of_the_jedi.jpg';
import revengeOfTheSith from '../assets/images/revenge_of_the_sith.jpg';
import theEmpireStrikesBack from '../assets/images/the_empire_strikes_back.jpeg';
import thePhantomMenace from '../assets/images/the_phantom_menace.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    textAlign: 'center',
  },
  media: {
    paddingTop: '56.25%',
    backgroundSize: '100% 100%',
    height: '8rem'
  },

  details: {
    backgroundColor: 'rgb(21, 22, 25, 0.96)',
    position: 'absolute',
    top: '0rem',
    padding: 0,
    height: 'auto',
    width: '100%'
  },
}));

export default function Image(props) {
  const {film} = props
  const classes = useStyles();

  const getFilmImage = () => {
    if(film.episode_id === 1){
      return revengeOfTheSith
    }
    else if(film.episode_id === 2){
      return attackOfTheClones
    }
    else if(film.episode_id === 3){
    return thePhantomMenace
    }
    else if(film.episode_id === 4){
      return aNewHope
    } else if(film.episode_id === 5){
     return theEmpireStrikesBack

    }  else {
      return returnOfTheJedi
    }
  }

  return (
    <div className={classes.container}>
      <CardMedia
        className={classes.media}
        image={getFilmImage()}
        title={film.title}
      />
      <CardContent className={classes.details}>
        <Typography component="p" style={{textTransform:'uppercase', color: 'rgb(255, 255, 255)', fontSize:'2rem', fontFamily: 'Teko, sans-serif'}}>{film.release_date.split('-')[0]}</Typography>
        <Typography component="p" style={{fontWeight: '600', textTransform:'uppercase', color: 'rgb(255, 255, 255)', fontSize:'2rem', fontFamily: 'Teko, sans-serif'}}>{film.title}</Typography>
      </CardContent>           
    </div>
  );
}