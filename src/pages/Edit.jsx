import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styles from './Edit.module.css'

const Edit = () => {
  return (
    <div>
      <div className={styles.main_input}>
        <label htmlFor="legenda">Texto:</label>
        <input type="text" name="legenda" id="legenda" placeholder="Digite a legenda" />
        <label htmlFor="time">Cronometro:</label>
        <input type="number" name="time" id="minutos" placeholder="Digite os minutos" />
        :
        <input type="number" name="time" id="segundos" placeholder="Digite os segundos" />


      </div>
      <div className="other_input">
        <label htmlFor="file">Vídeo</label>
        <input type="file" name="file" id="file" accept="video/*" />
        <div className={styles.color_hex}>
          <label htmlFor="btn_hex">Cor Hexadecimal:</label>
          <div className={styles.spectrum_map}>
            <input type="color" name="picker" id={styles.picker} />
            <input type="text" name="color_hex" id={styles.color_hex} placeholder="Digite a cor em Hexadecimal" />
            <div id={styles.test}></div>
          </div>
        </div>
        <div className={styles.font_area}>
          <label htmlFor="fontes">Escolha a fonte do texto:</label>
          <select name="fontes" id="fontes">
            <option value="op1">Fonte 1</option>
            <option value="op2">Fonte 2</option>
            <option value="op3">Fonte 3</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Edit