import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "./actions";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"95401132216-5hep6kvf8frpgl66kkl246kqbn84h53c.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	signIn = () => {
		console.log(this.auth);
		this.auth.signIn();
	};

	signOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {

		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<div>
					<button
						className="ui red google button"
						onClick={this.signOut}
					>
						<i className="google icon" />
						Sign Out
					</button>
				</div>
			);
		} else {
			return (
				<div>
					<button
						className="ui red google button"
						onClick={this.signIn}
					>
						<i className="google icon" />
						Sign In with Google
					</button>
				</div>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.authReducer.isSignedIn };
};

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);
