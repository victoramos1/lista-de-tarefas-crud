import styles from './Main.module.css'
import { useState, useRef } from 'react'

export default function Main(){
    
        let dadoCapturado = useRef('')
        const [dadosGuardados, setDadosGuardados] = useState([])

        function inserirNovoDado(){ 

            setDadosGuardados(dadosAnteriores => [...dadosAnteriores, dadoCapturado.current.value])
        }

        function excluirDado(index){
            let novosDados = [...dadosGuardados]
            novosDados.splice(index, 1)
            setDadosGuardados(novosDados)
        }

    return(
        <>
            <div className={styles.containerNativo}>
                <input id="input-dados" name="input-dados" ref={dadoCapturado}></input>
                <button onClick={inserirNovoDado}>Adicionar</button>
                {dadosGuardados.map((item, index) =>
                    <div className={styles.containerElemento} key={index}>
                        <p>{item}</p>
                        <button className={styles.btn}>Editar</button>
                        <button className={styles.btn} onClick={(item) => excluirDado(index)}>Excluir</button>
                    </div>
                )}
            </div>
        </>
    )
}

