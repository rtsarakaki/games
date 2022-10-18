type Props = {
    size?: "large" | "small"
    corCerta?: boolean
    posicaoCerta?: boolean
}

export default function BotaoRedondo(props: Props) {
    const corCerta = props.corCerta ? 'cor-certa' : 'vazio'
    const cor = props.posicaoCerta ? 'posicao-certa' : corCerta
    return (
        <>
            <div className={`botao-redondo ${cor} ${props.size ?? "large"}`}></div>
        </>
    )
}