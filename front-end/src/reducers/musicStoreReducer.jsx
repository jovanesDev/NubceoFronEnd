import { GET_MUSIC_STORE_FAILED, GET_MUSIC_STORE_SUCCESS, SORT_ASC, SORT_DESC,MUSIC_STORE_CHANGED, FILTER_BY_GENRE } from "../types/types";

const initialState = {

    bands:null,
    albums:null,
    genre:null,
    changed:false,
    filterGenre:"",
}

const reducer = (state = initialState,action) => {

    switch (action.type) {

        case GET_MUSIC_STORE_SUCCESS:
            return{
                ...state,
                bands:action.payload.bands,
                albums:action.payload.albums,
                genre:action.payload.genre
            }

            
        case GET_MUSIC_STORE_FAILED:
            return{
                ...state,
                bands:action.payload,
                albums:action.payload,
                genre:action.payload
            }

        case SORT_ASC:
        case SORT_DESC:
            return {
                ...state,
                bands:action.payload,
                changed:false,
            }
        
        case FILTER_BY_GENRE:
            return{
                ...state,
                filterGenre:action.payload,
                changed:false
            }

        case MUSIC_STORE_CHANGED:
            return{
                ...state,
                changed:true,
            }
    
        default:
            return state;
    }

}

export default reducer