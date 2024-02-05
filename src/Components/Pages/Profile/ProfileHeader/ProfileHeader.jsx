import React from 'react'
import ProfileHeader_Ava from './ProfileHeader_Ava/ProfileHeader_Ava'

import styles from './ProfileHeader.module.css'
import ProfileHeader_Wrapper from './ProfileHeader_Wrapper/ProfileHeader_Wrapper'

const ProfileHeader = () => {
	return (
		<div className={styles.ProfileHeader}>
			<ProfileHeader_Ava />
			<ProfileHeader_Wrapper />
		</div>
	)
}
export default ProfileHeader
