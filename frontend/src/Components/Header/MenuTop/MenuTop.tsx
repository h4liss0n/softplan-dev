import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MenuContext } from "../Header.Context";
import "./MenuTop.css";



interface IProps { }

const MenuTop: React.FC<IProps> = (props) => {
  const { menuOn, setMenuOn } = useContext(MenuContext);


  return (
    <>
      <section data-testid="header-login" className="menu-top">
        <div className="menu-top-bar">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            onClick={() => setMenuOn(!menuOn)}
          />
        </div>


        <div className="menu-top-search" />


      </section>
    </>
  );
};

export { MenuTop };

