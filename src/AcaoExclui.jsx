import React from 'react'

const AcaoExclui = (props) => {
  return (
    <div className='d-flex justify-content'>
      <button 
      onClick={props.funcaoExclui}
      className="btn btn-danger">
        {props.textoExclui}
      </button>
    </div>
  )
}

export default AcaoExclui
