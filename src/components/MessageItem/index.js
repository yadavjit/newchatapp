import { useState } from "react";
import "./index.css";

const MessageItem = (props) => {
  const [counter, setCounter] = useState(0);
  const { messageDetails } = props;
  const { message, initialClassName } = messageDetails;
  const users = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const userNam = users[Math.ceil(Math.random() * users.length - 1)];

  const initial = userNam[0].toUpperCase() + userNam[0].toUpperCase();
  const likeTextClassName = "button active";
  const likeImageUrl =
    "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png";

  const postedTime = new Date().toLocaleTimeString();

  const onClickLike = () => {
    setCounter(counter + 1);
  };

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{userNam}</p>
            <p className="time">{postedTime}</p>
          </div>
          <div className="message-container">
            <p className="comment">{message}</p>
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            {counter} Like
          </button>
        </div>
      </div>
    </li>
  );
};

export default MessageItem;
