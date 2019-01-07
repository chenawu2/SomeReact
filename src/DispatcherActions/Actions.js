import dispatcher from './Dispatcher'

export const APP_ACTIONS = {
	TOGGLE_MODAL: 'appActions.toggleModal',
	ADD_TAB: 'appActions.addTab',
	SUBTRACT_TAB: 'appActions.subtractTab',
	BODY_CHANGED: 'appActions.bodyChanged',
	PRESSED_TAB: 'appActions.pressedTab'
}

// modal was toggled open/close
export function toggleModal(isOpen) {
	dispatcher.dispatch({
		type: APP_ACTIONS.TOGGLE_MODAL,
		value: isOpen
	})
}

//adds a tab
export function addTab() {
	dispatcher.dispatch({
		type: APP_ACTIONS.ADD_TAB,
		value: null
	})
}

//removes the most recently created tab
export function subtractTab() {
	dispatcher.dispatch({
		type: APP_ACTIONS.SUBTRACT_TAB,
		value: null
	})
}

//tab's body text has changed
export function bodyChanged(newBody) {
	dispatcher.dispatch({
		type: APP_ACTIONS.BODY_CHANGED,
		value: newBody
	})
}

//selected a tab
export function pressedTab(tabKey) {
	dispatcher.dispatch({
		type: APP_ACTIONS.PRESSED_TAB,
		value: tabKey
	})
}