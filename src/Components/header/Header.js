import logo from '../../img/b2.svg'
import '../../App.css';
const Header = () => {
    return ( 

        <header>
        <div class="flex">
          <div class="logo">
            <a href="https://www.instagram.com/b2_game_/">
            <img src={logo}  alt="" />
            </a>
          </div>
          <nav>
            <div class="hamburger-menu">
            <a href="index.html">Simulator</a>
              <a href="games/games.html">VR</a>
            </div>
            <ul id="nav-menu-container">
              <li><a href="index.html">Simulator</a></li>
              <li><a href="games/games.html">VR</a></li>
            </ul>
          </nav>
        </div>
      </header>
     );
}
 
export default Header;