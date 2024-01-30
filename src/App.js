import React from 'react'
import './App.css'
import { Header, Menu, Profile } from './Components'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Menu />
			<Profile />
		</div>
	)
}

export default App
