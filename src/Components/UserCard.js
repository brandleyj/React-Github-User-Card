import React, { Component } from "react";

class UserCard extends Component {
	render() {
		const {
			user: {
				avatar_url,
				name,
				login,
				location,
				html_url,
				followers,
				following,
				bio
			}
		} = this.props;
		return (
			<div className="card">
				<img className="card-img-top" src={avatar_url} />
				<div className="card-body">
					<h3 className="card-title">{login}</h3>
					<p className="card-text">{name}</p>
					<p className="card-text">Location: {location} </p>
					<p className="card-text">Profile: {html_url} </p>
					<p className="card-text">Followers: {followers}</p>
					<p className="card-text">Following: {following}</p>
					<p className="card-text">Bio: {bio}</p>
				</div>
			</div>
		);
	}
}

export default UserCard;
