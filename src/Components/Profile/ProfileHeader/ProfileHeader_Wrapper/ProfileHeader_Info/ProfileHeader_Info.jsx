import React from 'react'
import OwnerNameIcon_module_Icon from './OwnerNameIcon_module_Icon/OwnerNameIcon-module_Icon'

import styles from './ProfileHeader_Info.module.css'

const ProfileHeader_Info = () => {
	return (
		<div className={styles.ProfileHeader_Info}>
			<div className={styles.ProfileInfo}>
				<h2>
					Ilnar&nbsp;
					<span className={styles.OwnerPageName_Icons}>
						<span className={styles.OwnerPageName_NoWrapText}>Nasibullin</span>
						<OwnerNameIcon_module_Icon />
					</span>
				</h2>
				<div className='ProfileInfo_Status'>
					<span class='vkuiTypography'>
						Happy new year&nbsp;
						<img
							className={styles.emoji}
							src='https://vk.com/emoji/e/f09fa582_2x.png'
							alt='🥂'
						/>
						<img
							className={styles.emoji}
							src='https://vk.com/emoji/e/f09f8e84_2x.png'
							alt='🎄'
						/>
					</span>
				</div>
				<div className='ProfileInfo_FullInfo'></div>
			</div>
		</div>
	)
}

export default ProfileHeader_Info
