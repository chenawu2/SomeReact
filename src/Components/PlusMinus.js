import React from 'react'
import * as AppActions from '../DispatcherActions/Actions'
import Button from './Button'

export default class PlusMinus extends React.Component {
	render(){
		return(
			<div>
				<Button
					text = '+'
					handler = {
						AppActions.addTab.bind(null)
					}
				/>
				<Button
					text = '-'
					handler = {
						AppActions.subtractTab.bind(null)
					}
				/>
			</div>
		)
	}
}