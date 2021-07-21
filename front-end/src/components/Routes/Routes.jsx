import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Home from "../Home/Home";
import PrivateComponent from "../Routes/PrivateComponent";
import BandsInfo from "../BandsInfo/BandsInfo";
import Spinner from "../UI/Spinner/Spinner";


const Routes = () => {

    const loading = useSelector(state => state.loading.loading)

    return (
        <>
        {loading && <Spinner/>}
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateComponent exact path="/home" component={Home}/>
            <PrivateComponent exact path="/band/:id" component={BandsInfo}/>
          </Switch>
        </Router>
        </>
    )
}

export default Routes
