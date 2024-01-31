import React from 'react'
import styles from './Menu.module.css'
const Menu = () => {
	return (
		<menu className={styles.menu}>
			<div className={`${styles.item} ${styles.active}`}>
				<a href='#'>Profile</a>
			</div>
			<div className={styles.item}>
				<a href='#'>Messages</a>
			</div>
			<div className={styles.item}>
				<a href='#'>News</a>
			</div>
			<div className={styles.item}>
				<a href='#'>Music</a>
			</div>
			<div className={styles.item}>
				<a href='#'>Settings</a>
			</div>
		</menu>
	)
}

export default Menu
