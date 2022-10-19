
interface ComponentProps {
    condition: boolean
    children: any
}

export default function If(props: ComponentProps) {
    return (
        props.condition ? props.children : false
    )
}