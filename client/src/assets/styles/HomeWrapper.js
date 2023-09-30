import { styled } from 'styled-components';
import posterImg from '../images/poster.jpg';
import posterImg2 from '../images/poster2.jpg';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--dark-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1px;

  .track-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .music-poster {
    width: 40%;
    margin-top: 2rem;
    aspect-ratio: 1;
    background-image: url(${posterImg});
    background-size: cover;
    border-radius: 18px;
    box-shadow: 0px 15px 8px rgba(0, 0, 0, 0.2);
  }

  .music-info {
    margin-top: 2rem;
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
  }
  .track-controller {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.8rem;
  }
  .player-progress-container,
  .player-progress {
    width: 100%;
    height: 5px;
    border-radius: 10px;
    background-color: gray;
  }
  .player-progress {
    width: 50%;
    background-color: blueviolet;
  }

  .player-info {
    width: 100%;
    margin-top: 0.5rem;
    display: flex;
  }

  .player-info span:first-child {
    width: 100%;
    flex: 1;
    text-align: start;
    user-select: none;
  }
  .player-info span:nth-child(2) {
    width: 100%;
    flex: 1;
    text-align: end;
    user-select: none;
  }

  .player-controller {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.8rem;
  }

  .player-controller * {
    font-size: 1.4rem;
    cursor: pointer;
  }

  .player-controller *:hover {
    color: var(--green-color);
  }

  .tracks-container {
    width: 80%;
    height: fit-content;
    background-color: var(--dark-color-200);
    margin-top: 1.8rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 2rem;
  }
  .track-row {
    width: 99%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .track-row-poster {
    width: 10%;
    aspect-ratio: 1;
    flex: 1;
    background-image: url(${posterImg2});
    background-size: cover;
    margin: 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .poster-icon {
    color: black;
    font-size: larger;
    visibility: hidden;
  }

  .track-row-poster:hover {
    .poster-icon {
      visibility: visible;
    }
    border: 3px solid var(--green-color);
    transform: translateX(5px);
  }
  .track-row-info {
    width: 100%;
    flex: 1;
    text-align: center;
  }
  .track-row-info span {
    display: block;
    font-size: 1.5rem;
    text-align: start;
  }

  .seperator {
    width: 100%;
    height: 1px;
    background-color: gray;
    opacity: 0.1;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    height: 90vh;
    padding: 1px;
    overflow: auto;

    .track-container {
      flex: 60%;
      margin-top: 1rem;
    }
    .tracks-container {
      flex: 30%;
      max-height: 90vh;
      overflow-y: scroll;
      margin-right: 2rem;
      margin-top: 6rem;
    }

    .tracks-container::-webkit-scrollbar {
      width: 2px;
    }
    .tracks-container::-webkit-scrollbar-thumb {
      background: var(--green-color);
      border-radius: 10px;
    }
  }
`;

export default Wrapper;
