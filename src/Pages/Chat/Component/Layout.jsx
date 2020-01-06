import React, { Component } from "react";
import io from "socket.io-client";
import { USER_CONNECTED } from "../Events/Events";
import LoginForm from "./LoginForm";
import ChatContainer from "./chats/ChatContainer";
import { connect } from "react-redux";
import { signInAction } from "../../Redux/Store/actions/authActions";

const socketUrl = "http://localhost:3231";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  // Connect to and initializes the socket.
  initSocket = () => {
    const socket = io(socketUrl);

    socket.on("connect", () => {
      console.log("Connected");
    });

    this.setState({ socket });
  };

  //Sets the user property in state
  setUser = user => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  //Sets the user property in state to null.
  logout = () => {
    //   const { socket } = this.state;
    //  socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    //const { authError, auth } = this.props;
    const { socket, user } = this.state;
    return (
      <div className="container">
        {!user ? (
          <LoginForm socket={socket} setUser={this.setUser} />
        ) : (
          <ChatContainer socket={socket} user={user} logout={this.logout} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInAction: creds => dispatch(signInAction(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
