import ReactPlayer from 'react-player'


const VideoItem = props => {
  const {videoDetails, onChangeVideo} = props
  const {title, URL} = videoDetails
  const onClickVideoItem = () => {
    onChangeVideo(videoDetails)
  }
  return (
    <li onClick={onClickVideoItem}>
      <ReactPlayer url={URL} controls height="100px" width="150px" />
      <div>
        <p className="title">{title}</p>
      </div>
    </li>
  )
}

export default VideoItem