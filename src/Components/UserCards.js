import React, { Component } from "react";
import UserCard from "./UserCard";

class UserCards extends Component {
	render() {
		console.log(this.props);
		const { users } = this.props;
		return (
			<div>
				{users.map(user => (
					<UserCard user={user} />
				))}
			</div>
		);
	}
}

export default UserCards;
