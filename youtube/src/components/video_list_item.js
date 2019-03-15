import React, { Component } from 'react';

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const onVideoSelect = props.onVideoSelect;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(props.video)} style={{'cursor':'pointer'}}>
            <div className='video-list media'>
                <div className='media-left'>
                    <img className='media-object' src={imageUrl} alt="Video Image" />
                </div>
                <div className="media-body">
                    <div className='media-heading'>
                        {props.video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}
export default VideoListItem;