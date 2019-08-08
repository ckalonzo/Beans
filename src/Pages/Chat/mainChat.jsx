import React, { Component } from "react";
import Layout from "./Component/Layout";
import "./scss/chat.scss";
export default class MainChat extends Component {
  render() {
    return (
      <div className="ta-chat">
        <div className="container">
          <Layout title="Chat" />
        </div>
      </div>
    );
  }
}
