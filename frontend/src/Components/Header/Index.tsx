import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import socket from "../../Service/Socket";
import { ApplicationState } from "../../Store";
import { Autorization } from "../Autorization/Autorization";
import { Chat } from "../Chat/Chat";
import { IUser } from "../Chat/chat.inteface";
import { MenuContextProvider } from "./Header.Context";
import { MenuLeft } from "./MenuLeft/MenuLeft";
import { MenuTop } from "./MenuTop/MenuTop";

interface IProps { }

const Header: React.FC<IProps> = (props) => {
  const store = useSelector((store: ApplicationState) => store);
  const [listUser, setListUser] = useState<IUser[]>([]);


  useEffect(() => {

    if (store.auth.isAuthenticated) {
      if (!socket.connected) {
        socket.auth = { username: store.auth.nome };
        socket.connect();



        socket.on("users", (users: IUser[]) => {

          const list = users.reduce<IUser[]>((total, value) => {

            total.push({
              userID: value.userID,
              username: value.username,
              isOffline: value.isOffline,
              messages: [],
              yourself: value.userID === socket.id
            })


            return total;
          }, [])
          setListUser(list)

        });


        socket.on("user connected", (user: IUser) => {
          // console.log('user connected', user)
          setListUser((oldState) => {
            const index = oldState.findIndex(usu => usu.username === user.username);

            if (index !== -1) {
              oldState[index].userID = user.userID;
              oldState[index].isOffline = false;
              return [...oldState]
            }
            return [...oldState, user]
          })
        });


        socket.on("user disconnect", (user: IUser) => {
          // console.log('user disconnect', user)

          setListUser((oldState) => {
            const index = oldState.findIndex(usu => usu.username === user.username);

            if (index !== -1) {
              oldState[index].isOffline = true;

              return [...oldState]
            }
            return oldState;
          })

        });

        socket.on("private message", ({ content, from }: { content: string; from: string }) => {
          const state = [...listUser]
          const index = state.findIndex(item => item.userID === from);
          if (index !== -1) {
            console.log("private message", content)

            state[index].messages.push({
              content,
              fromSelf: false
            })

          }
          console.log('state', state)

          setListUser(state)
          
        });


      }
    }







    return () => {
      socket.off("connect_error");
    }
  }, [store])





  return store.auth.isAuthenticated ? (
    <MenuContextProvider>
      <Autorization />
      <MenuTop />
      <MenuLeft />
      <Chat users={listUser} setListUser={setListUser} />
    </MenuContextProvider>
  ) : (
    <> </>
  );
};

export { Header };

