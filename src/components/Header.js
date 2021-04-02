import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const headerNavOptions = [
    { key: "home", displayName: "Home" },
    { key: "products", displayName: "Our Products" },
    { key: "about", displayName: "About Us" },
  ];

  return (
    <div className="header-container">
      <div className="header-icon stc-display-inline-block">STC</div>
      <div className="header-nav-actions stc-display-inline-block">
        {headerNavOptions.map((navOption) => {
          return (
            <span className="nav-option" key={navOption.key}>
              {navOption.displayName}
            </span>
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
