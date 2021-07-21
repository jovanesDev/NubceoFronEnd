import { LOGIN_FAILED, LOGIN_SUCCESS, LOG_OUT, USER_WITH_TOKEN_FAILED, USER_WITH_TOKEN_SUCCESS } from "../types/types"
import { hideLoading, showLoading } from "./loadingActions"
import axios from "../axios/axiosClient"
import errorAlert from "../components/UI/ErrorAlert/ErrorAlert";




export const loginRequest = (data) => {
    const {email,password} = data;
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const result = await axios.post("/auth/login",{email,password});
            dispatch(loginSuccess(result.data))
            dispatch(hideLoading())
        } catch (error) {
            dispatch(loginFailed())
            dispatch(hideLoading())
            errorAlert("Email or Password Incorrect")
        }
    }
}


const loginSuccess = (user) => ({
    type:LOGIN_SUCCESS,
    payload : user
})

const loginFailed = () => ({
    type:LOGIN_FAILED,
    payload : null
})


export const getUserWithToken = (token) => {

    return async (dispatch) => {
        dispatch(showLoading())

        try {
            const result = await axios.get("/user",{
                headers: {
                    "Authorization":`Bearer ${token}`
                }
            })
            dispatch(getUserWithTokenSuccess(result))
            dispatch(hideLoading())
            
        } catch (error) {
            dispatch(getUserWithTokenFalied())
            dispatch(hideLoading())
            errorAlert("Token is experied , please Log In")
        }
    }
}


const getUserWithTokenSuccess = (user) => ({

    type:USER_WITH_TOKEN_SUCCESS,
    payload:user
})


const getUserWithTokenFalied = () => ({
    type:USER_WITH_TOKEN_FAILED,
    payload:null
})


export const logOut = () => ({

    type:LOG_OUT,
})