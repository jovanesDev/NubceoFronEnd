import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithToken } from "../../actions/userActions";
import { getMusicStore } from "../../actions/musicStoreActions";

const PrivateComponent = ({ component: Component, ...props }) => {
  const token = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  useEffect(() => {
    if (token && !auth) {
      dispatch(getUserWithToken(token));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token && auth) {
      dispatch(getMusicStore(token));
    }
    // eslint-disable-next-line
  }, [token,auth]);

  return (
    <Route
      {...props}
      render={(props) =>
        !auth || !token ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateComponent;
