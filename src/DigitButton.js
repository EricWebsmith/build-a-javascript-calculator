import { ACTIONS } from "./ACTIONS";

export default function DigitButton(props) {

    function handleClick(e) {
        e.preventDefault();
        props.dispatch({
            type: ACTIONS.DIGIT,
            payload: {
                digit: props.value
            }
        })
    }

    return (
        <button className="btn btn-digit" id={props.id} value={props.value} onClick={handleClick}>
            {props.value}
        </button>
    )
}