import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header(props) {
  const headerNavOptions = [
    { key: "home", displayName: "Home", routePath: "/" },
    { key: "products", displayName: "Our Products", routePath: "/products" },
    { key: "about", displayName: "About Us", routePath: "/about" },
  ];

  return (
    <div className="header-container">
      <div className="header-icon stc-display-inline-block">STC</div>
      <div className="header-nav-actions stc-display-inline-block">
        {headerNavOptions.map((navOption) => {
          return (
            <Link className="nav-option-link" to={navOption.routePath}>
              <span className="nav-option" key={navOption.key}>
                {navOption.displayName}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="header-nav-contact-us stc-display-inline-block">
        <FontAwesomeIcon icon={faAddressBook} />
        <span className="nav-option"> Contact Us</span>
      </div>
    </div>
  );
}

export default Header;
