import React, {useEffect, useState} from "react";
import s from "./Tales.module.css";
import axios from "axios";

const Tales = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        axios
            .get("https://628e700d368687f3e716f35d.mockapi.io/api/test/video")
            .then((Response) => setVideo(Response.data));
    }, []);
    return (
        <div>
            {video.map(elem => {
                return <div className={s.tales}>
                    <iframe src={elem.videoUrl} />
                    <div className={s.description}><h2>{elem.description}</h2></div>
                </div>
                }
            )}
        </div>

    )

}

export default Tales;
