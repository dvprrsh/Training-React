import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

import useLocation from './useLocation'

const App = () => {
	const {lat, errorMessage} = useLocation()

	let content;
	if (errorMessage) {
		content = <div>Error: {errorMessage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Loading loadingText="Waiting for User Response...." />;
    }
    
    return <div className="border red">{content}</div>
};

// class App extends React.Component {
// 	state = { lat: null, error: "" };

// 	componentDidMount() {
// 		window.navigator.geolocation.getCurrentPosition(
// 			position => {
// 				this.setState({
// 					lat: position.coords.latitude,
// 					long: position.coords.longitude
// 				});
// 			},
// 			error => {
// 				this.setState({ error: error.message });
// 			}
// 		);
// 	}

// 	render() {
// 		if (this.state.error) {
// 			return <div>Error:{this.state.error}</div>;
// 		} else if (this.state.lat) {
// 			return <SeasonDisplay lat={this.state.lat} />;
// 		} else {
// 			return <Loading loadingText="Waiting for User Response...." />;
// 		}
// 	}
// }

ReactDOM.render(<App />, document.querySelector("#root"));
