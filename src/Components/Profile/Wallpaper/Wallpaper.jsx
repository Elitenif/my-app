import React from 'react'
import styles from './Wallpaper.module.css'

const Wallpaper = () => {
	return (
		<div className={styles.Wallpaper}>
			<img
				src='https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg'
				alt='WallpaperPhoto'
			/>
		</div>
	)
}

export default Wallpaper
