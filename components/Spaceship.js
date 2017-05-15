import React from 'react'
import ReactDOM from 'react-dom'
class Spaceship extends React.Component{
	render(){
		return (
		<div>
			<ul>
				<li>{this.props.name}</li>
				<li>{this.props.speed}</li>
				<li>{this.props.colors}.join(", ")</li>
			</ul>		
		</div>
		)
	}

}

Spaceship.defaultProps = {
  hasRockets: false,
	colors: ['black', 'red']
}

export default Spaceship



// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])