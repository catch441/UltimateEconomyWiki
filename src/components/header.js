import '../css/main.css';
import '../css/header.css';
import icon from '../css/img/icon.png';

function Header() {
  return (
    <div>
      <div className="bar" />
      <div id="header-container">
          <div id="header-pic-container">
              <div id="icon-container">
                <img alt="" id="icon" src={icon}></img>
              </div>
          </div>
          <div id="title-text-container">
              <p class="ft-dodge page-title">Ultimate Economy Wiki</p>
              <p id="subtitle-text"><b>Developer:</b> catch441<br /><b>Supported Minecraft Versions:</b> 1.16.x<br /><b>Supported Plugins:</b> Vault (optional)</p>
          </div>
      </div>
    </div>
  );
}

export default Header;
