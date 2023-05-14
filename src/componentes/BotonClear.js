import React from "react";
import '../Hojas-estilo/BotonClear.css'

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClic}>
    {props.children}
  </div>

)

export default BotonClear