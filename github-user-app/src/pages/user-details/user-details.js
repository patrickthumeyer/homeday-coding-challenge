import React from "react";
import "./user-details.scss";

class UserDetails extends React.Component {
  state = {
    username: "",
    userData: {},
  };

  // Since I fetch the user with the form in the login-form component I don´t have to user available when
  // I add the user in the url directly. Therefore I need to fetch the user here again by
  // accessing the username directly in the URL by using this.props.match.params.user
  async componentDidMount() {
    //get username from url, fetch data via API and add to state
    const url = `https://api.github.com/users/${this.props.match.params.user}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ userData: data });
  }

  render() {
    console.log(this.state.userData);
    return (
      <>
        <section>
          <h1>User Details</h1>
          <div>
            <img src={this.state.userData.avatar_url} />
          </div>
          <div>
            <p>Username: {this.state.userData.login}</p>
            {this.state.userData.bio && <p>Bio: {this.state.userData.bio}</p>}
            <p>Location: {this.state.userData.location}</p>
            <div>
              <p>Followers: {this.state.userData.followers}</p>
              <p>Following: {this.state.userData.following}</p>
            </div>
            <p>Public Repos: {this.state.userData.public_repos}</p>
          </div>
        </section>
      </>
    );
  }
}

export default UserDetails;
