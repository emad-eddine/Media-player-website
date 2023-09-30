import logo from "../assets/images/music_icon.svg"
import Wrapper from "../assets/styles/LogoWrapper"

function Logo({className}) {
  return (
  <Wrapper>
  <div className={`logo-section ${className}`}>
        <img src={logo} alt="logo_img" />
        <span>Music Player</span>
      </div>
      </Wrapper>
  )
}
export default Logo