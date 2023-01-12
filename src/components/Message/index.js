import { Component } from "react";
import { v4 } from "uuid";

import MessageItem from "../MessageItem";

import "./index.css";
import { HiOutlineUsers } from "react-icons/hi";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class Message extends Component {
  state = {
    messageList: [],
    counter: 0,
  };

  renderMessageList = () => {
    const { messageList } = this.state;

    return messageList.map((eachMessage) => (
      <MessageItem key={eachMessage.id} messageDetails={eachMessage} />
    ));
  };

  onAddMessage = (event) => {
    event.preventDefault();
    const { messageInput } = this.state;
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ]
    }`;

    const newMessage = {
      id: v4(),
      message: messageInput,

      initialClassName: initialBackgroundColorClassName,
    };

    this.setState((prevState) => ({
      messageList: [...prevState.messageList, newMessage],
      messageInput: "",
    }));
  };

  onChangeMessageInput = (event) => {
    this.setState({
      messageInput: event.target.value,
    });
  };

  render() {
    const { messageInput, messageList } = this.state;

    return (
      <div className="app-container">
        <h1 className="top-heading">Introductions</h1>

        <div className="sub-head">
          <p className="para">This Channel Is For Company Wide Chater</p>
          <div className="sub-sub-head">
            <p>3/100</p>
            <HiOutlineUsers className="user-icon" />
          </div>
        </div>

        <hr className="line" />
        <p className="heading">
          <span className="comments-count">{messageList.length}</span>
          Messages
        </p>
        <ul className="comments-list">{this.renderMessageList()}</ul>
        <div className="comments-container">
          <div className="comments-inputs">
            <div className="form">
              <input
                placeholder="Your Message"
                className="comment-input"
                value={messageInput}
                onChange={this.onChangeMessageInput}
              />
              <button
                type="submit"
                className="add-button"
                onClick={this.onAddMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
