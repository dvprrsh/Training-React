import React from "react";

import { connect } from "react-redux";

class UserHeader extends React.Component {
	render() {
		const user = this.props.user;

		if (!user) {
			return null;
		}

		return <div>{user.name}</div>;
	}
}

const mapStateToProp = (state, ownProps) => {
	const user = state.users.find(user => user.id === ownProps.userId);
	return { user: user };
};

export default connect(mapStateToProp)(UserHeader);
