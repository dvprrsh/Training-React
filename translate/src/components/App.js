import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />

					<ColourContext.Provider value="red">
						<UserCreate />
					</ColourContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
