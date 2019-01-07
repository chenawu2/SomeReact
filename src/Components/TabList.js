import React from 'react'
import Button from './Button'
import * as AppActions from '../DispatcherActions/Actions'

class TabList extends React.Component {
	createTab(metaData) {
		const currentTab = this.props.currentTab
		//selection highlight if this is the current tab
		const backgroundColor = metaData.key === currentTab.key ? 'lightblue' : null
		return (
			<Button 
				key = {metaData.key}
				text = {metaData.title}
				handler = {
					AppActions.pressedTab.bind(null, metaData.key)
				}
				backgroundColor = {backgroundColor}
			/>
		)
	}

	render(){
		const tabsMetaData = this.props.tabsMetaData
		if (tabsMetaData === undefined || tabsMetaData.length === 0) {
			return <b>No Tabs</b>
		}
		const tabs = tabsMetaData.map(this.createTab.bind(this))
		return (
			<div>
				<ul className='tabList'>{tabs}</ul>
			</div>
		)
	}
}

export default TabList