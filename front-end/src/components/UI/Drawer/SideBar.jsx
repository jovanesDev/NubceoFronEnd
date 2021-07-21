import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { useTheme } from "@material-ui/core/styles";
import { Collapse, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import sortArray from "../../../helpers/sortArray";
import {
  filterByGenreFn,
  sortAsc,
  sortDesc,
} from "../../../actions/musicStoreActions";


const SideBar = ({ open, handleDrawerClose, logOut }) => {
  const classes = useStyles();
  const theme = useTheme();
  const genre = useSelector((state) => state.musicStore.genre);
  const bands = useSelector((state) => state.musicStore.bands);
  const filter = useSelector((state) => state.musicStore.filterGenre);
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const [disable,setDisable] = useState(false)

  const sortArrAsc = () => {
    const ascArr = sortArray(bands, "name", "asc");
    dispatch(sortAsc(ascArr));
  };

  const sortArrDesc = () => {
    const descArr = sortArray(bands, "name", "desc");
    dispatch(sortDesc(descArr));
  };

  const findGenre = (genre) => {
    dispatch(filterByGenreFn(genre));
    setDisable(false)
  };

  useEffect(() => {
    if(filter !== ""){
      setDisable(true)
    }
  }, [filter])

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography className={classes.drawerTitles} variant="h5">
          Menu
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Typography className={classes.drawerTitles} variant="h6">
          Order By
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.drawerButtons}
          onClick={() => sortArrAsc()}
          fullWidth
          startIcon={<ExpandLessIcon />}
        >
          ascendant
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => sortArrDesc()}
          className={classes.drawerButtons}
          fullWidth
          startIcon={<ExpandMoreIcon />}
        >
          descendent
        </Button>
      </List>
      <Divider />
      <List>
        <Typography className={classes.drawerTitles} variant="h6">
          Filter by{" "}
        </Typography>
        <ListItem button onClick={() => setCollapse(true)}>
          <ListItemIcon>
            <StarBorderIcon />
          </ListItemIcon>
          <ListItemText>Genre</ListItemText>
          {collapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={collapse} timeout="auto" unmountOnExit>
          <List>
            <>
              <ListItem>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => findGenre("")}
                  disabled={!disable}
                >
                  Clear Filter
                </Button>
              </ListItem>
              {genre != null &&
                genre.map((g) => (
                  <ListItem key={g.name}>
                    <Button
                      startIcon={<MusicNoteIcon />}
                      onClick={() => findGenre(g.code)}
                      disabled={disable}
                    >
                      {g.name}
                    </Button>
                  </ListItem>
                ))}
            </>
          </List>
        </Collapse>
      </List>

      <Divider />
      <Hidden smUp>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => dispatch(logOut())}
        >
          logout
        </Button>
      </Hidden>
    </Drawer>
  );
};

export default SideBar;
