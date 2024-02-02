import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
	return (
		<profile className={styles.profile}>
			<div className={styles.cover}>
				<img
					src='https://www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1558058690_small.jpg'
					alt='coverPhoto'
				/>
			</div>
			<div className={styles.profileHeader}>
				<div className={styles.profileHeader_ava}>
					<img
						src='https://sun118-2.userapi.com/s/v1/if2/F4YHZhVvVSMLZW1eADorXYyWfNPUu14FCLXQ8wgTnUDh6oJ244PzepshIvazA-SGYrxwNLteCYBBSsFAmluBCfRd.jpg?quality=95&crop=480,344,480,480&as=50x50,100x100,200x200,400x400&ava=1&u=cR1kX04_4G2DLPds75pOhMucbd2IIAR00P4vuKfLedU&cs=400x400'
						alt='avaPhoto'
					/>
				</div>
				<div className={styles.profileHeader_wrapper}>
					<div className={styles.profileHeader_main}>
						<div className={styles.profileHeader_info}>
							<div className={styles.profileInfo}>
								<h2>
									Ilnar{' '}
									<span className={styles.ownerPageName_icons}>
										<span className={styles.ownerPageName_noWrapText}>
											Nasibullin{' '}
											<span className={styles.ownerNameIcon__module_icon}>
												<img
													src='https://sun118-1.userapi.com/FTIrfBOCdVTRLdHLFbfWGqT9vH4bji4iyl7NVw/K5A_TWvQReU.png'
													alt='vkuiIcon'
												/>
											</span>
										</span>
									</span>
								</h2>
								<div className={styles.profileInfo_status}>Happy new year </div>
								<div className='profileInfo_fullInfo'>SevGU</div>
							</div>
						</div>
						<div className={styles.profileHeader_actions}>
							<div className={styles.profileHeaderActions}>
								<div className={styles.profileHeaderActions_in}>
									<div className={styles.profileHeaderActions_buttons}>
										<div className={styles.profileHeaderButton}>
											<button>
												<span>Edit profile</span>
											</button>
										</div>
										<div
											className={
												styles.profileHeaderActions_moreButtonContainer
											}
										>
											<button>
												<span>More</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</profile>
	)
}

export default Profile
