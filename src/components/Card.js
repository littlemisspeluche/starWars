import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Card, Grid, Typography, CardContent, CardActions, Collapse, IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Image from './Image'
import AddToFavoriteBtn from './AddToFavoriteBtn'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '1rem 0'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  details: {
    backgroundColor: 'rgb(21, 22, 25)',
    padding: '1rem 0',
    textAlign: 'center'
  },
  showMore: {
    backgroundColor: 'rgb(21, 22, 25)'
  },
  icon: {
    color: '#fff'
  },
  opening: {
    color: '#feda4a', 
    fontSize:'1.2rem', 
    letterSpacing:'1.5px', 
    textAlign: 'left', 
    lineHeight: '23px', 
    fontFamily: 'Teko, sans-serif'
  },
  openingDetails: {
    padding: '1rem'
  },
  text: {
    textTransform:'uppercase', 
    color:'#feda4a',
  },
  roleTitle: {
    fontSize:'1rem'
  },
  name: {
    fontSize:'1.8rem',
  },
}));

export default function FilmCard({film, i, favorites, setFavorites, pastFavorites, setPastFavorites}){
  const classes = useStyles();
  const sizeTheme = useTheme();
  const lgScreen = useMediaQuery(sizeTheme => sizeTheme.breakpoints.up('sm'));
  const [expanded, setExpanded] = useState(-1);

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <Grid key={i} item xs={11} sm={5} md={5} lg={3} className={classes.container}>
      <Card>
        <Image film={film} i={i} favorites={favorites} />
        <CardContent className={classes.details} style={{minHeight: lgScreen ? '14.1rem' : '10.1rem'}}>
          <Typography component="p" className={clsx(classes.text, classes.roleTitle)} style={{fontWeight: favorites.includes(i) && '700', fontFamily: favorites.includes(i)  ? 'Teko, sans-serif' : 'Londrina Outline, cursive'}}>Producer:</Typography>
          <Typography component="p" className={clsx(classes.text, classes.name)} style={{fontWeight: favorites.includes(i) && '700', fontFamily: favorites.includes(i)  ? 'Teko, sans-serif' : 'Londrina Outline, cursive'}}>{film.producer}</Typography>
          <Typography component="p" className={clsx(classes.text, classes.roleTitle)} style={{fontWeight: favorites.includes(i) && '700', fontFamily: favorites.includes(i)  ? 'Teko, sans-serif' : 'Londrina Outline, cursive'}}>Director:</Typography>
          <Typography component="p" className={clsx(classes.text, classes.name)} style={{fontWeight: favorites.includes(i) && '700', fontFamily: favorites.includes(i)  ? 'Teko, sans-serif' : 'Londrina Outline, cursive'}}>{film.director}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.showMore}>
          <AddToFavoriteBtn film={film} i={i} favorites={favorites} setFavorites={setFavorites} pastFavorites={pastFavorites} setPastFavorites={setPastFavorites} />
          <IconButton
            className={clsx(classes.icon, classes.expand, {[classes.expandOpen]: expanded})}
            onClick={() => handleExpandClick(i)}
            aria-expanded={expanded === i}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded === i} timeout="auto" unmountOnExit>
          <CardContent className={clsx(classes.details, classes.openingDetails)}>
            <Typography paragraph className={classes.opening}>{film.opening_crawl}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}
