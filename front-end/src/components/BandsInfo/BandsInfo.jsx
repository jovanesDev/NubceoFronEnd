import React from "react";
import { useStyles } from "./styles";
import { useParams,Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import UseFindBandInfo from "../../hooks/UseFindBandInfo";
import Information from "./Information/Information";
import Members from "./Members/Members";
import Albums from "./Albums/Albums";
import { Button } from "@material-ui/core";

const BandsInfo = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [band] = UseFindBandInfo(id);

  const { name, country, genreCode, year, members } = band;

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="sm">
        <Typography className={classes.title} variant="h4">
          <Box fontStyle="bold" textAlign="center" m={4}>
            Information
          </Box>
        </Typography>
        <Divider />
        <Information
          name={name}
          country={country}
          genreCode={genreCode}
          year={year}
        />
        <Divider/>
        <Members members={members}/>
        <Divider/>
        <Albums id={id}/>
        <Divider/>
        <Link to="/home" >
        <Button className={classes.backButton} fullWidth variant="contained" size="large" color="secondary">Volver</Button>
        </Link>
      </Container>
    </div>
  );
};

export default BandsInfo;
