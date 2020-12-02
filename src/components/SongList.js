import React from "react";
import SongDetail from "./SongDetail";

const SongList = ({songs, loaded}) => {

    const songNodes = songs.map(song => {

        if(!loaded){
            return(
                <p>loading songs...</p>
            )
        }

        if(loaded){
            return(
                <SongDetail song={song} key={song.id.attributes["im:id"]}/>
        )}
    })

    return(
        <div className="song-list">
            {songNodes}
        </div>
    )
        

    }
    


export default SongList