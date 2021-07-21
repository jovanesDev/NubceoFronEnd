import { useSelector } from 'react-redux'

const UseFindAlbum = (id) => {

    const state = useSelector(state => state.musicStore.albums)

    const album = state.filter((album) => (album.bandId === Number(id)))

    return [album]
}

export default UseFindAlbum
