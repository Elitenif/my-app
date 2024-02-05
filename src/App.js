import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header.jsx'
import SideBar from './Components/SideBar/SideBar.jsx'

//pages
import Messenger from './Components/Pages/Messenger/Messenger'
import News from './Components/Pages/News/News.jsx'
import Profile from './Components/Pages/Profile/Profile'

const App = () => {
	return (
		<div className='app_wrapper'>
			<Header />
			<Router>
				<div className='app_wrapper_content'>
					<Routes>
						<Route path='/news' element={<News />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/messenger' element={<Messenger />} />
					</Routes>
				</div>
				<SideBar />
			</Router>
		</div>
	)
}

export default App
