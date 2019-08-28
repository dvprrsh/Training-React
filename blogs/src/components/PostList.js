import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostAndUsers();
	}

	renderList() {
		const data = this.props.posts.data;
		return data.map(post => {
			return (
				<div className="item" key={post.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
						<UserHeader userId={post.userId} />
					</div>
				</div>
			);
		});
	}

	render() {
		if (this.props.posts.length <= 0) return <div>Loading....</div>;
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ fetchPostAndUsers }
)(PostList);
