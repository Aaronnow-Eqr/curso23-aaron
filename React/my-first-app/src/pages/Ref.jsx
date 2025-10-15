/*
  useRef: sirve para crear una referencia a un elemento del DOM o 
  a un valor que queremos mantener entre renderizados sin que cause
  un nuevo renderizado cuando cambia.
*/
import { useState, useRef } from "react"

function Ref() {
  const [texto, setTexto] = useState("")
  const input = useRef(null)

  const handleClick = () => {
    setTexto(input.current.value)
    input.current.value = ""
  }

  return (
    <div>
      <input ref={input} type="text" placeholder="Escribe aca" />
      <button onClick={handleClick}>aca</button>
      <p>{texto}</p>
    </div>
  )
}

export { Ref }
