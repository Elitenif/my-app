import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import VkSpacing from './VkSpacing/VkSpacing'
import Wallpaper from './Wallpaper/Wallpaper'

const Profile = () => {
	return (
		<div>
			<Wallpaper />
			<ProfileHeader />
			<VkSpacing />
			<MyPosts />
		</div>
	)
}

export default Profile
