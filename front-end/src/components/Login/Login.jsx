import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {useStyles} from './styles'
import validateFields from '../../helpers/validEmptyFields';
import { loginRequest } from '../../actions/userActions';

const Login = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.user.auth);
    const history = useHistory();
    const [state,setState] = useState({
        email:"",
        password:"",
    });
    const {email,password} = state;
    const [showPassword,setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateFields([email,password])){
            setError(true);
            return;
        }
        setError(false)
        dispatch(loginRequest(state))
    }

    useEffect(() => {

      if(auth){
        history.push("/home")
      }
    },[auth,history])


    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={7} className={classes.image} />
        <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" className={classes.loginText} variant="h4">
              Login 
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                value={email}
                required
                fullWidth
                onChange={handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={error && email === ""}
                helperText={error && email === "" ? "Email is required *" : null }
                autoFocus
                
              />
              <TextField
                variant="outlined"
                margin="normal"
                value={password}
                required
                fullWidth
                onChange={handleChange}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password" }
                id="password"
                autoComplete="current-password"
                error={error && password === ""}
                helperText={error && password === "" ? "Password is required *" : null }
                InputProps={{
                    endAdornment:  (

                        !showPassword ? (
                            <Button onClick={()=>setShowPassword(!showPassword)}>
                            <VisibilityIcon/>
                            </Button>
                        )
                        :
                        (
                            <Button onClick={()=>setShowPassword(!showPassword)}>
                            <VisibilityOffIcon/>
                            </Button>
                        )           
                    ),
                  }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                login
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}

export default Login
