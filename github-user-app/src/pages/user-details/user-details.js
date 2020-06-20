import React from "react";
import "./user-details.scss";

class UserDetails extends React.Component {
  state = {
    username: "",
    userData: {},
  };

  // Since I fetch the user with the form in the login-form component I don´t have the user available when
  // I add the user in the url directly. Therefore I need to fetch the user here again by
  // accessing the username directly in the URL by using this.props.match.params.user
  async componentDidMount() {
    try {
      //get username from url, fetch data via API and add to state
      const url = `https://api.github.com/users/${this.props.match.params.user}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ userData: data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    // console.log(this.state.userData);
    return (
      <>
        <section className="card">
          <div className="card-img-wrapper">
            <img
              className="card-img-wrapper-img"
              src={this.state.userData.avatar_url}
              alt="user"
            />
          </div>
          <div className="card-user-info">
            <div>
              <h2 className="card-user-info-username">
                {this.state.userData.login}
              </h2>
              {this.state.userData.bio && <p>{this.state.userData.bio}</p>}
              {this.state.userData.location && (
                <p>Location: {this.state.userData.location}</p>
              )}
              <div className="card-user-info-follow">
                <p className="card-user-info-follow-followers">
                  Followers: {this.state.userData.followers}
                </p>
                <p className="card-user-info-follow-following">
                  Following: {this.state.userData.following}
                </p>
              </div>
            </div>
            <div className="card-user-info-repo-button-wrapper">
              <p>Public Repos: {this.state.userData.public_repos}</p>
              <button className="card-user-info-repo-button-wrapper-button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.state.userData.html_url}
                >
                  GitHub profile
                </a>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default UserDetails;
