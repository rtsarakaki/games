import Palpite from './palpite/palpite'
import ResultadoParcial from './resultado-parcial/resultado-parcial'

type Props = {
    palpite: any
    onBotaoSelecionado: (id: string) => void
    onPalpiteConcluido: () => void
    disabled?: boolean
    qtdeCerto: number
    qtdeMeioCerto: number
}


export default function Rodada(props: Props) {

    function notificarBotaoSelecionado(id: string) {
        props.onBotaoSelecionado(id)
    }

    return (
        <div className='m-1'>
            <div>
                <ResultadoParcial qtdeCerto={props.qtdeCerto} qtdeMeioCerto={props.qtdeMeioCerto}></ResultadoParcial>
            </div>
            <div className='my-2'>
                <Palpite 
                    palpite={props.palpite} onBotaoSelecionado={(id) => notificarBotaoSelecionado(id)} 
                    onPalpiteConcluido={() => props.onPalpiteConcluido()} 
                    disabled={props.disabled ?? false}></Palpite>
            </div>
        </div>
    )
}