import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import Wallpaper from './Wallpaper/Wallpaper'

import styles from './Profile.module.css'

const Profile = () => {
	return (
		<div className={styles.profile}>
			<Wallpaper />
			<ProfileHeader />
			<MyPosts />
		</div>
	)
}

export default Profile
