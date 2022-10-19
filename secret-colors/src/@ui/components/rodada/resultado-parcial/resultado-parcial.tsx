import BotaoRedondo from './botao-parcial'

type Props = {
    qtdeCerto?: number
    qtdeMeioCerto?: number
}

export default function ResultadoParcial(props: Props) {
    const qtdeCertos = props.qtdeCerto ?? 0
    const qtdeMeioCerto = props.qtdeMeioCerto ?? 0
    const certos = new Array(qtdeCertos).fill(2)
    const meioCertos = new Array(qtdeMeioCerto).fill(1)
    const errados = new Array(4 - qtdeCertos - qtdeMeioCerto).fill(0)
    const resultado = certos.concat(meioCertos).concat(errados)

    return (
        <div className="resultado-parcial-box border d-flex justify-content-center align-items-center">
            <div>
                <BotaoRedondo size='small' posicaoCerta={resultado[0] == 2} corCerta={resultado[0] == 1}></BotaoRedondo>
                <BotaoRedondo size='small' posicaoCerta={resultado[2] == 2} corCerta={resultado[2] == 1}></BotaoRedondo>
            </div>
            <div>
                <BotaoRedondo size='small' posicaoCerta={resultado[1] == 2} corCerta={resultado[1] == 1}></BotaoRedondo>
                <BotaoRedondo size='small' posicaoCerta={resultado[3] == 2} corCerta={resultado[3] == 1}></BotaoRedondo>
            </div>
        </div>
    )
}