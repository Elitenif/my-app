import React from 'react'
import './App.css'
import { Header, Profile, SideBar } from './Components'

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<SideBar />
			<Profile />
		</div>
	)
}

export default App
