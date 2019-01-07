import React from 'react'

class Button extends React.Component {
	
	render(){

		const style = {
			width: '50px',
			height: '50px',
			backgroundColor: this.props.backgroundColor
		}

		if (!this.props.show) {
			return null
		}

		return(
			<button style={style}
				onClick={this.props.handler}>
				{this.props.text}
			</button>
		)
	}
}

Button.defaultProps = {
	show: true, // show/hide flag for button
	backgroundColor: null //selection color
}

export default Button
