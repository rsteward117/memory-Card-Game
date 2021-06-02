import"./header.css"
import doomSlayer from '../doomImgs/doomSlayer.png'
const Header = (props) =>{
    return(
        <div id="header">
            <div id="leftSeaction">
                <h1 id="gameName">Doom Demon Memeory Game</h1>
                <p>click a demon to gain a point click the same Demon, and reset your score!</p>
            </div>
            <div id="middleSeaction">
                <img src={doomSlayer} />
            </div>
            <div id="rightSeaction">
                <h3>Score: </h3>
                <h3>Best Score: </h3>
            </div>
        </div>
    ) 
}

export default Header;