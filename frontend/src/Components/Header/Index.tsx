import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import socket from '../../Service/Socket';
import { ApplicationState } from '../../Store';
import { Autorization } from '../Autorization/Autorization';
import { MenuContextProvider } from './Header.Context';
import { MenuLeft } from './MenuLeft/MenuLeft';
import { MenuTop } from './MenuTop/MenuTop';



interface IProps {}

const Header: React.FC<IProps> = (props) => {
  const store = useSelector((store: ApplicationState) => store);

  useEffect(() => {
    if (store.auth.isAuthenticated) {
      if (!socket.connected) {
        socket.auth = { username: store.auth.nome };
        socket.connect();
      }
    }
    return () => {
      socket.off('connect_error');
    };
  }, [store.auth]);

  return store.auth.isAuthenticated ? (
    <MenuContextProvider>
      <Autorization />
      <MenuTop />
      <MenuLeft />      
    </MenuContextProvider>
  ) : (
    <> </>
  );
};

export { Header };

