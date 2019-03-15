import React, { Component } from 'react';
import VideoListItem from "./video_list_item"

const VideoList = (props) => (
    <ul className='list-group mt-2 mb-3'>
        {
            props.videos.map((video) => <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />)
        }
    </ul>
);

export default VideoList;