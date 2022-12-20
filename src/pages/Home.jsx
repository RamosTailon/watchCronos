import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <video src='/VIDEOS/VIDEO 1.mp4' autoPlay loop muted />
            <div className={styles.controls}>
                <div className={styles.slogan}>
                    <p>Esta para começar!</p>
                </div>
                <div className={styles.timer}>
                    <span>00:00</span>
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