import React from 'react'

class TabBody extends React.Component {

	render(){
		const style = {
			width: '100%',
			height: '100%'
		}

		const currentTab = this.props.currentTab
		console.log(currentTab)
		if (currentTab === null) {
			return null
		}
		const body = currentTab.bodyText
		if (body === null) {
			return null
		}
		return(
			<input style={style}
				placeholder="Type Here" 
				value={body}
				onChange={this.props.change}
			/>
		)
	}
}

export default TabBody