import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RouterHistory from "../../Service/History";
import './HeaderNav.css';

interface IProps {

}

const HeaderNav: React.FC<IProps> = (props) => {
  return (
    <header className="whapper-frm">
      <div className="whapper">
        <div className="header-nav-item">
          <button className="btn" type="submit" onClick={() => RouterHistory.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size="1x" />
          </button>
          {props.children}
        </div>
      </div>


    </header>
  )
};

export { HeaderNav };

