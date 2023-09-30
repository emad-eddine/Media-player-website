import { Link } from "react-router-dom"
import Wrapper from "../assets/styles/LandingPageWrapper"
import Logo from "../components/Logo"

function LandingPage() {
  return (
    <Wrapper>
      <Logo />

      <main className="main-section">
      <h1 className="title">Listen To Your Favorite Music Now</h1>
    
      <div className="action-section">
        <Link to="/register" className="register-btn">Register</Link>
        <Link to="/login"  className="login-btn">Login</Link>
      </div>
    
    
    </main>
    </Wrapper>
  )
}
export default LandingPage