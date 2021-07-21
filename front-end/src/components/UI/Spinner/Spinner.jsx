import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from './styles'


const Spinner = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress style={{width:"100px",height:"100px"}}/>
        </div>
    )
}

export default Spinner
