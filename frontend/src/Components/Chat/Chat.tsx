import { faComment, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../img/avatar.png';
import socket from '../../Service/Socket';
import { ApplicationState } from '../../Store';
import * as Action from '../../Store/Chat/Action';
import { IUser } from '../../Store/Chat/Types';
import './Chat.css';

interface IProps { }

interface IPropsRoom {
  user: IUser;
}

const Chat: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const users = useSelector((store: ApplicationState) => store.chat);
  const [open, setOpen] = useState(false)

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
          from: user.userID,
          yourself: true
        })
      );
    };

    return (
      <footer className={open ? "chat-room chat-on" : "chat-room  chat-off"} key={user.userID}>
        <div className="chat-info-container">
          <img className="chat-avatar" src={avatar} alt="" />
          <div className="chat-info">
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
                  {m.fromSelf ?
                    (
                      <>
                        <strong className="chat-msg chat-yourself">Yourself</strong>
                        <label className="chat-msg chat-yourself" > {m.content} </label>
                      </>
                    ) : (
                      <>
                        <strong className="chat-msg chat-notyourself">{user.username}</strong>
                        <label className="chat-msg chat-notyourself" > {m.content} </label>
                      </>
                    )}


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

  const haveMessage = () => {
    return users.filter(f => f.haveMessage === true).length > 0;
  }

  return (
    <section className={open ? "chat-container-on" : "chat-container-off"} >
      {users.filter(u => u.yourself === false).map((usu) => {
        return <Room key={usu.userID} user={usu} />;
      })}

      <header className={open ? "flex-end" : "flex-center"}  >
        <button className={haveMessage() ? 'btn-chat-open chat-have-message' : 'btn-chat-open '} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faMinus : faComment} size="2x" />

        </button>
      </header>

    </section>
  );
};

export { Chat };

