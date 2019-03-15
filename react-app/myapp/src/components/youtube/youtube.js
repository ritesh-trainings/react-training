import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyAZqVFW_36kFmUaApx1DdvGB3RHFbIx18I';

class YouTubeApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('racing');
    }
    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos);
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (
            <div className='container'>
                <h1>Welcome to Youtube</h1>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState(
                        { selectedVideo }
                    )} />
            </div>
        )
    }
}

export default YouTubeApp;