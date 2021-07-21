import { useSelector } from 'react-redux'

const UseFindBandInfo = (id) => {

    const state = useSelector(state => state.musicStore.bands)

    const band = state.filter((band) => (band.id === Number(id)))

    return [band[0]]
}

export default UseFindBandInfo
