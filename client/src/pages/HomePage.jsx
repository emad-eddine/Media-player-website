import Wrapper from '../assets/styles/HomeWrapper';
import {
  FaRepeat,
  FaBackwardStep,
  FaPlay,
  FaPause,
  FaForwardStep,
  FaShuffle,
} from 'react-icons/fa6';
import MusicRow from '../components/MusicRow';
import customFetch from './../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';

export const loader = async ({ request }) => {
  try {
    const data = await customFetch.get('/data');
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    return error;
  }
};

function HomePage() {
  const { data } = useLoaderData();
  const tracks = data.data.filter((item) => item !== null);

  const [trackPlaying, setTrackPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const audio = document.getElementById('myAudio');
  const audioProgressBar = document.getElementById("audioProgressDiv")

  useEffect(() => {
    setTrackPlaying(tracks[0]);
  }, []);

  const updatePlyingTrack = (music) => {
    setTrackPlaying(music);
  };

  const play = () => {
    const context = new AudioContext();

    context.resume().then(() => {
      setIsPlaying(true);

      audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;

        setCurrentTime(currentTime);
      });

      audio.play();
    });
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  const convertToPlayerTime = (durationInSeconds) => {
    let minutes = '';
    let seconds = '';

    minutes = Math.trunc(durationInSeconds / 60);
    seconds = Math.trunc(durationInSeconds % 60);

    if (minutes < 10) {
      minutes = '0' + '' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + '' + seconds;
    }
    return minutes + ':' + seconds;
  };


  const calculateProgress = (current,duration)=>{

    let progress = ((current * 100) / duration)
    console.log(progress);
    return progress

  }


  const getClickedPosition = ()=>{
    audioProgressBar.addEventListener('click', (e) => {
  
        const clickX = e.clientX - audioProgressBar.getBoundingClientRect().left;
        const divWidth = audioProgressBar.clientWidth;

          // Calculate the percentage
          const percentageClicked = (clickX / divWidth) * 100;

          const time = calculateCurrentTimeBasedOnWidth(percentageClicked)

          setCurrentTime(time)

          audio.currentTime = time;

          
      
      })
  }

  const calculateCurrentTimeBasedOnWidth = (width)=>{
      return width * trackPlaying.duration / 100
  }

  return (
    <Wrapper>
      <div className="track-container">
        <div
          className="music-poster"
          style={{ backgroundImage: `url(${trackPlaying?.poster})` }}
        >
          <audio
            id="myAudio"
            type="audio/mp3"
            src={trackPlaying ? trackPlaying.track : tracks[0].track}
          ></audio>
        </div>
        <div className="music-info">
          <h5>{trackPlaying?.title}</h5>
          <h6>{trackPlaying?.author}</h6>
        </div>
        <div className="track-controller">
          <div className="player-progress-container" onClick={getClickedPosition} id="audioProgressDiv" >
            <div className="player-progress" style={
              {width:`${calculateProgress(currentTime,trackPlaying?.duration)}%`
              }
              }></div>
          </div>
          <div className="player-info">
            <span>{currentTime ? convertToPlayerTime(currentTime) : '00:00'}</span>
            <span>
              {trackPlaying
                ? convertToPlayerTime(trackPlaying.duration)
                : convertToPlayerTime(tracks[0].duration)}
            </span>
          </div>
          <div className="player-controller">
            <FaRepeat />
            <FaBackwardStep />

            {isPlaying ? (
              <FaPlay
                onClick={() => {
                  pause();
                }}
              />
            ) : (
              <FaPause
                onClick={() => {
                  play();
                }}
              />
            )}

            <FaForwardStep />
            <FaShuffle />
          </div>
        </div>
      </div>
      <div className="tracks-container">
        {tracks?.map((track, index) => {
          if (track) {
            return (
              <MusicRow
                trackName={track.title}
                trackAuthor={track.author}
                trackPoster={track.poster}
                key={index}
                track={track}
                updatePlyingTrack={updatePlyingTrack}
              />
            );
          }
        })}
      </div>
    </Wrapper>
  );
}
export default HomePage;
