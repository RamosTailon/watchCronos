//STATES
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

//CSS
import styles from './Edit.module.css'

//USECONTEXT
import { useContext } from 'react';
import { SettingsWatchContext } from '../context/HookUseContext'


const Edit = () => {
  //CONTEXT
  const { watchState, setWatchState } = useContext(SettingsWatchContext)

  //STATES
  const [text, setText] = useState('');
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [fileVideo, setFileVideo] = useState();
  const [color, setColor] = useState('');
  const [font, setFont] = useState('Poppins, sans-serif');
  const font1 = 'Poppins, sans-serif';
  const font2 = 'Courier New, Courier, monospace';
  const font3 = 'Helvetica';

  const [upper, setUpper] = useState(false);


  const navigate = useNavigate()

  //FUNCTIONS
  const UpperCase = (phrase) => {
    return phrase.toUpperCase()
  }

  // const

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')

    setWatchState({
      text: text,
      minutes: minutes,
      seconds: seconds,
      fileVideo: fileVideo,
      color: color,
      font: font
    })
  }
  return (
    <div className={styles.container}>
      <h1>Edição de páginas</h1>
      <form onSubmit={handleSubmit} className={styles.content}>
        <div className={styles.main_input}>
          <label htmlFor="legenda">Texto:</label>
          <input
            type="text"
            name="legenda"
            id={styles.legenda}
            placeholder="Digite a legenda"
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="time">Cronometro:</label>
          <div className={styles.second_input}>
            <div className={styles.minutes}>
              <input
                type="number"
                name="time"
                id={styles.minutos}
                min='0'
                placeholder="00"
                onChange={(e) => setMinutes(e.target.value)}
                required
              />
              <h6>minutos</h6>
            </div>
            <span className={styles.dois_pontos}>:</span>
            <div className={styles.seconds}>
              <input
                type="number"
                name="time"
                id={styles.segundos}
                min='0'
                max='60'
                placeholder="00"
                onChange={(e) => setSeconds(e.target.value)}
                required
              />
              <h6>segundos</h6>
            </div>
          </div>


        </div>

        <div className={styles.other_input}>
          <label htmlFor="file">Vídeo:</label>
          <input
            type="file"
            name="file"
            id="file"
            accept="video/*"
            onChange={(e) => setFileVideo(e.target.value)}
          />
        </div>
        <div className={styles.other_input}>
          <label htmlFor="btn_hex">Cor Hexadecimal:</label>
          <div className={styles.spectrum_map}>
            <input
              type="color"
              name="picker"
              id={styles.picker}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="text"
              name="color_hex"
              id={styles.color_hex}
              placeholder="Digite a cor em Hexadecimal"
              onChange={(e) => setColor(e.target.value)}
            />
            <p style={{ backgroundColor: color }}></p>
          </div>
        </div>
        <div className={styles.other_input}>
          <label htmlFor="fontes">Escolha a fonte do texto:</label>
          <select
            name="fontes"
            id="fontes"
            onChange={(e) => setFont(e.target.value)}
          >
            <option value={font1}>Fonte 1</option>
            <option value={font2}>Fonte 2</option>
            <option value={font3}>Fonte 3</option>
          </select>
        </div>
        <h3 style={{ fontFamily: font }}>{text}</h3>

        <button type="submit" className={styles.submit}>Atualizar</button>
      </form>
    </div>
  )
}

export default Edit