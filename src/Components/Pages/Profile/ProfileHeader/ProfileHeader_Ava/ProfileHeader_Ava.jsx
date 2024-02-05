import React from 'react'
import styles from './ProfileHeader_Ava.module.css'

const ProfileHeader_Ava = () => {
	return (
		<div className={styles.ProfileHeader_Ava}>
			<div className={styles.OwnerPageAvatar}></div>
			<span className={`${styles.AvatarRich} ${styles.AvatarRich_Shadow}`}>
				<div className={styles.AvatarRich_Backgroung}></div>
				<img
					className={styles.AvatarRich_Img}
					src='https://sun118-2.userapi.com/s/v1/if2/F4YHZhVvVSMLZW1eADorXYyWfNPUu14FCLXQ8wgTnUDh6oJ244PzepshIvazA-SGYrxwNLteCYBBSsFAmluBCfRd.jpg?quality=95&crop=480,344,480,480&as=50x50,100x100,200x200,400x400&ava=1&u=cR1kX04_4G2DLPds75pOhMucbd2IIAR00P4vuKfLedU&cs=400x400'
					alt='AvaPhoto'
				/>
			</span>
		</div>
	)
}

export default ProfileHeader_Ava
