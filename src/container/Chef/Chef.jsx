import './Chef.css';
import {images} from "../../constants"
import {SubHeading} from "../../components/index.js";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
    </div>

      <div className="app__wrapper_info">
          <SubHeading title="Chef's Word"/>
          <h1 className="headtext__cormorant">What we believe in</h1>

          <div className="app_chef-content">
              <div className="app__chef-content_quote">
                  <img src={images.quote} alt="quote"/>
                  <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Some extra words  </p>
              </div>
              <p className="p__opensans">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="app__chef-sign">
              <p>Kenin Luo</p>
              <p className="p__opensans">Chef and Founder</p>
              <img src={images.sign} alt="sign"/>
          </div>

      </div>
  </div>
);

export default Chef;
