import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid'
import {useStyles} from "./styles"
import Bands from "../Bands/Bands";
import UseFilterByGenre from "../../hooks/UseFilterByGenre";
import NotFound from "../404/NotFound";



const MusicStore = ({search}) => {

  const classes = useStyles()
  const changed = useSelector(state => state.musicStore.changed);
  const filterGenre = useSelector(state => state.musicStore.filterGenre);

  useEffect(() => {

  },[changed])
  
  const [state] = UseFilterByGenre(filterGenre);
  
  const searchItems = state != null && state.filter((char) => (char.name.toLowerCase().includes(search.toLowerCase())))

  return (
  <Grid 
  container 
  spacing={1}
  className={classes.conatiner}
  >
    {(searchItems < 1) && <NotFound/>}
    {state != null && searchItems.map((band) => (
      <Bands 
      key={band.id}
      name={band.name}
      genre={band.genreCode}
      year={band.year}
      country={band.country}
      members={band.members}
      id={band.id}
      />
    ))}
  </Grid>
  );
};

export default MusicStore;
