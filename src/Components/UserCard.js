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
			<div>
				<img src={avatar_url} />
				<div>
					<h3>{login}</h3>
					<p>{name}</p>
					<p>Location: {location} </p>
					<p>Profile: {html_url} </p>
					<p>Followers: {followers}</p>
					<p>Following: {following}</p>
					<p>Bio: {bio}</p>
				</div>
			</div>
		);
	}
}

export default UserCard;
