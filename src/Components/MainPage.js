import React from 'react'
import Button from './Button'
import * as AppActions from '../DispatcherActions/Actions'
import TabStore from '../TabStore'
import Modal from '../Components/Modal'

class MainPage extends React.Component {
	constructor(){
		super()
		this.state = {}
		this.openModal = this.openModal.bind(this)
	}
	
	openModal() {
		this.setState(this.state)
	}

	componentDidMount() {
		let id = TabStore.getModalChangeId()
		TabStore.on(id, this.openModal)
	}

	componentWillUnmount() {
		let id = TabStore.getModalChangeId()
		TabStore.removeListener(id, this.openModal)
	}

	render(){
		const style = {
			display: 'flex',
			backgroundColor: 'lightBlue',
			width: '100%',
			height: '100%',
			margin: 'auto'
		}

		return(
			<div style={style}>
				<Button
					text = 'Open'
					show = {
						!TabStore.getIsModalOpen()
					}
					handler = {
						AppActions.toggleModal.bind(null, true)
					}
				/>
				<Modal
					show = {
						TabStore.getIsModalOpen()
					}
				/>

			</div>
		)
	}
}

export default MainPage