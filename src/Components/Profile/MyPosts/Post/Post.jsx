import React from 'react'
import styles from './Post.module.css'

const Post = props => {
	return (
		<div className={styles.Post}>
			<div className={styles.PostInfo}>
				<h5>{props.name} </h5>
				<img
					src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'
					alt='postAvatar'
				/>
			</div>
			<div className='like'>
				<span>{props.like}</span>
			</div>
			<div className='comment'>
				<span>{props.comment}</span>
			</div>
		</div>
	)
}

export default Post
