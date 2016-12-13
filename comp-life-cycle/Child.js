import React from "react";

export default class App extends React.Component{
	componentWillMount() {
		console.log('Child will mount');
		//Runs BEFORE first render
	}
	componentDidMount() {
		console.log('Child did mount');
		//Runs AFTER first render
	}
	componentWillUnmount() {
		console.log('Child will unmount');
		//Runs AFTER first render
	}
	componentWillReceiveProps(nextProps) {
		console.log('child - old -', this.props.name);
		console.log('child - new -', nextProps.name);
	}
	
	render() {
		console.log('Child Render');
		return (
			<h1>
				{this.props.name}<br/>
				Child Component
			</h1>
			
		)
	}
}
