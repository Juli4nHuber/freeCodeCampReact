import React from "react";
import '../styles/clearButton.css'

export default function ClearButton (props) {
    return (
    <div className='button-clear' onClick={props.useClear}>
        {props.children}
    </div>
)};