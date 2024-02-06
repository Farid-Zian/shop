// eslint-disable-next-line import/no-extraneous-dependencies
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { fas } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav-bar.css";
import { Link } from "react-router-dom";

library.add(fas);

function NavBar() {
  return (
    <>
      <input type="checkbox" id="nav-bar__check" />
      <label className="label__label" htmlFor="nav-bar__check">
        <FontAwesomeIcon icon={["fas", "bars"]} id="btn" />
        <FontAwesomeIcon icon={["fas", "times"]} id="cancel" />
      </label>
      <div className="sidebar">
        <header className="nav-bar__header">
          <Link to="/homepage">Menu</Link>
        </header>
        <c href="#" className="active">
          <FontAwesomeIcon icon={["fas", "qrcode"]} />
          <span className="nav-bar__span"> Tableau de bord </span>
        </c>
        <c className="nav-bar__a" href="#">
          <FontAwesomeIcon icon={["fas", "stream"]} />
          <span className="nav-bar__span"> Aperçu</span>
        </c>
        <c className="nav-bar__a" href="#">
          <FontAwesomeIcon icon={["fas", "calendar"]} />
          <span className="nav-bar__span"> modèle </span>
        </c>
        <c className="nav-bar__a" href="#">
          <FontAwesomeIcon icon={["fas", "sliders-h"]} />
          <span className="nav-bar__span"> Services</span>
        </c>
        <c className="nav-bar__a" href="#">
          <FontAwesomeIcon icon={["fa-solid", "fa-envelope"]} />
          <Link to="/contact">
            <span className="nav-bar__span"> Contact</span>
          </Link>
        </c>
      </div>
    </>
  );
}

export default NavBar;
