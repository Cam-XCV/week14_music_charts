import React, {useState, useEffect} from "react";
import SongList from "../components/SongList"

const ChartContainer = () => {

    const [songs, setSongs] =  useState([])
    const [loaded, setLoaded] = useState(false)

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((res) => res.json())
        .then((data => setSongs(data.feed.entry)))
        .then(setLoaded(true))
    }

    useEffect(()=>{
        getSongs()
    }, [])

    return(
        <>
            <h1>UK Top 20</h1>
            <SongList songs={songs} loaded={loaded}/>
        </>
    )


}

export default ChartContainer;