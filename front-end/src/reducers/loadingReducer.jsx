
import { HIDE_LOADING, SHOW_LOADING } from "../types/types"

const initialState = {
    
    loading:false,

  };
  
  const reducer =  (state = initialState, action) =>  {
  
    switch (action.type) {

      case SHOW_LOADING:
      case HIDE_LOADING:
        return {
          ...state,
          loading : action.payload
        }

      default:
        return state;
    }
  
  };
  
  export default reducer;
  