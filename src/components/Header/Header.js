import HeaderItem from "../HeaderItem/HeaderItem";
import SiteLogo from "../../assets/images/header-logo.svg";
import "./header.css"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-wrapper">
          <a className="header-logo" href="/">
            <img src={SiteLogo} alt="Header Logo" width={176} height={41}></img>
          </a>
          <ul className="header__list">
            <HeaderItem title={"Home"} />
            <HeaderItem title={"About Me"} />
            <HeaderItem title={"Pages"} />
            <HeaderItem title={"Contact Us"} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
