
const LembreteEntrada = (props) => {
  return(
   <div className="d-flex">
         <div className="d-flex align-items-center">
           <i className={`fa-solid ${props.iconefavoritar} fa-star 3x mx-2`}></i>
           <i className={`fa-solid ${props.iconeexcluir} fa-trash 3x mx-2`}></i>
         </div>
         <div className="flex-grow-1 ms-2 border p-2">
           <h4 className="text-center">{props.titulo}</h4>
           <p className="text-center">{props.descricao}</p>
         </div>
       
     </div>
  )
   
 }
 
 export default LembreteEntrada
