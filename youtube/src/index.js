import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAZqVFW_36kFmUaApx1DdvGB3RHFbIx18I';

class MainApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('dance');
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
            <div>
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

ReactDOM.render(<MainApp />, document.querySelector('.container'));