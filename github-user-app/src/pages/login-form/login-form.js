import React from "react";
import "./login-form.scss";

class LoginForm extends React.Component {
  state = {
    username: "",
    userData: {},
  };

  onChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getUserData();
  };

  // to fetch data I had to use api.github.com/users/ and not developer.github/v3/users which was
  // just the documentation

  // since component would have been unmounted before I can get data from the state I add the data as
  // additional property on location in order to pass the userData to the UserDetails Page

  // In many cases fetch goes into ComponentDidMount but since I´m fetching after the user entered a
  // username the fetch happens later

  async getUserData() {
    const url = `https://api.github.com/users/${this.state.username}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ userData: data });

    this.props.history.push({
      pathname: `/results/${data.login}`, // Target page
      data: data, // passing data along
    });
  }

  render() {
    console.log(this.state.username);

    return (
      <main>
        <h1>Welcome to GitHub User Info</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChangeHandler}
            placeholder="Please enter GitHub username"
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </main>
    );
  }
}

export default LoginForm;
