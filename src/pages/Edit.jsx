//STATES
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

//CSS
import styles from './Edit.module.css'

//STYLED-COMPONENTS
import Slider from "../components/Slider";

//USECONTEXT
import { useContext } from 'react';
import { SettingsWatchContext } from '../context/HookUseContext'

//UTILS
import UpperCase from "../utils/UpperCase";


const Edit = () => {
  //CONTEXT
  const { watchState, setWatchState } = useContext(SettingsWatchContext)

  //STATES
  const [text, setText] = useState('frase aqui');
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [fileVideo, setFileVideo] = useState();
  const [color, setColor] = useState('#800080');
  const [font, setFont] = useState('Poppins, sans-serif');
  const font1 = 'Poppins, sans-serif';
  const font2 = 'Courier New, Courier, monospace';
  const font3 = 'Helvetica';
  const [opacityColor, setOpacityColor] = useState(0.5);
  const [filter, setFilter] = useState(false);

  const [upper, setUpper] = useState(false);


  const navigate = useNavigate()

  //FUNCTIONS


  function hexToRgba(hex) {
    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)

    let rgbArr = []
    for (let i = 0; i < 3; i++) {
      rgbArr.push(parseInt(twoDigitGroup[i], 16))//deixa o numero na base 16
    }
    return rgbArr
  }

  const varHex = hexToRgba(color)
  const hexColor = `rgb(${varHex},${opacityColor})`

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')

    setWatchState({
      text: text,
      minutes: minutes,
      seconds: seconds,
      fileVideo: fileVideo,
      color: hexColor,
      font: font,
      opacityColor: opacityColor,
      upper: upper,
      filter: filter
    })
  }


  function renderVideo(e) {
    
    const file = e.target.files[0]
    const reader = new FileReader();

    reader.addEventListener('load', function (e) {
      const readerTarget = e.target
      const source = readerTarget.result
      setFileVideo(source)
    })

    reader.readAsDataURL(file)
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
            onChange={(e) =>
              setText(e.target.value)
            }
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
            onChange={renderVideo}
          />
          <br />
          <div className={styles.filterVideo}>
            <input
              type="checkbox"
              name="filterVideo"
              id='filterVideo'
              onChange={(e) => setFilter(e.target.checked)}
            />
            <label htmlFor="filterVideo">Colocar filtro no vídeo</label>
          </div>
        </div>
        <div className={styles.other_input}>
          <label htmlFor="btn_hex">Cor dos botões:</label>
          <div className={styles.spectrum_map}>
            <input
              type="color"
              name="picker"
              id={styles.picker}
              onChange={(e) => setColor(e.target.value)}
            />
            <p style={{
              backgroundColor: color,
              opacity: opacityColor
            }}> 05:00</p>
            <Slider
              color={color}
              type="range"
              min="0"
              max="1"
              value={opacityColor}
              step="0.1"
              id={styles.range_opacity}
              onChange={(e) => setOpacityColor(e.target.value)}
            />
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
        <h3 id={styles.subtitle} style={{
          fontFamily: font,
          backgroundColor: color,
          opacity: opacityColor
        }}>{UpperCase(text, upper)}</h3>
        <div className="maiúsculo">
          <input type="checkbox" name="maiúsculo" id="maiúsculo" onChange={(e) => setUpper(e.target.checked)} /> <label htmlFor="maiúsculo"> Maiúsculo</label>
        </div>


        <button type="submit" className={styles.submit}>Atualizar</button>
      </form>
    </div>
  )
}

export default Edit