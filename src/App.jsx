import LembreteEntrada from "./LembreteEntrada"
import Cartao from "./Cartao"
import AcaoInclui from "./AcaoInclui"
import AcaoExclui from "./AcaoExclui"

const App = () => {
  const componenteInclusao = (<AcaoInclui
    textoInclui="Adicionar"
    funcaoInclui={() => { alert("Lembrete Adicionado") }}
  />)
  const componenteExcluir = (<AcaoExclui
    textoExclui="Excluir"
    funcaoExclui={() => { alert("Lembrete Excluido") }} />
  )

  
  return <div>
    <div className="container my-4">

      <div className="d-flex align-items-center mb-4">
        <i className="fa-solid fa-calendar-days fa-2x me-2"></i>
        <h3 className="m-0">Lembretes</h3>
      </div>

      <div className="container border rounded my-3 p-4">
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xxl-8">

          </div>
          <div className="col-sm-12 col-lg-6 col-xxl-8">

            <Cartao cabecalho="23/07/2025">
              <LembreteEntrada
                iconefavoritar="fa-star"
                iconeexcluir="fa-trash"
                titulo="Lembrete"
                descricao="Preparar aula de programação" />
              <div className="mt-3"></div>
              <AcaoExclui
                textoExclui="Excluir"
                funcaoExclui={() => alert("Lembrete Excluido")}
              />
            </Cartao>

          </div>
          <div className="col-sm-12 col-lg-6 col-xxl-8">

            <Cartao cabecalho="23/07/2025">
              <LembreteEntrada
                iconefavoritar="fa-star"
                iconeexcluir="fa-trash"
                titulo="Lembrete"
                descricao="Preparar aula de programação" />
              <div className="mt-3"></div>
              <AcaoExclui
                textoExclui="Excluir"
                funcaoExclui={() => alert("Lembrete Excluido")}
              />
            </Cartao>

          </div>
          <div className="col-sm-12 col-lg-6 col-xxl-8">
            <Cartao cabecalho="23/07/2025">
              <LembreteEntrada
                iconefavoritar="fa-star"
                iconeexcluir="fa-trash"
                titulo="Lembrete"
                descricao="Preparar aula de programação" />
              <div className="mt-3"></div>
              <AcaoExclui
                textoExclui="Excluir"
                funcaoExclui={() => alert("Lembrete Excluido")}
              />
            </Cartao>
          </div>


          <div className="col-sm-12 col-lg-6 col-xxl-8">
            <Cartao>
              {componenteInclusao}
            </Cartao>



          </div>


        </div>
      </div>
    </div>
  </div>
}

export default App