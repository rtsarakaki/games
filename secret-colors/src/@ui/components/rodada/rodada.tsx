import Palpite from './palpite/palpite'
import ResultadoParcial from './resultado-parcial/resultado-parcial'

type Props = {
    palpite: any
    onBotaoSelecionado: (id: string) => void
}


export default function Rodada(props: Props) {

    function notificarBotaoSelecionado(id: string) {
        props.onBotaoSelecionado(id)
    }

    return (
        <div className='m-1'>
            <div>
                <ResultadoParcial qtdeCerto={0} qtdeMeioCerto={0}></ResultadoParcial>
            </div>
            <div className='my-2'>
                <Palpite palpite={props.palpite} onBotaoSelecionado={(id) => notificarBotaoSelecionado(id)}></Palpite>
            </div>
        </div>
    )
}