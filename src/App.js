import React from "react";
import "./App.css";
import axios from "axios";
import UserCards from "./Components/UserCards";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/brandleyj")
			.then(res => {
				console.log(res);
				this.setState({
					users: [...this.state.users, res.data]
				});
			})
			.catch(err => console.log(err));

		axios
			.get("https://api.github.com/users/brandleyj/followers")
			.then(res => {
				console.log(res);
				const followersArray = res.data;
				this.setState({
					users: [this.state.users[0], ...followersArray]
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<h1>React Github User Card</h1>
				<UserCards users={this.state.users} />
			</div>
		);
	}
}

export default App;
