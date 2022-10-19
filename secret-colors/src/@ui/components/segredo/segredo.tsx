import BotaoPalpite from '../button/botao-palpite'
import If from '../logico/if'

type Props = {
    segredo: any
    revelarSegredo?: boolean
}


export default function Segredo(props: Props) {

    return (
        <div>
            <div className={`segredo-box border d-flex flex-column justify-content-center align-items-center`}>
                <If condition={props.revelarSegredo}>
                <BotaoPalpite id='1' size='large' cor={props.segredo[0]}></BotaoPalpite>
                <BotaoPalpite id='2' size='large' cor={props.segredo[1]}></BotaoPalpite>
                <BotaoPalpite id='3' size='large' cor={props.segredo[2]}></BotaoPalpite>
                <BotaoPalpite id='4' size='large' cor={props.segredo[3]}></BotaoPalpite>
                </If>
            </div>
        </div>
    )
}