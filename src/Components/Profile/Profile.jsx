import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
	return (
		<profile className={styles.profile}>
			<div>
				<img
					src='https://wallpapers.com/images/hd/ultra-wide-nature-9e39l4h3spqgynd2.jpg'
					alt='mainPhoto'
				/>
			</div>
			<div>
				<img
					src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
					alt='avatarPhoto'
				/>
				description
			</div>
			<div>
				My Post
				<div>New Post</div>
			</div>
			<div>
				<div>post 1</div>
				<div>post 2</div>
			</div>
		</profile>
	)
}

export default Profile
