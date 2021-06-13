import React, { createContext, useState } from "react";

interface IProps {}

export interface IMenu {
  menuOn: boolean;
  setMenuOn: (Value: boolean) => void;
}

const MenuInitialState: IMenu = {
  menuOn: false,
  setMenuOn: (Value: boolean) => {},
};

export const MenuContext = createContext<IMenu>(MenuInitialState);

export const MenuContextProvider: React.FC<IProps> = (props) => {
  const [menuOn, setMenuOn] = useState(false);

  const StateMenu = {
    menuOn,
    setMenuOn,
  };

  return (
    <MenuContext.Provider value={StateMenu}>
      {props.children}
    </MenuContext.Provider>
  );
};
