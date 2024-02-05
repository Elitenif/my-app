import React from 'react'
import './App.css'
import { Header, Profile, SideBar } from './Components'

const App = () => {
	return (
		<div className='app_wrapper'>
			<Header />
			<SideBar />
			<div className='app_wrapper_content'>
				<Profile />
			</div>
		</div>
	)
}

export default App
