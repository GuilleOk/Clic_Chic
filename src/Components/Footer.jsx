import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="firstContainer">
        <div className="footerLogo">
          <img src="images/LOGO_OK.png" alt="Logo" className="LogoFooter" />
        </div>
        <div className="redesSocialesContainer">
          <div><a href="..."><img src="images/redes_sociales/facebook_2504903.png" alt="facebook" className="Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/instagram_2111463.png" alt="instagram" className="Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/linkedin_3536505.png" alt="linkedin" className="Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/twitter_2504947.png" alt="twitter" className="Logo" /></a></div>
          <div><a href="..."><img src="images/redes_sociales/youtube_3938037.png" alt="youtube" className="Logo" /></a></div>
        </div>
      </div>
      <div className="hr">
        <hr />
      </div>
      <div className='SecondContainer'>
        <div className="textFooter">All Rigths Reserved</div>
        <div className="textFooter"><strong>Follow us in:</strong> <a href="https://www.mycloudtest.x10.mx" className="linksFooter">mycloudtest.x10.mx</a> </div>
        <div className="textFooter"><Link to='/about' className="linksFooter">About us</Link></div>
        <div className="textFooter"><Link to='/privacity' className="linksFooter">Privacy Policy</Link></div>
      </div>
    </div>
  )
}

export default Footer