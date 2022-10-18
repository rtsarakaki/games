import { useState } from 'react'
import BotaoPalpite from '../../button/botao-palpite'

type Props = {
    palpite: any
    onBotaoSelecionado: (id: string) => void
}

export default function Palpite(props: Props) {
    const [botaoSelecionado, setBotaoSelecionado] = useState("")
    
    function notificarBotaoSelecionado(id: string) {
        setBotaoSelecionado(id)
        props.onBotaoSelecionado(id)
    }

    return (
        <div className="palpite-box border d-flex flex-column justify-content-center align-items-center">
            <BotaoPalpite id='1' size='large' cor={props.palpite[0]} onClick={(id) => notificarBotaoSelecionado(id)} selecionado={botaoSelecionado === "1"}></BotaoPalpite>
            <BotaoPalpite id='2' size='large' cor={props.palpite[1]} onClick={(id) => notificarBotaoSelecionado(id)} selecionado={botaoSelecionado === "2"} ></BotaoPalpite>
            <BotaoPalpite id='3' size='large' cor={props.palpite[2]} onClick={(id) => notificarBotaoSelecionado(id)} selecionado={botaoSelecionado === "3"} ></BotaoPalpite>
            <BotaoPalpite id='4' size='large' cor={props.palpite[3]} onClick={(id) => notificarBotaoSelecionado(id)} selecionado={botaoSelecionado === "4"} ></BotaoPalpite>
        </div>
    )
}