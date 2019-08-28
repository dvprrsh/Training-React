import Modal from "../Modal";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onDelete = () => {
		this.props.deleteStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			<React.Fragment>
				<button className="ui negative button" onClick={this.onDelete}>
					Delete
				</button>
				<Link className="ui button" to={"/"}>
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete this recorded stream?";
		}

		return `Are you sure you want to delete the recorded stream "${
			this.props.stream.title
		}"`;
	}

	render() {
		return (
			<Modal
				header="Delete"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
		);
	}
}

const mapStateToProps = (state, ownprops) => {
	return { stream: state.streams[ownprops.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ fetchStream, deleteStream }
)(StreamDelete);
