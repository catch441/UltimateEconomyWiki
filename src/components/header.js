import '../css/main.css';
import '../css/header.css';
import icon from '../css/img/icon.png';

function Header() {
  return (
    <div id="header-container">
        <div id="header-pic-container">
            <div id="icon-container">
              <img alt="" id="icon" src={icon}></img>
            </div>
        </div>
        <div id="title-text-container">
            <p id="title-text" class="ft-dodge">Ultimate Economy Wiki</p>
            <p id="subtitle-text"><b>Developer:</b> catch441<br /><b>Supported Minecraft Versions:</b> 1.16.x<br /><b>Supported Plugins:</b> Vault (optional)</p>
        </div>
    </div>
  );
}

export default Header;
