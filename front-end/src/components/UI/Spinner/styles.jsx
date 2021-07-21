import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "rgb(255,255,255)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "10",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
