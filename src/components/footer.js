import '../css/main.css';
import '../css/footer.css';
import { SiDiscord } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div id="footer-container">
      <p class="footer-text"><b>Wiki Dev:</b> Vera Vargas<br /><b>Wiki Last Updated:</b> February 27, 2021</p>
      <p class="footer-icon"><SiDiscord /> <SiGithub /></p>
    </div>
  );
}

export default Footer;
