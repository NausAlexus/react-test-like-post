import { useState } from "react";
import "./Video.css";

function Video (props) {
    const {title, chanelName, img} = props;
    const [likesCount, setLikesCount] = useState(0);

    const increasLikesByOne = () => {
        setLikesCount(likesCount + 1);
    };

    return (
        <div className='video'>
            <img className='video-img' src={img} alt="Video" />
            <p>{title}</p>
            <p>{chanelName}</p>
            <div className='video-footer'>
                <p>Like: {likesCount}</p>
                <button className="buttonLike" onClick={increasLikesByOne}>Like</button>
            </div>
        </div>
    );
}

export default Video;