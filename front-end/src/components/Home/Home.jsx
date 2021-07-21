import React, { useState } from 'react'
import Navbar from "../UI/Navbar/Navbar"
import Container from "@material-ui/core/Container";
import MusicStore from "../MusicStore/MuiscStore"

const Home = () => {

  const [search,setSearch] = useState("")

    return (
        <main>
        <Container maxWidth="xl">
          <Navbar setSearch={setSearch}/>
          <MusicStore search={search}/>
        </Container>
        </main>
    )
}

export default Home
