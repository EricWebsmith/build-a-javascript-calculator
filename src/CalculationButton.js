import { ACTIONS } from "./ACTIONS";

export default function CalculationButton(props) {

    function handleClick(e) {
        e.preventDefault();
        props.dispatch({
            type: ACTIONS.CALCULATION
        })
    }

    return (
        <button className="btn btn-operation" id={props.id} value={props.value} onClick={handleClick}>
            {props.value}
        </button>
    )
}