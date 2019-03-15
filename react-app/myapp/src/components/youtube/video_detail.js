import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return <div>Loading...</div>
    }
    const videoId = props.video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className=" row justify-content-md-center">
            <div className="video-detail col-md-8 border border-dark rounded p-2 m-2">
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={videoUrl} title="one"/>
                </div>
                <div className="details">
                    <div className='h4 mx-auto my-2'>{props.video.snippet.title} </div>
                    <div className='text-muted'>{props.video.snippet.description} </div>
                </div>
            </div>
        </div>
    )
}
export default VideoDetail;