import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Tooltip, Typography, IconButton} from '@material-ui/core';
import Chewbacca from '../assets/svg/Chewbacca'
import DarthVeder from '../assets/svg/DarthVeder'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fff'
  },
}));

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#414141',
    color: '#fff',
    maxWidth: 200,
    fontSize: theme.typography.pxToRem(12),
  },
  arrow: {
    color: '#414141',
  },
}))(Tooltip);

export default function AddToFavoriteBtn({film, i, favorites, setFavorites, pastFavorites, setPastFavorites}){
  const classes = useStyles();
  let addArray;
  
  const addToFavorite = (props) => {
    let array = favorites
    addArray = true
    array && array.map((item, key) => {
      if(item === props.i){
        array.splice(key, 1)
        addArray =  false
      }
      return addArray
    })
    if(addArray){
      array.push(props.i)
    }
    setFavorites([...array])
    localStorage.setItem('favorites', JSON.stringify(favorites))
    if(props.i !== pastFavorites[props.i]){
      addToPastFavorite(props)
    }
  }

  const addToPastFavorite = (props) => {
    let array = pastFavorites
    addArray = true
    if(addArray){
      array.push(props.i)
    }
    setPastFavorites([...array])
    localStorage.setItem('pastFavorites', JSON.stringify(pastFavorites))
  }

  const getTooltipTitle = () => {
    if(favorites.includes(i) && pastFavorites.includes(i)){
      return 'Remove from Favorite'
    } else if(!favorites.includes(i) && pastFavorites.includes(i)){
      return 'Add back to Favorite'
    } else {
      return 'Add to Favorite'
    }
  }

  const AddToFavorite = () => {
    return(
      <IconButton onClick={() => addToFavorite({film, i})} className={classes.icon} aria-label="add to favorites">
        {favorites.includes(i) || (!favorites.includes(i) && !pastFavorites.includes(i))
          ?
          <Chewbacca favorites={favorites} i={i} />
          :
          <DarthVeder />         
        }
      </IconButton>
    )
  }

  return (
    <HtmlTooltip 
      arrow 
      title={<Typography>{getTooltipTitle()}</Typography>}
    >
      {AddToFavorite()}
    </HtmlTooltip>
  )
}
