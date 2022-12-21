import styles from './Home.module.css'
import { useState, useEffect } from 'react';



const Home = () => {
	const duration = 1 * 60
	const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(duration);

	const minutes = Math.floor(totalTimeInSeconds / 60);
	const seconds = totalTimeInSeconds % 60

	useEffect(() => {

		if (totalTimeInSeconds === 0) {
			return
		} else {
			setTimeout(() => {
				setTotalTimeInSeconds(totalTimeInSeconds - 1)
			}, 1000)
		}



	}, [totalTimeInSeconds]);


	return (
		<div className={styles.container}>
			<video src='/VIDEOS/VIDEO 1.mp4' autoPlay loop muted />
			<div className={styles.controls}>
				<div className={styles.slogan}>
					<p>Está para começar!</p>
				</div>
				<div className={styles.content}>
					<div className={styles.timer}>
						<span>{minutes.toString().padStart(2, "0")}</span>
						<span>:</span>
						<span>{seconds.toString().padStart(2, "0")}</span>
					</div>
				</div>
			</div>
			<div className={styles.editZone}>
				<button className={styles.btn_edit}>Editar</button>
				<button className={styles.btn_playPause} > Play / Pause</button>
			</div>

		</div >
	)
}

export default Home