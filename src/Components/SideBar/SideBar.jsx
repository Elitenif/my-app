import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './SideBar.module.css'

const SideBar = () => {
	const location = useLocation()
	return (
		<nav className={styles.sideBar}>
			<div
				className={`${styles.item} ${
					location.pathname === '/profile' && styles.active
				}`}
			>
				<NavLink to='/profile' activeClassName={styles.active}>
					My profile
				</NavLink>
			</div>
			<div
				className={`${styles.item} ${
					location.pathname === '/news' && styles.active
				}`}
			>
				<NavLink to='/news' activeClassName={styles.active}>
					News
				</NavLink>
			</div>
			<div
				className={`${styles.item} ${
					location.pathname === '/messenger' && styles.active
				}`}
			>
				<NavLink to='/messenger' activeClassName={styles.active}>
					Messenger
				</NavLink>
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
