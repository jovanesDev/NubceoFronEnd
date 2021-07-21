import { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'

const UseFilterByGenre = (param) => {

    const bands = useSelector(state => state.musicStore.bands);
    const filterGenre = useSelector(state => state.musicStore.filterGenre);
    const [state, setState] = useState(bands)
    useEffect(() => {
        if(bands){
            setState(bands)
        }
        filter(param)
        // eslint-disable-next-line
    }, [bands,filterGenre])

    const filter = (param) => {
        setState(bands);
        if(param === ""){
            setState(bands);
            return;
        }else {
            setState(state.filter((band) => band.genreCode === param))
        }
    }

    return [state]
}

export default UseFilterByGenre
