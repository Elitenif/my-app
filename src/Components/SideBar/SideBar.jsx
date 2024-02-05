import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'

const SideBar = () => {
	return (
		<nav className={styles.sideBar}>
			<div className={styles.item}>
				<NavLink to='/Profile'>My profile</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/News'>News</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='/Messenger'>Messenger</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>My profile</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Calls</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Friends</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Communities</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Photos</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Music</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Videos</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Clips</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Games</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Stickers</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to='#'>Market</NavLink>
			</div>
		</nav>
	)
}

export default SideBar
