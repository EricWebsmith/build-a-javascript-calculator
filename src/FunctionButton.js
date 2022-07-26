export default function FunctionButton(props) {

    function handleClick(e){
        e.preventDefault();
        props.dispatch({
            type: props.action
        })
    }   

    return (
        <button className="btn btn-function" id={props.id} value={props.value} onClick={handleClick}>
            {props.value}
        </button>
    )
}