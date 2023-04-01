import styles from './Main.module.css'
import { useState, useRef } from 'react'
import imgPrincipal from '../img/img-principal.svg'
import editar from '../img/editar.svg'
import deletar from '../img/deletar.svg'

export default function Main(){
    
        let dadoCapturado = useRef('')
        const [dadosGuardados, setDadosGuardados] = useState([])

        function inserirNovoDado(){ 
            if(dadoCapturado.current.value === ''){
                window.alert('Por favor, digite algo válido')
            }else{
                setDadosGuardados(dadosAnteriores => [...dadosAnteriores, dadoCapturado.current.value])
            }
        }

        function excluirDado(index){
            let novosDados = [...dadosGuardados]
            novosDados.splice(index, 1)
            setDadosGuardados(novosDados)
        }

        function editarDado(index){
            let novosDados = [...dadosGuardados]
            novosDados[index] = window.prompt('Digite a nova anotação')
            if(novosDados[index] === ''){
                window.alert('Por favor, digite algo válido')
            }else{
                setDadosGuardados(novosDados)
            } 
        }

    return(
        <>
            <div className={styles.containerNativo}>
                <div className={styles.containerElemento}>
                    <div className={styles.imagemComTitulo}>
                        <img src={imgPrincipal} alt="Um desenho de uma mulher olhando anotações"/>
                        <h1>Anotações</h1>
                    </div>
                <div className={styles.preenchimento}>
                    <input id="input-dados" name="input-dados" placeholder="Digite aqui"ref={dadoCapturado}></input>
                    <button onClick={inserirNovoDado}>Adicionar</button>
                </div>
                {dadosGuardados.map((item, index) =>
                    <div className={styles.itensArray}key={index}>
                        <p>{item}</p>
                        <div>
                        <a href="#!" onClick={(item) => editarDado(index)}><img src={editar} alt="Desenho de um desenho e uma folha, em alusão ao ato de editar algo"/></a>
                        <a href="#!" onClick={(item) => excluirDado(index)}><img src={deletar} alt="Desenho de uma lixeira, em alusão ao ato de excluir algo"/></a>
                        </div>
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

