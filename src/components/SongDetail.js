import React from "react";

const SongDetail = ({song}) => {


    return(
        <div className="song">
            <p>{song.title.label}</p>
            <audio controls src={song.link[1].attributes.href} type="audio/x-m4a"></audio>
        </div>
    )

}

export default SongDetail 