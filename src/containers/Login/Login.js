import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";

import { doLogin } from "./../../stores/actions/Login";

import "./Login.scss";

class Login extends Component {
  responseGoogle = response => {
    console.log(response);
    if (response && response.accessToken) {
      this.props.doGoogleLogin();
      this.props.history.push("/");
    }
  };
  componentDidMount() {
    if (this.props.isSignedIn) this.props.history.push("/");
  }
  getClientId = () => {
    let location = window.location.href;
    if (location.includes("localhost"))
      return "654212365561-8386cu90m9trb7optiiqi4qcjl61rf2n.apps.googleusercontent.com";
    return "654212365561-pen06nb31s5octkm7bradbvoe605cnik.apps.googleusercontent.com";
  };
  render() {
    return (
      <div className="login-cont">
        <div className="card-sm">
          <h2>You are not signin. Please signin with google.</h2>
          <GoogleLogin
            clientId={this.getClientId()}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doGoogleLogin: () => dispatch(doLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
