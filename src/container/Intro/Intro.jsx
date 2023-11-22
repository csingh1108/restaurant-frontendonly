import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {meal} from '../../constants'

import './Intro.css';
import React, {useState} from "react";

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = React.useRef();

    const handleVideo =() => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo){
            vidRef.current.pause();
        } else{
            vidRef.current.play();
        }
    }



    return (
        <div className="app__video">
            <video loop controls={false} muted ref={vidRef}>
                <source src={meal} type="video/mp4"/>
            </video>
            <div className="app__video-overlay flex__center">
                <div
                    className={playVideo ? 'app__video-overlay_pause flex__center' : 'app__video-overlay_circle flex__center'}
                    onClick={handleVideo}>
                    {playVideo ? (
                        <BsPauseFill color="#fff" fontSize={30} className="pause-icon"/>
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30}/>
                    )}
                </div>
            </div>
        </div>

    )
};

export default Intro;
