import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { login } from "../../actions/user";
import { connect } from "react-redux";

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      login(this.state.email, this.state.password, this.props.history)
    );

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        {/* {!this.props.user.token &&
          alert(
            "please LOGIN to create an event or SIGNUP to create an account"
          )} */}
        <LoginForm
          text="Login"
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("log in form ", state);
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(LoginContainer);
