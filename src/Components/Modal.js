import React from 'react'
import PropTypes from 'prop-types'
import * as AppActions from '../DispatcherActions/Actions'
import Button from './Button'
import PlusMinus from './PlusMinus'
import TabList from './TabList'
import TabStore from '../TabStore'
import TabBody from './TabBody'

class Modal extends React.Component {
	constructor(){
		super()
		this.state = {}
		this.renderState = this.renderState.bind(this)
	}

	componentDidMount() {
		const addTabId = TabStore.getAddTabId()
		TabStore.on(addTabId, this.renderState)

		const removeTabId = TabStore.getSubtractTabId()
		TabStore.on(removeTabId, this.renderState)

		const bodyChangedId = TabStore.getBodyChangedId()
		TabStore.on(bodyChangedId, this.renderState)

		const pressedTabId = TabStore.getPresedTabId()
		TabStore.on(pressedTabId, this.renderState)
	}

	componentWillUnmount() {
		const addTabId = TabStore.getAddTabId()
		TabStore.removeListener(addTabId, this.renderState)

		const removeTabId = TabStore.getSubtractTabId()
		TabStore.removeListener(removeTabId, this.renderState)

		const bodyChangedId = TabStore.getBodyChangedId()
		TabStore.removeListener(bodyChangedId, this.renderState)

		const pressedTabId = TabStore.getPresedTabId()
		TabStore.removeListener(pressedTabId, this.renderState)
	}

	renderState() {
		//force rerender
		this.setState(this.state)
	}

	inputDidChange(evt) {
		const newBody = evt.target.value
		AppActions.bodyChanged(newBody)
	}

	render(){
		if (!this.props.show) {
			return null
		}

		const backgroundStyle = {
			display: 'flex',
			width: '100%',
			height: '100%',
			backgroundColor: 'rgba(0,0,0,0.3)',
		}

		const whiteContentStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			width: '60%',
			height: '80%',
			margin: 'auto'
		}

		const containerStyle = {
			display: 'flex',
			flexDirection: 'row'
		}

		const listContainerStyle = {
			display: 'flex',
			width: '20%'
		}

		const bodyContainerStyle = {
			display: 'flex',
			width: '80%'
		}

		return(
			<div className='background' style={backgroundStyle}>
				<div className='whiteContent' style={whiteContentStyle}>
					<div className='container' style={containerStyle}>
						<div className='listContainer' style={listContainerStyle}>
							<TabList
								currentTab = {
									TabStore.getCurrentTab()
								}
								tabsMetaData = {
									TabStore.getTabsMetaData()
								}
							/>
						</div>
						<div className='bodyContainer' style={bodyContainerStyle}>
							<TabBody
								currentTab = {
									TabStore.getCurrentTab()
								}
								change = { evt =>
									this.inputDidChange(evt)
								}
							/>
						</div>
					</div>
					<div>
						<PlusMinus
						/>
					</div>
					<div className='footer'>
						<Button 
							text = 'Close'
							handler = {
								AppActions.toggleModal.bind(null, false)
							}
						/>
					</div>
				</div>
			</div>
		)
	}
}

Modal.propTypes = {
	show: PropTypes.bool
}

export default Modal