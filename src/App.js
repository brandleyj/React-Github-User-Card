import React from "react";
import "./App.css";
import axios from "axios";
import UserCards from "./Components/UserCards";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #000000;
`;

const Title = styled.h1`
	font-size: 6rem;
	padding: 5vh;
	color: #e8647c;
`;

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
			<Container>
				<Title>React Github User Card</Title>
				<UserCards users={this.state.users} />
			</Container>
		);
	}
}

export default App;
