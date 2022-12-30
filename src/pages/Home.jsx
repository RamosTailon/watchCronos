import styles from './Home.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


//USECONTEXT
import { useContext } from 'react';
import { SettingsWatchContext } from '../context/HookUseContext'

//COMPONENTS
import Filter from '../components/Filter';
import Time from '../components/Time';

//UTILS
import UpperCase from '../utils/UpperCase';


const Home = () => {
	//CONTEXT
	const { watchState } = useContext(SettingsWatchContext)

	//TIMER
	const duration = parseInt(watchState.minutes) * 60 + parseInt(watchState.seconds) //in seconds

	const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(duration);

	const minutes = Math.floor(totalTimeInSeconds / 60);
	const seconds = totalTimeInSeconds % 60

	var timer

	function startChronos() {
		if (totalTimeInSeconds === 0) {
			return
		} else {
			timer = setTimeout(() => {
				setTotalTimeInSeconds(totalTimeInSeconds - 1)
			}, 1000)
		}
		return timer
	}



	useEffect(() => {
		startChronos()


		// return () => clearTimeout(timer) //Cleanup não é necessário

	}, [totalTimeInSeconds]);

	//PLAY AND PAUSE
	const [playPause, setPlayPause] = useState(false);

	function stopGo() {
		if (playPause) {
			setPlayPause(false)
			startChronos()

		} else {
			setPlayPause(true)
			clearTimeout(timer)
		}
	}



	//FEATURE
	/*useEffect(() => {
		if (!playPause) {
			console.count(playPause) //contar as pausas
			// lógica de contagem de pausas
		}
	}, [playPause]);*/


	//COLOR TIME
	let isTimeYet = true
	if (minutes == 0 && seconds <= 10) {
		isTimeYet = false
	}

	return (
		<div className={styles.container}>
			<Filter filterCheck={watchState.filter} ></Filter>
			<video src={watchState.fileVideo} autoPlay loop muted />
			<div className={styles.controls}>
				<div className={styles.slogan}>
					{watchState.text && <p
						style={{
							backgroundColor: watchState.color,
							fontFamily: watchState.font,
						}}
					>{UpperCase(watchState.text, watchState.upper)}</p>}
				</div>
				<div className={styles.content}>
					<div className={styles.timer}
						style={{
							backgroundColor: watchState.color,
							fontFamily: watchState.font
						}}>
						<Time animationTime={isTimeYet}>{minutes.toString().padStart(2, "0")}</Time>
						<Time animationTime={isTimeYet}>:</Time>
						<Time animationTime={isTimeYet}>{seconds.toString().padStart(2, "0")}</Time >
					</div>
				</div>
			</div>
			<div className={styles.editZone}>
				<Link to='/edit' className={styles.btn_edit} style={{ backgroundColor: watchState.color }}>Editar </Link>
				<button
					className={styles.btn_playPause}
					style={{ backgroundColor: watchState.color }}
					onClick={stopGo}
				>
					<FontAwesomeIcon icon={faPlay} />
					<FontAwesomeIcon icon={faPause} />
				</button>
			</div>

		</div >
	)
}

export default Home