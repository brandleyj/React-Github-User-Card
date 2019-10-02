import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
	max-width: 400px;
	margin: 2vh;
	background: #ec9b3b;
`;

const Image = styled.img`
	min-width: 400px;
`;

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
			<Card className="card">
				<Image className="card-img-top" src={avatar_url} />
				<div className="card-body">
					<h3 className="card-title">{login}</h3>
					<p className="card-text">{name}</p>
					<p className="card-text">Location: {location} </p>
					<p className="card-text">Profile: {html_url} </p>
					<p className="card-text">Followers: {followers}</p>
					<p className="card-text">Following: {following}</p>
					<p className="card-text">Bio: {bio}</p>
				</div>
			</Card>
		);
	}
}

export default UserCard;
