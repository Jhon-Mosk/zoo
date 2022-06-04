export default function Button(props) {
    return (
        <button type="button" onClick={props.onClick}>{props.name}</button>
    )
}
