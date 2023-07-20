import '../App.css'

import Twitter from './imgs/twitter.png'
import YouTube from './imgs/youtube.png'
import Instagram from './imgs/instagram.png'

function SocialMedia(){
    return(
        <div className="SocialMedia">
            <ul>
                <li>
                    <img src={Twitter} alt="Icone Twitter"/>
                </li>
                <li>
                    <img src={YouTube} alt="Icone YouTube"/>
                </li>
                <li>
                    <img src={Instagram} alt="Icone Instagram"/>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia