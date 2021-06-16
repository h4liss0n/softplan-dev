import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../img/avatar.png';
import socket from '../../Service/Socket';
import { ApplicationState } from '../../Store';
import * as Action from '../../Store/Chat/Action';
import { IUser } from '../../Store/Chat/Types';
import './Chat.css';

interface IProps {}

interface IPropsRoom {
  user: IUser;
}

const Chat: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const users = useSelector((store: ApplicationState) => store.chat);

  const Room: React.FC<IPropsRoom> = ({ user }) => {
    const [content, setcontent] = useState('');

    const send = (e: any) => {
      e.preventDefault();
      socket.emit('private message', {
        content,
        to: user.userID,
      });

      dispatch(
        Action.ChatPrivateMessage({
          content: content,
          from: socket.id,
        })
      );
    };

    return (
      <footer className="chat-room" key={user.userID}>
        <div className="chat-info-container">
          <img className="chat-avatar" src={avatar} alt="" />
          <div className="chat-info">
            {/* <label htmlFor=""> {user.userID} </label> */}
            <label htmlFor=""> {user.username} </label>
            {/* <label htmlFor=""> {user.yourself ? 'sim' : 'nao'} </label> */}
            <label htmlFor=""> {user.isOffline ? 'off' : 'on'} </label>
          </div>
        </div>

        <div>
          <div className="chat-message">
            {user.messages.map((m, i) => {
              return (
                <div key={i}>
                  <label className="chat-msg"> {m.content} </label>
                </div>
              );
            })}
          </div>
          <div className="chat-send">
            <input
              type="text"
              placeholder="Hello!"
              value={content}
              onChange={(e) => {
                setcontent(e.target.value);
              }}
            />
            <button className="btn-list add" onClick={(e) => send(e)}>
              Send
            </button>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <section className="chat-container">
      {users.map((usu) => {
        return <Room key={usu.userID} user={usu} />;
      })}
    </section>
  );
};

export { Chat };

