import { useState } from 'react'
import Video from './Video/Video';
import { VIDEOS } from './Videos';
import './App.css'

function App() {
    return (
        <>
            <div className='video-container'>
                {
                    VIDEOS.map((video) => (
                    <Video 
                    key={video.id}
                    title={video.title} 
                    chanelName={video.chanelName} 
                    img={video.img}/>
                ))}
            </div>
        </>
    );
}

export default App
