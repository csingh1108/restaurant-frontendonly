import './Header.css';
import {SubHeading} from "../../components/index.js";
import {images} from "../../constants"

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavor"/>
          <h1 className="app__header-h1">The key to fine dining</h1>
          <p className="p__opensans" style={{margin: '2rem 0'}}>This is some generic text for use to see how it looks on this webpage. It needed to be a bit longer so I am adding more pointless lines. Isnt this fun.</p>
            <button type="button" className="custom__button">Explore Menu</button>
      </div>
          <div className="app__wrapper_img">
              <img src={images.welcome} alt="welcome_image"/>
          </div>

  </div>
);

export default Header;
