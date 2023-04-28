import { Link } from "react-router-dom";
import { HeaderContainer, LeftHeaderSide,  RightHeaderSide } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="sub-header">
        <RightHeaderSide>
          <img
            src="http://imgfz.com/i/OEygR5o.png"
            alt="Logo"
            className="top-header-logo"
          />
          Min eye dropper
        </RightHeaderSide>
        <LeftHeaderSide>
          <div className='buttons'>
          <a href="/eye-dropper-client/">Home</a>
          <Link to="/eye-dropper-client/privacy-policy">Privacy Police</Link>
          <Link className="not-found" to="">Help</Link>
          <Link className="not-found" to="">Change logs</Link>
          </div>
        </LeftHeaderSide>
      </div>
    </HeaderContainer>
  );
};

export default Header;
