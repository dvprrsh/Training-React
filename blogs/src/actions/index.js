import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get("/posts");
	dispatch({
		type: "FETCH_POSTS",
		payload: response
	});
};

export const fetchUser = userId => async dispatch => {
	const response = await jsonPlaceholder.get(`/users/${userId}`);
	dispatch({
		type: "FETCH_USER",
		payload: response.data
	});
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts.data, "userId"));
	// userIds.forEach(id => dispatch(fetchUser(id)));

	_.chain(getState().posts.data)
	  .map('userId')
	  .uniq()
	  .forEach(id => dispatch(fetchUser(id)))
	  .value()
};

// export const fetchUser = userId => dispatch => _fetchUser(userId, dispatch);

// const _fetchUser = _.memoize(async (userId, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${userId}`);
// 	dispatch({
// 		type: "FETCH_USER",
// 		payload: response.data
// 	});
// });
