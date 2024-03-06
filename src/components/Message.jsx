import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  // console.log("image" , message.senderTd === currentUser.uid
  // ? currentUser.photoURL
  // : data.user.photoURL)
  // console.log("message", message);

  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, [message.id]);

  return (
    <div
      ref={ref}
      
      className={`message ${message.senderTd === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderTd === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
       
        <span>just now </span>
      </div>

      <div className="messageContent">
        {message.text &&<p> { message.text} </p>}
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
