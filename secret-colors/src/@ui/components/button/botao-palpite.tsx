type Props = {
    id: string
    size?: "large" | "small"
    cor?: "" | "1" | "2" | "3" | "4" | "5" | "6"
    selecionado?: boolean
    disabled?: boolean
    onClick?: (id: string) => void
}

export default function BotaoRedondo(props: Props) {    
    const cor = props.cor ? "cor" + props.cor : "vazio"
    const size = props.size ?? "large"
    const selecionado = props.selecionado ? "selecionado" : ""

    function executar() {
        if (! props.disabled) {
            props.onClick(props.id)
        }
    }

    return (
        <>
            <div className={`botao-redondo ${cor} ${size} ${selecionado}`} onClick={() => executar()}></div>
        </>
    )
}