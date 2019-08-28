import React from 'react'

import SearchBar from './SearchBar'
import youtube from '../APIs/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state = {videos: [], selectedVideo: null}

    onSearch= async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items, selectedVideo:response.data.items[0]})

    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }

    componentDidMount(){
        this.onSearch('')
    }
    
    render(){
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearch}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="twelve wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="four wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App