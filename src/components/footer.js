import '../css/main.css';
import '../css/footer.css';
import {
  Link
} from "react-router-dom";
import { SiDiscord } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div>
      <div id="footer-container">
        <div className="bar mb-3" />
        <p class="footer-text"><b>Wiki Dev:</b> Vera Vargas<br /><b>Wiki Last Updated:</b> February 27, 2021</p>
        <Link to="/change-log"><p className="footer-text">( <i>Visit the Change Log</i> )</p></Link>
        <p class="footer-icon"><SiDiscord /> <SiGithub /></p>
        <div className="bar mt-3" />
      </div>
    </div>
  );
}

export default Footer;
