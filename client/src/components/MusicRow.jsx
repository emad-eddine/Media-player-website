import {
  FaRepeat,
  FaBackwardStep,
  FaPlay,
  FaPause,
  FaForwardStep,
  FaShuffle,
} from 'react-icons/fa6';


function MusicRow({
  trackPoster,
  trackName,
  trackAuthor,
  track,
  updatePlyingTrack
}) {
  





  return (
    <>
      <div className="track-row">
        <div
          className="track-row-poster"
          style={{ backgroundImage: `url(${trackPoster})` }}
          onClick={()=>{updatePlyingTrack(track)}}
        >
          <FaPlay className="poster-icon" />
        </div>
        <div className="track-row-info">
          <span>{trackName}</span>
          <span>{trackAuthor}</span>
        </div>
      </div>
      <div className="seperator"></div>
    </>
  );
}
export default MusicRow;
