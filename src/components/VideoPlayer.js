import {Component} from 'react'
import ReactPlayer from 'react-player';
import VideoItem from './VideoItem'


const videos = [
  {
    title: 'Campfire Embers',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/2ebf5c04-6beb-4486-948f-4c044a27d994/mp4/Campfire_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ember', 'Fire', 'Log'],
  },
  {
    title: 'Shuttle Launch',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/15dc8353-5237-48c7-a021-b498851a844c/mp4/LaunchingOfRocket_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Space', 'Fire', 'Spark'],
  },
  {
    title: 'Smoke in the forest',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/c85ac563-c092-41d4-938a-c61d2390ff56/mp4/Smoke_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Smoke', 'Tree'],
  },
  {
    title: 'Cars Drifting',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/e79c0f25-85cf-4ade-b9b6-ef9d2456222b/mp4/CarDriftRacing_Mp4_Avc_Aac_16x9_1280x720p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Car', 'Track', 'Drifting'],
  },
  {
    title: 'Home Streight',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/88119a33-e117-42d1-9e9b-104dfb7282b9/mp4/Carracing_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Car', 'Racing', 'Track'],
  },
  {
    title: 'Cycle Race',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/f0e50064-c689-4a2f-9cc4-0ff9e6ddfb81/mp4/Cyclerace1_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Bike', 'Racing', 'Road'],
  },
  {
    title: 'Ice on the tree',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/d7a6a3fe-85b4-4074-ad40-e29ddca34035/mp4/IceBranches_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Tree', 'Ice', 'Snow'],
  },
  {
    title: 'Ice on the river',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/ad599d83-471f-42bc-8822-8c5b598cb4e0/mp4/IceFloating_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ice', 'River', 'Snow'],
  },
  {
    title: 'Glacier Melting',
    URL:
      'https://d262gd3sdzodff.cloudfront.net/debe0e59-f65c-4aeb-8d4e-788d20090825/mp4/IceWater_Mp4_Avc_Aac_16x9_1920x1080p_24Hz_8.5Mbps_qvbr.mp4',
    tags: ['Ice', 'River'],
  },
]

class VideoPlayer extends Component {
  state = {selectedVideo: videos[0], videosList: videos, searchText: ''}

  onChangeVideo = videoDetails => {
    this.setState({selectedVideo: videoDetails, searchText: ''})
  }

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value})
  }

  renderSearchSection = () => {
    const {searchText} = this.state
    return (
      <div>
        <label htmlFor="search" className="label-element">
          Search with name
        </label>
        <br />
        <input
          id="search"
          value={searchText}
          onChange={this.onChangeSearchText}
          className="input-element"
          type="search"
          placeholder="Search Here"
        />
      </div>
    )
  }

  renderVideosList = () => {
    const {videosList, searchText} = this.state
    const searchResults = videosList.filter(eachVideo =>
      eachVideo.title.toLowerCase().includes(searchText.toLowerCase()),
    )
    return (
      <div className="videos-display">
        <h1 className="heading">Videos List</h1>
        {this.renderSearchSection()}
        <ul className="videos-list-container">
          {searchResults.map(eachVideo => (
            <VideoItem
              key={eachVideo.title}
              videoDetails={eachVideo}
              onChangeVideo={this.onChangeVideo}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderVideoDisplayer = () => {
    const {selectedVideo} = this.state
    const {URL, title, tags} = selectedVideo
    return (
      <div className="main-video-container">
        <ReactPlayer
          url={URL}
          controls
          playing="true"
          height="500px"
          width="900px"
        />
        <h1 className="video-title">{title}</h1>
        <h2 className="video-title">Tags</h2>
        <ul>
          {tags.map(eachTag => (
            <li>{eachTag}</li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="video-player-container">
        <div className="responsive-container">
          {this.renderVideosList()}
          {this.renderVideoDisplayer()}
        </div>
      </div>
    )
  }
}

export default VideoPlayer
