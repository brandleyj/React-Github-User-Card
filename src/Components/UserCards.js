import React, { Component } from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	background: #47e4bb;
`;

class UserCards extends Component {
	render() {
		console.log(this.props);
		const { users } = this.props;
		return (
			<Cards>
				{users.map(user => (
					<UserCard user={user} />
				))}
			</Cards>
		);
	}
}

export default UserCards;
