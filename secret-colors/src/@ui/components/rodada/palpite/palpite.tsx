import { useState } from 'react'
import BotaoPalpite from '../../button/botao-palpite'

type Props = {
    palpite: any
    disabled?: boolean
    onBotaoSelecionado: (id: string) => void
    onPalpiteConcluido: () => void
}

export default function Palpite(props: Props) {
    const [botaoSelecionado, setBotaoSelecionado] = useState("")
    
    function notificarBotaoSelecionado(id: string) {
        setBotaoSelecionado(id)
        props.onBotaoSelecionado(id)
    }

    function preenchido (result: boolean, valor: string) {
        return result && valor !== ""
    }

    function palpiteConcluido() {
        setBotaoSelecionado('')
        props.onPalpiteConcluido()
    }

    const botaoEnabled = props.palpite.reduce(preenchido)
    const boxSelecionado = props.disabled ? '' : 'box-selecionado'

    return (
        <div className={`palpite-box border d-flex flex-column justify-content-center align-items-center ${boxSelecionado}`}>
            <BotaoPalpite id='1' size='large' cor={props.palpite[0]} 
                onClick={(id) => notificarBotaoSelecionado(id)} 
                selecionado={botaoSelecionado === "1"}
                disabled={props.disabled}></BotaoPalpite>
            <BotaoPalpite id='2' size='large' cor={props.palpite[1]}
                onClick={(id) => notificarBotaoSelecionado(id)}
                    selecionado={botaoSelecionado === "2"} 
                disabled={props.disabled}></BotaoPalpite>
            <BotaoPalpite id='3' size='large' cor={props.palpite[2]}
                onClick={(id) => notificarBotaoSelecionado(id)}
                selecionado={botaoSelecionado === "3"} 
                disabled={props.disabled}></BotaoPalpite>
            <BotaoPalpite id='4' size='large' cor={props.palpite[3]} 
                onClick={(id) => notificarBotaoSelecionado(id)} 
                selecionado={botaoSelecionado === "4"} 
                disabled={props.disabled}></BotaoPalpite>
            <button className='btn btn-dark mt-4' disabled={!botaoEnabled || props.disabled} onClick={() => palpiteConcluido()}>Ok</button>
        </div>
    )
}