
import {HIDE_LOADING, SHOW_LOADING} from '../types/types'

export const showLoading = () => {

    return ({
        type: SHOW_LOADING,
        payload : true
    })
}

export const hideLoading = () => {

    return ({
        type:HIDE_LOADING,
        payload: false
    })
}