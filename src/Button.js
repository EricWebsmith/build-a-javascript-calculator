export default function Button(props) {
    return (
        <button className="btn" id={props.id} value={props.value}>
            {props.value}
        </button>
    )
}