import React from 'react'
import styles from './ActionsGroup_module_Root.module.css'
const ActionsGroup_module_Root = () => {
	return (
		<div className={styles.ActionsGroup_module_Root}>
			<span className={styles.ActionsGroupItem_module_In}>
				<span className={styles.ActionsGroupItem_module_Before}>
					<svg
						fill='none'
						height='26'
						viewBox='0 0 28 26'
						width='28'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M23.3 25H4.70001C2.80001 25 1.20001 23.4 1.20001 21.5V9.29999C1.20001 7.39999 2.80001 5.79999 4.70001 5.79999H23.3C25.2 5.79999 26.8 7.39999 26.8 9.29999V21.5C26.8 23.4 25.2 25 23.3 25Z'
							stroke='#4F4F4F'
							stroke-miterlimit='10'
							stroke-width='2'
						/>
						<path
							d='M20.4 5.79999H7.60001V3C7.60001 1.9 8.50001 1 9.60001 1H18.4C19.5 1 20.4 1.9 20.4 3V5.79999Z'
							stroke='#4F4F4F'
							stroke-miterlimit='10'
							stroke-width='2'
						/>
						<path
							d='M2 13.8H26.8'
							stroke='#4F4F4F'
							stroke-miterlimit='10'
							stroke-width='2'
						/>
						<path
							d='M6.79999 12.2V16.2'
							stroke='#4F4F4F'
							stroke-linecap='round'
							stroke-miterlimit='10'
							stroke-width='2'
						/>
						<path
							d='M21.2 12.2V16.2'
							stroke='#4F4F4F'
							stroke-linecap='round'
							stroke-miterlimit='10'
							stroke-width='2'
						/>
					</svg>
				</span>
				<span className={styles.ActionsGroupItem_module_Text}>СевГУ</span>
			</span>
			<span className={styles.ActionsGroup_module_Separator}></span>
			<span className={styles.ActionsGroupItem_module_Root}>
				<span className={styles.ActionsGroupItem_module_In}>
					<span className={styles.ActionsGroupItem_module_Before}>
						<svg
							version='1.1'
							fill='#6b6b6b'
							width='36'
							height='36'
							viewBox='0 0 36 36'
							preserveAspectRatio='xMidYMid meet'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>exclamation-circle-line</title>
							<path
								class='clr-i-outline clr-i-outline-path-1'
								d='M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm0,22A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z'
							></path>
							<path
								class='clr-i-outline clr-i-outline-path-2'
								d='M18,20.07a1.3,1.3,0,0,1-1.3-1.3v-6a1.3,1.3,0,1,1,2.6,0v6A1.3,1.3,0,0,1,18,20.07Z'
							></path>
							<circle
								class='clr-i-outline clr-i-outline-path-3'
								cx='17.95'
								cy='23.02'
								r='1.5'
							></circle>
							<rect x='0' y='0' width='36' height='36' fill-opacity='0' />
						</svg>
					</span>
					<span>Learn more</span>
				</span>
			</span>
		</div>
	)
}

export default ActionsGroup_module_Root
