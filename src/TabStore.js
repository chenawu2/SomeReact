import {EventEmitter} from 'events'
import dispatcher from './DispatcherActions/Dispatcher'
import * as AppActions from './DispatcherActions/Actions'


const MODAL_CHANGE = 'modal_change'
const ADD_TAB = 'add_tab'
const SUBTRACT_TAB = 'subtract_tab'
const BODY_CHANGED = 'body_changed'
const PRESSED_TAB = 'pressed_tab'

class TabStore extends EventEmitter {
	constructor(){
		super()
		this.modalIsOpen = false
		this.tabsMetaData = []
		this.currentTab = null
		this.titleCount = 1

		this.getIsModalOpen = this.getIsModalOpen.bind(this)
		this.getTabsMetaData = this.getTabsMetaData.bind(this)
		this.getCurrentTab = this.getCurrentTab.bind(this)
	}

	handleActions(action) {
		switch (action.type) {
			case AppActions.APP_ACTIONS.TOGGLE_MODAL: {
				this.modalIsOpen = action.value
				this.emit(MODAL_CHANGE)
				break
			}
			case AppActions.APP_ACTIONS.ADD_TAB: {
				//create a new tab
				const newTab = {
					key: Date.now(),
					title: this.titleCount,
					bodyText: `Sample text for tab #${this.titleCount}`
				}
				//append new tab and set to current tab
				this.tabsMetaData = [...this.tabsMetaData, newTab]
				this.titleCount += 1
				this.currentTab = newTab
				this.emit(ADD_TAB)
				break
			}
			case AppActions.APP_ACTIONS.SUBTRACT_TAB: {
				//removes the last tab in the array
				const poppedTab = this.tabsMetaData.pop()
				if (poppedTab === this.currentTab) {
					this.currentTab = this.tabsMetaData.slice(-1)[0]
				}
				//if we ran out of tabs, nullify currentTab
				if (this.tabsMetaData.length === 0) {
					this.currentTab = null
				}
				this.emit(SUBTRACT_TAB)
				break
			}
			case AppActions.APP_ACTIONS.BODY_CHANGED: {
				//update the body of currentTab
				const newBody = action.value
				this.currentTab.bodyText = newBody
				this.emit(BODY_CHANGED)
				break
			}
			case AppActions.APP_ACTIONS.PRESSED_TAB: {
				//find the tab that was pressed by the key
				const key = action.value
				const selectedTab = this.tabsMetaData.find((element) => {
					return element.key === key
				})
				this.currentTab = selectedTab
				this.emit(PRESSED_TAB)
				break
			}

			default: {
				break
			}
		}
	}

	getIsModalOpen() {
		return this.modalIsOpen
	}

	getTabsMetaData() {
		return this.tabsMetaData
	}

	getCurrentTab() {
		if (this.currentTab === null) { 
			return null 
		}
		return this.currentTab
	}


	//emit ids
	getModalChangeId() {
		return MODAL_CHANGE
	}
	
	getAddTabId() {
		return ADD_TAB
	}

	getSubtractTabId() {
		return SUBTRACT_TAB
	}

	getBodyChangedId() {
		return BODY_CHANGED
	}

	getPresedTabId() {
		return PRESSED_TAB
	}
}

const tabStore = new TabStore()
dispatcher.register(tabStore.handleActions.bind(tabStore))
export default tabStore
