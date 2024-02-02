import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
	return (
		<div className={styles.MyPosts}>
			My posts
			<textarea name='New Post' id='' cols='124' rows='4'></textarea>
			<button>Add post</button>
			<div className={styles.posts}>
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts
