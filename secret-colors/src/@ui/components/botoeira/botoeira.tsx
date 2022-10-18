import { useState } from 'react'
import BotaoPalpite from '../button/botao-palpite'

type Props = {
    onCorSelecionada: (corId: string) => void
}

export default function Botoeira(props: Props) {
    const [botaoSelecionado, setBotaoSelecionado] = useState("")

    function corSelecionada(corId: string) {
        props.onCorSelecionada(corId)
        setBotaoSelecionado(corId)
    }

    return (
        <div className="botoeira-box border d-flex justify-content-evenly align-items-center">
            <BotaoPalpite id='1' size='large' cor="1" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "1"}></BotaoPalpite>
            <BotaoPalpite id='2' size='large' cor="2" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "2"} ></BotaoPalpite>
            <BotaoPalpite id='3' size='large' cor="3" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "3"} ></BotaoPalpite>
            <BotaoPalpite id='4' size='large' cor="4" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "4"} ></BotaoPalpite>
            <BotaoPalpite id='5' size='large' cor="5" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "5"} ></BotaoPalpite>
            <BotaoPalpite id='6' size='large' cor="6" onClick={(id) => corSelecionada(id)} selecionado={botaoSelecionado === "6"} ></BotaoPalpite>
        </div>
    )
}