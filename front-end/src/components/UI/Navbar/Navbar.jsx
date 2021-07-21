import React from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Drawer from "../Drawer/SideBar";
import Hidden from "@material-ui/core/Hidden";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "./styles";
import { logOut } from "../../../actions/userActions";

const Navbar = ({setSearch}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = e => {

    setSearch(e.target.value)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Nubceo-App
          </Typography>
          <TextField color="secondary" variant="outlined" onChange={handleChange} label="Search" />
          <Hidden smDown>
            <div className={classes.navButtonsContainer}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => dispatch(logOut())}
                startIcon={<ExitToAppIcon />}
              >
                logout
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        handleDrawerClose={handleDrawerClose}
        logOut={logOut}
      />
    </div>
  );
};

export default Navbar;
