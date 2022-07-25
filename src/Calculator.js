import Button from "./Button";

export default function Calculator () {
    return (
        <div id="calculatorWrap">
            <div id="monitor">

            </div>
            <div className="buttons">
                <Button id="clear" value="AC" /><Button /><Button /><Button id="divide" value='/' />
                <Button id="seven" value='7' /><Button id="eight" value='8' /><Button id="nine" value='9' /><Button id="multiply" value='*' />
                <Button id="for" value='4' /><Button id="five" value='5' /><Button id="six" value='6' /><Button id="subtract" value='-' />
                <Button id="one" value='1' /><Button id="two" value='2' /><Button id="three" value='3' /><Button id="add" value='+' />
                <Button id="zero" value='0' /><Button value='.' /><Button id="equals" value='=' />
            </div>
        </div>
    )
}