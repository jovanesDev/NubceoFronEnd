import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

      },
      drawerPaper: {
        width: drawerWidth,
        padding:"0 10px"
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
      },
      drawerTitles:{
          textAlign:"center",
          textTransform:"uppercase",
          margin:"10px 0",
          //fontFamily: 'PT Sans sans-serif'
      },

      drawerButtons:{
        margin:"5px 0",
      }


}))

