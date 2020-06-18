import React from "react";
import "./user-details.scss";

class UserDetails extends React.Component {
  state = {};

  // Since I fetch the user with the form in the login-form component I don´t have to user available when
  // I search for the user in the url directly. Therefore I need to fetch the user here again by
  // accessing the username directly in the URL by using this.props.match.params.user
  async getUserData() {
    const url = `https://api.github.com/users/${this.props.match.params.user}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ userData: data });
    this.props.history.push({
      pathname: `/results/${data.login}`,
      data: data,
    });
  }

  render() {
    console.log(this.props.location.data);
    console.log(this.props.match.params.user);

    return <div></div>;
  }
}

export default UserDetails;
