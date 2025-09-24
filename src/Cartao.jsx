
const Cartao = (props) => {
  return (
    <div className="card mb-2">
      <div className="card-header text-muted">
        {props.cabecalho}

      </div>
      <div className="card-body d-flex">
        {props.children}
        
         </div>
    </div>
  )
}

export default Cartao