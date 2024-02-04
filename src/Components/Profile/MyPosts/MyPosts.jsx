import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div className={styles.MyPosts}>
			My posts
			<div className={styles.inputArea}>
				<input type='text' />
			</div>
			<button>Add post</button>
			<div className={styles.posts}>
				<Post name='Liza' like='12' comment='2' />
				<Post name='Ilnar' like='662' comment='53' />
			</div>
		</div>
	)
}

export default MyPosts
