import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
	static contextType = LanguageContext
	render() {
		return (
			<div>
				Select a Language:
				<i
					onClick={() => this.context.onLanguageChange("english")}
					className="flag gb"
				/>
				<i
					onClick={() => this.context.onLanguageChange("dutch")}
					className="flag nl"
				/>
			</div>
		);
	}
}

export default LanguageSelector;
