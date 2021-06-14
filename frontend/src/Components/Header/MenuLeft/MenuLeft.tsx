import {
  faPeopleArrows,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import RouterHistory from "../../../Service/History";
import * as Action from "../../../Store/Auth/Action";
import { MenuContext } from "../Header.Context";
import "./MenuLeft.css";

interface IProps { }

const MenuLeft: React.FC<IProps> = (props) => {
  const { menuOn, setMenuOn } = useContext(MenuContext);
  const dispatch = useDispatch();
  const getMenuOn = (Value: string) => {
    return menuOn ? `${Value} on` : `${Value} off`;
  };

  const handelClickMenu = (Value: string) => {
    setMenuOn(false);
    RouterHistory.push(Value);
  };

  const handleClickLogout = () => {
    dispatch(Action.RequestLogout());
  };

  return (
    <>
      <section className={getMenuOn("menu-left")}>
        <section className="menu-left-avatar">
          <img src="https://source.unsplash.com/user/erondu/50x50" alt="" />
          <label>User</label>
        </section>
        <section className="menu-left-btn">
          <ul>
            <li onClick={() => handelClickMenu("/cliente/lista")}>
              <FontAwesomeIcon icon={faPeopleArrows} size="2x" />
              <label className="label-menu">People</label>
            </li>
          </ul>
          <ul>
            <li onClick={() => handleClickLogout()}  data-testid="btn-logooff" >
              <FontAwesomeIcon icon={faPowerOff} size="2x" />
              <label className="label-menu">Off</label>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export { MenuLeft };

