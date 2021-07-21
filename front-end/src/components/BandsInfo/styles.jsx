import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(0,0,0,0.8)",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    background: "#fff",
    borderRadius: "15px",
    padding: "20px 0",
  },

  title: {
    textTransform: "uppercase",
  },

  backButton:{

    marginTop:"50px",
    padding:"20px 0"
  }
}));
