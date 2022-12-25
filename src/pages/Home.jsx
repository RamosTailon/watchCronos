import styles from './Home.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


//USECONTEXT
import { useContext } from 'react';
import { SettingsWatchContext } from '../context/HookUseContext'


const Home = () => {
	//CONTEXT
	const { watchState } = useContext(SettingsWatchContext)

	//TIMER
	const duration = parseInt(watchState.minutes) * 60 + parseInt(watchState.seconds) //in seconds

	const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(duration);

	const minutes = Math.floor(totalTimeInSeconds / 60);
	const seconds = totalTimeInSeconds % 60

	useEffect(() => {

		if (totalTimeInSeconds === 0) {
			return
		} else {
			const timer = setTimeout(() => {
				setTotalTimeInSeconds(totalTimeInSeconds - 1)
			}, 1000)
		}

		// return () => clearTimeout(timer) //Cleanup não é necessário

	}, [totalTimeInSeconds]);
	return (
		<div className={styles.container}>
			<video src='/VIDEOS/VIDEO 1.mp4' autoPlay loop muted />
			<div className={styles.controls}>
				<div className={styles.slogan}>
					{watchState.text && <p
						style={{
							backgroundColor: watchState.color,
							fontFamily: watchState.font
						}}
					>{watchState.text}</p>}
				</div>
				<div className={styles.content}>
					<div className={styles.timer}
						style={{
							backgroundColor: watchState.color,
							fontFamily: watchState.font
						}}>
						<span>{minutes.toString().padStart(2, "0")}</span>
						<span>:</span>
						<span >{seconds.toString().padStart(2, "0")}</span>
					</div>
				</div>
			</div>
			<div className={styles.editZone}>
				<Link to='/edit' className={styles.btn_edit} style={{ backgroundColor: watchState.color }}>Editar </Link>
				<button className={styles.btn_playPause} style={{ backgroundColor: watchState.color }}> Play / Pause</button>
			</div>

		</div >
	)
}

export default Home