import React from 'react'
import styles from './ProfileHeader_Actions.module.css'

const ProfileHeader_Actions = () => {
	return (
		<div className={styles.ProfileHeader_Actions}>
			<div className={styles.ProfileHeaderActions__in}>
				<div className={styles.ProfileHeaderActions__buttons}>
					<div className={styles.ProfileHeaderButton}>
						<a
							href='#'
							className={`${styles.vkuiButton} ${styles.vkuiButton__align_center} ${styles.vkuiButton__appearance_accent} ${styles.vkuiButton__mode_secondary} ${styles.vkuiButton__size_m}`}
						>
							<span className={styles.vkuiButton__in}>
								<span className={styles.vkuiButton__content}>Edit profile</span>
							</span>
						</a>
					</div>
					<div className={styles.ProfileHeaderActions__moreButtonContainer}>
						<button
							type='button'
							className={`${styles.vkuiButton} ${styles.vkuiButton__mode_secondary} ${styles.vkuiButton__size_m}`}
						>
							<span className={styles.vkuiButton__in}>
								<span className={styles.vkuiButton__content}>More</span>
								<span className={styles.vkuiButton__after} role='presentation'>
									<svg
										className={styles.vkuiIcon}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
									>
										<path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
									</svg>
								</span>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileHeader_Actions
