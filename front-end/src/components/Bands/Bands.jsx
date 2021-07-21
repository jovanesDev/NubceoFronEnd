import {Link} from "react-router-dom"
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

const Bands = ({name,genre,year,members,country,id}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {genre}
          </Typography>
          <Typography variant="body2" component="p">
            {year}
          </Typography>
        </CardContent>
        <CardActions>
            <Link to={`/band/${id}`}>
            <Button size="small">Learn More</Button>
            </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Bands;
