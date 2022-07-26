import { ACTIONS } from "./ACTIONS";

export default function OperationButton(props) {

    function handleClick(e) {
        e.preventDefault();
        props.dispatch({
            type: ACTIONS.OPERATION,
            payload:{
                operation: props.value
            }
        })
    }

    return (
        <button className="btn btn-operation" id={props.id} value={props.value} onClick={handleClick}>
            {props.value}
        </button>
    )
}