
import React, { Dispatch, SetStateAction } from "react";
import avatar from '../../img/avatar.png';
import socket from "../../Service/Socket";
import "./Chat.css";
import { IUser } from "./chat.inteface";

interface IProps {
  users: IUser[]
  setListUser: Dispatch<SetStateAction<IUser[]>>
}

interface IPropsRoom {
  user: IUser
}

const Chat: React.FC<IProps> = ({ users, setListUser }) => {


  const Room: React.FC<IPropsRoom> = ({ user }) => {

    const content = 'Ola mundooooooooooooooooooooo';

    const send = (e: any) => {
      e.preventDefault();

      socket.emit("private message", {
        content,
        to: user.userID,
      });


      const index = users.findIndex((item) => item.username === user.username);

      const state = [...users];

      state[index].messages.push({
        content,
        fromSelf: true
      })

      setListUser(state);

    }

    return (
      <div key={user.userID}>
        <img className="chat-avatar" src={avatar} alt="" />
        <div className="chat-info">
          <label htmlFor=""  > {user.userID}  </label>
          <label htmlFor=""  > {user.username}  </label>
          <label htmlFor=""  > {user.yourself ? 'sim' : 'nao'}  </label>
          <label htmlFor=""  > {user.isOffline ? 'off' : 'on'}  </label>
        </div>

        <div>
          <div>
            {user.messages.map((m, i) => {
              return (
                <div key={i} >
                  <label  > {m.content} </label>
                </div>
              )
            })}
          </div>
          <button className="btn-list add" onClick={(e) => send(e)} >Send</button>
        </div>

      </div>)

  }






  return (
    <section className="chat-container">
      {users.map((usu) => {
        return <Room key={usu.userID} user={usu} />
      })}
    </section>

  );
};

export { Chat };

