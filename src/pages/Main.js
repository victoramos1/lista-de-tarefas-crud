import './Main.css'
import { useState, useRef } from 'react'
import editar from '../img/editar.svg'
import deletar from '../img/deletar.svg'

export default function Main() {
  let dadoCapturado = useRef('')
  let dadoEditado = useRef('')
  const [dadosGuardados, setDadosGuardados] = useState([])
  const [modalAtivado, setModalAtivado] = useState(false)
  const [indiceParaEdicao, setIndiceParaEdicao] = useState("")
  const [selecionados, setSelecionados] = useState([])

  function insereNovoDado() {
    if (dadoCapturado.current.value === '') {
      window.alert('Por favor, digite algo válido')
    } else {
      setDadosGuardados(dadosAnteriores => [...dadosAnteriores, dadoCapturado.current.value])
    }
  }

  function excluiDado(index) {
    let novosDados = [...dadosGuardados]
    novosDados.splice(index, 1)
    setDadosGuardados(novosDados)
  }

  function ativaModal(index) {
    setModalAtivado(true)
    passaNumeroDoIndice(index)
  }

  function passaNumeroDoIndice(index) {
    setIndiceParaEdicao(index)
  }

  function editaDados() {
    let novosDados = [...dadosGuardados]
    novosDados[indiceParaEdicao] = dadoEditado.current.value
    if (novosDados[indiceParaEdicao] === '') {
      window.alert('Por favor, digite algo válido')
    } else {
      setDadosGuardados(novosDados)
      setModalAtivado(false)
    }
  }

  function selecionado(index) {
    setSelecionados(selecionados => {
      const novosSelecionados = [...selecionados]
      novosSelecionados[index] = !novosSelecionados[index]
      return novosSelecionados
    })
  }

  return (
    <>
      {/* Modal */}
      <div className={modalAtivado === true ? "modal" : "oculto"}>
        <a href="#!" onClick={() => setModalAtivado(false)}>X</a>
        <div className="div">
          <input placeholder="Digite a alteração que deseja" ref={dadoEditado}></input>
          <button onClick={() => editaDados()}>Concluir</button>
        </div>
      </div>
      {/* Homepage */}
      <div className="containerNativo">
        <div className="containerElemento">
          <div className="titulo">
            <h1>Anotações</h1>
          </div>
          <div className="preenchimento">
            <input id="input-dados" name="input-dados" placeholder="Digite aqui" ref={dadoCapturado}></input>
            <button onClick={insereNovoDado}>Adicionar</button>
          </div>
          {dadosGuardados.map((item, index) => (
            <div className="itensArray" key={index}>
              <p style={selecionados[index] ? { textDecoration: 'line-through' } : {}}>{item}</p>
              <div>
                <input type="checkbox" id={`checkbox-${index}`} checked={selecionados[index]} onChange={() => selecionado(index)} />
                <a href="#!" onClick={() => ativaModal(index)}>
                  <img src={editar} alt="Desenho de um desenho e uma folha, em alusão ao ato de editar algo" />
                </a>
                <a href="#!" onClick={() => excluiDado(index)}>
                  <img src={deletar} alt="Desenho de uma lixeira, em alusão ao ato de excluir algo" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
