import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import FunctionButton from "./FunctionButton";
import CalculationButton from "./CalculationButton";
import { useReducer } from "react";
import { ACTIONS } from "./ACTIONS";
import { OPERATIONS } from "./OPERATIONS";

function reducer(state, action) {
    const operstions = Object.values(OPERATIONS);
    const lastChar = state.display[state.display.length - 1];
    const isLastCharOperator = operstions.includes(lastChar);
    const lastSecondChar = state.display[state.display.length - 2];

    if (state.calculated) {
        state.formula = state.display;
        state.calculated = false;
    }
    switch (action.type) {


        case ACTIONS.CLEAR:
            return {
                formula: '',
                display: ''
            }
        case ACTIONS.DIGIT:
            if (state.display === '0') {
                return {
                    ...state,
                    display: action.payload.digit,
                    formula: state.formula.replace(/0$/, '') + action.payload.digit
                }
            }

            if (action.payload.digit === '.' && state.display.includes('.')) {
                return state;
            } else {
                return {
                    ...state,
                    display: isLastCharOperator?action.payload.digit:state.display+action.payload.digit,
                    formula: state.formula + action.payload.digit
                }
            }
        case ACTIONS.OPERATION:


            if (action.payload.operation === OPERATIONS.MINUS && operstions.includes(lastSecondChar)) {
                return state;
            }
            else if (operstions.includes(lastChar)) {
                return state;
            }

            return {
                ...state,
                display: action.payload.operation,
                formula: state.formula + action.payload.operation
            }
        case ACTIONS.CALCULATION:
            let formula = state.formula;
            while(operstions.includes( formula[formula.length-1])) {
                formula = formula.substring(0, formula.length-1);
            }
            const display = eval(state.formula);
            
            console.log(display);
            return {
                ...state,
                formula,
                display: display+'',
                calculated: true
            }

        default:
            return state;
    }
}

export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, {
        formula: '0',
        display: '0',
        calculated: false
    });

    return (
        <div id="calculatorWrap">
            <header>
                <h1>iPhone Calculator</h1>
            </header>
            <div id="monitor">
                <p className="formulaScreen">{state.formula}</p>
                <h1 id="display">{state.display}</h1>
            </div>
            <div className="buttons">
                <FunctionButton id="clear" value="AC" dispatch={dispatch} action={ACTIONS.CLEAR} />
                <FunctionButton value="+/-" dispatch={dispatch} />
                <FunctionButton value="%" dispatch={dispatch} />
                <OperationButton id="divide" value={OPERATIONS.DIVIDE} dispatch={dispatch} />

                <DigitButton id="seven" value='7' dispatch={dispatch} />
                <DigitButton id="eight" value='8' dispatch={dispatch} />
                <DigitButton id="nine" value='9' dispatch={dispatch} />
                <OperationButton id="multiply" value={OPERATIONS.MULTIPLY} dispatch={dispatch} />

                <DigitButton id="for" value='4' dispatch={dispatch} />
                <DigitButton id="five" value='5' dispatch={dispatch} />
                <DigitButton id="six" value='6' dispatch={dispatch} />
                <OperationButton id="subtract" value={OPERATIONS.MINUS} dispatch={dispatch} />

                <DigitButton id="one" value='1' dispatch={dispatch} />
                <DigitButton id="two" value='2' dispatch={dispatch} />
                <DigitButton id="three" value='3' dispatch={dispatch} />
                <OperationButton id="add" value={OPERATIONS.PLUS} dispatch={dispatch} />

                <DigitButton id="zero" value='0' dispatch={dispatch} />
                <DigitButton id="decimal" value='.' dispatch={dispatch} />
                <CalculationButton id="equals" value='=' dispatch={dispatch} />
            </div>
        </div>
    )
}