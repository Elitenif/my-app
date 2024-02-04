import React from 'react'
import ProfileHeader_Actions from './ProfileHeader_Actions/ProfileHeader_Actions'
import ProfileHeader_Info from './ProfileHeader_Info/ProfileHeader_Info'

import styles from './ProfileHeader_Wrapper.module.css'

const ProfileHeader_Wrapper = () => {
	return (
		<div className={styles.ProfileHeader_Wrapper}>
			<div className={styles.ProfileHeader_Main}>
				<ProfileHeader_Info />
				<ProfileHeader_Actions />
			</div>
		</div>
	)
}
export default ProfileHeader_Wrapper
