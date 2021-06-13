import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../Store";
import { Autorization } from "../Autorization/Autorization";
import { MenuContextProvider } from "./Header.Context";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import { MenuTop } from "./MenuTop/MenuTop";

interface IProps {}

const Header: React.FC<IProps> = (props) => {
  const store = useSelector((store: ApplicationState) => store);

  return store.auth.isAuthenticated ? (
    <MenuContextProvider>
      <Autorization/>
      <MenuTop />
      <MenuLeft />
    </MenuContextProvider>
  ) : (
    <> </>
  );
};

export { Header };

