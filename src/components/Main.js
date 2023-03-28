import { useRef, useState } from 'react' 
import styles from './Main.module.css'

export default function Main(){
    
    let dadoCapturado = useRef('')
    let dadosGuardados = ['']
    const [preservarDados, setPreservarDados] = useState()
    //const [resultado, setResultado] = useState()
    

    function inserirNovoDado(){
        dadosGuardados.push(dadoCapturado.current.value)
        setPreservarDados(dadosGuardados)
        //setResultado(preservarDados)
    }
    
    return(
        <>
            <div className={styles.containerNativo}>
                <input id="input-dados" name="input-dados" ref={dadoCapturado}></input>
                <button onClick={inserirNovoDado}>Adicionar</button>
                {resultado}
            </div>
        </>
    )
}