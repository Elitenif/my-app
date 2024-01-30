import React from 'react'
import styles from './Menu.module.css'
const Menu = () => {
	return (
		<menu className={styles.menu}>
			<a href='#'>
				<div>Profile</div>
			</a>
			<a href='#'>
				<div>Messages</div>
			</a>
			<a href='#'>
				<div>News</div>
			</a>
			<a href='#'>
				<div>Music</div>
			</a>
			<a href='#'>
				<div>Settings</div>
			</a>
		</menu>
	)
}

export default Menu
