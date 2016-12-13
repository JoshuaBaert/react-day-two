import React from "react";
import Child from './Child'

export default class App extends React.Component{
	constructor() {
		super();
		this.state={
			visible: true,
			name: 'Josh',
		}
	}
	componentWillMount() {
		console.log('Parent will mount');
		//Runs BEFORE first render
	}
	componentDidMount() {
		console.log('Parent did mount');
		//Runs AFTER first render
	}
	render() {
		console.log('Parent Render');
		return (
			<div>
				<button onClick={this.changeNameHandler.bind(this)}>Change Name</button>
				<button onClick={this.onOff.bind(this)}>Show/Hide Child</button>
				{this.state.visible ? <Child name={this.state.name} /> : null}
			</div>
		)
	}
	changeNameHandler() {
		this.setState({
			name: this.state.name + '+'
		})
	}
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
}
