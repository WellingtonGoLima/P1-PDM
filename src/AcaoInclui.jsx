import React from 'react'

const AcaoInclui = (props) => {
  return (
    <div className='d-flex justify-content'>
      <button 
        onClick={props.funcaoInclui}
        className="btn btn-primary">
        {props.textoInclui}
      </button>
    </div>
  )

}

export default AcaoInclui
