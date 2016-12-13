import React from "react";

 export default class Child extends React.Component{
 	static defaultProps = {
 		name: 'Dan',
	  favoritePokemon: 'The Gear One'
  };
	render() {
		return (
			<div>
				Child <br/>
				{this.props.name} <br/>
				{this.props.favoritePokemon}
			</div>
		)
	}
}
