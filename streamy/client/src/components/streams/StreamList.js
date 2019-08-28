import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderButtons(stream) {
		if (stream.userId === this.props.currUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderButtons(stream)}
					<i className="large middle aligned icon video red" />
					<div className="content">
						<Link to={`/streams/${stream.id}`}>{stream.title}</Link>
						<div className="description">
							{stream.description}
						</div>
					</div>
				</div>
			);
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		currUserId: state.authReducer.userId,
		streams: Object.values(state.streams),
		isSignedIn: state.authReducer.isSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchStreams }
)(StreamList);
