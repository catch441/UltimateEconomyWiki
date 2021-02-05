import '../css/main.css';
import '../css/pluginInfo.css';
import job from '../css/img/posters/job.png';
import shop from '../css/img/posters/shop.png';
import town from '../css/img/posters/town.png';
import player from '../css/img/posters/player.png';

function PluginInfo() {
  return (
    <div class="page-bg">
        <p class="page-title ft-dodge title-dash">Plugin Info</p>
        <div class="poster-container">
            <img alt="" class="poster-img" src={shop}/>
            <p class="poster-title ft-dodge">Shop System</p>
            <p class="page-text">
                <b>Player commands are as follows:</b>
                <br />
                <span class="indent">•</span>/shopList <span class="indent" />- <i>Returns a list of all adminshops on the server.</i>
                <br />
                <span class="indent">•</span>/shop [shopname]
            </p>
            <br />
            <p class="page-text mb-0"><b>You can use the "Shop Editor GUI" for easy shop configuration. You can open the EditorGui via the following commands:</b></p>
            <p class="page-text"><span class="indent">•</span>/adminshop editShop [shopname] <br /><span class="indent">•</span>/playershop editShop [shopname] <br /><span class="indent">•</span>/rentshop editShop [shopname]</p>
        </div>
        <div class="poster-container">
            <img alt="" class="poster-img" src={job}/>
            <p class="poster-title ft-dodge">Job System</p>
        </div>
        <div class="poster-container">
            <img alt="" class="poster-img" src={town}/>
            <p class="poster-title ft-dodge">Town System</p>
        </div>
        <div class="poster-container">
            <img alt="" class="poster-img" src={player}/>
            <p class="poster-title ft-dodge">Player Features</p>
        </div>
    </div>
  );
}

export default PluginInfo;
