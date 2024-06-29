import { useRef, useState } from "react"
import style from "./style.module.css"

export default function App(){
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null)
  const valueRef = useRef(null)

  function start(){
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(valueRef.current)
    valueRef.current = setInterval(()=>{ //valueRef não irá renderizar o componente - setInterval 
      setNow(Date.now) //ira renderizar o componente
    }, 10)
  }

  let secondsPass = 0
  if(startTime != null && now != null){
    secondsPass = (now - startTime)/1000
  }

  function stop(){
    clearInterval(valueRef.current)
  }

  function clear(){
    setStartTime(0)
    setNow(0)
  }



  return(
    <div className={style.box_div}>
      <h1 className={style}>{secondsPass.toFixed(2)}</h1>
      <div className={style.div_buttons}>
        <button className={style} onClick={start}>Start</button>
        <button className={style} onClick={stop}>Stop</button>
        <button className={style} onClick={clear}>Clear</button>
        </div>
    </div>
  )
}