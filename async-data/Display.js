import React from "react";

export default class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.img ? <img src={this.props.img}/> : null}
			</div>
		)	
	}
}
