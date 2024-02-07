import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Messenger.module.css'

const Messenger = props => {
	const location = useLocation()
	return (
		<div className={styles.messenger_wrapper}>
			<div
				className={`${styles.mainDialogues} ${styles.mainDialogues_classic}`}
			>
				<div className={styles.searchDialogue}>
					<input type='text' />
				</div>
				<div className={styles.attachedDialogues}>
					<div className={styles.dialoguesItems}>
						<div className={styles.dialog}>Linar Nasibullin</div>
						<div className={styles.dialog}>Dmitry Krylov</div>
						<div className={styles.dialog}>Rufina Nasibullina</div>
						<div className={styles.dialog}>Valera Lysenko</div>
						<div className={styles.dialog}>Andrey Skrypchuk</div>
					</div>
				</div>
			</div>
			<div className={styles.switchingDialogues}>
				<div className={styles.pageBlock}>
					<div
						className={`${styles.item} ${
							location.pathname === '/all chats' && styles.active
						}`}
					>
						<NavLink to='/profile' ClassName={styles.ui_rmenu_all}>
							All chats
						</NavLink>
					</div>
					<div
						className={`${styles.item} ${
							location.pathname === '/unread' && styles.active
						}`}
					>
						<NavLink to='/profile' ClassName={styles.ui_rmenu_unread}>
							Unread
						</NavLink>
					</div>
					<div
						className={`${styles.item} ${
							location.pathname === '/archive' && styles.active
						}`}
					>
						<NavLink to='/profile' ClassName={styles.ui_rmenu_archive}>
							Archive
						</NavLink>
					</div>
				</div>
				<div className={styles.im_ui_peers_list}>
					<div className={styles.ui_rmenu_sep}></div>
					{/*Компоненты с передаваемыми в них пропсами с именами людей с кем переписывался*/}
				</div>
			</div>
		</div>
	)
}

export default Messenger
