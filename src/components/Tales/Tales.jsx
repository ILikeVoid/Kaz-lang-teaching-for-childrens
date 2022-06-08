import React from "react";
import s from "./Tales.module.css";

const Tales = () => {
    return(
        <div>
            <iframe width="300" height="315" src="https://www.youtube.com/embed/r0boG4KzU6g"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sP7wOjysdhM"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )

}

export default Tales;
