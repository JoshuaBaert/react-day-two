import React from "react";
import Display from "./Display";
import {getPokemon} from './AsyncStuff';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}
	
	render() {
		return (
			<div>
				<h1>Pikachu</h1>
				<h1>Bulbasaur</h1>
				<input onKeyDown={this.handleOnKeyDown.bind(this)}/>
				<Display img={this.state.img}/>
			</div>
		)
	}
	
	handleOnKeyDown(event) {
		if (event.keyCode == 13) {
			getPokemon(event.target.value.toLowerCase()).then(res => {
				console.log(res.data);
				this.setState({
					img: res.data.sprites.front_default,
				})
			});
		}
	}
};
