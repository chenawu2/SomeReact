import dispatcher from './Dispatcher'

export const APP_ACTIONS = {
	TOGGLE_MODAL: 'appActions.toggleModal',
	ADD_TAB: 'appActions.addTab',
	SUBTRACT_TAB: 'appActions.subtractTab',
	BODY_CHANGED: 'appActions.bodyChanged',
	PRESSED_TAB: 'appActions.pressedTab'
}

export function toggleModal(isOpen) {
	dispatcher.dispatch({
		type: APP_ACTIONS.TOGGLE_MODAL,
		value: isOpen
	})
}

export function addTab() {
	dispatcher.dispatch({
		type: APP_ACTIONS.ADD_TAB,
		value: null
	})
}

export function subtractTab() {
	dispatcher.dispatch({
		type: APP_ACTIONS.SUBTRACT_TAB,
		value: null
	})
}

export function bodyChanged(newBody) {
	dispatcher.dispatch({
		type: APP_ACTIONS.BODY_CHANGED,
		value: newBody
	})
}

export function pressedTab(tabKey) {
	dispatcher.dispatch({
		type: APP_ACTIONS.PRESSED_TAB,
		value: tabKey
	})
}