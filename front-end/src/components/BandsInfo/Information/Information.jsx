import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

const Information = ({name,country,genreCode,year}) => {

    const classes = useStyles()

  return (
    <>

      <List>
        <ListItem>
          <Typography className={classes.text}>
            <Box fontStyle="normal" textAlign="justify" fontSize={22} m={1}>
              Name : {name}
            </Box>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.text}>
            <Box fontStyle="normal" textAlign="justify" fontSize={22} m={1}>
              Year : {year}
            </Box>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.text}>
            <Box fontStyle="normal" textAlign="justify" fontSize={22} m={1}>
              Genre : {genreCode}
            </Box>
          </Typography>
        </ListItem>
        <ListItem>
          <Typography className={classes.text}>
            <Box fontStyle="normal" textAlign="justify" fontSize={22} m={1}>
              Country : {country}
            </Box>
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Information;
