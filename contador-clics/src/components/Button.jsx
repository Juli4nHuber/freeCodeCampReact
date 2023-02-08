import React from "react";
import '../styles/button.css';

function Button({ text, isButtonClick, setClick }) {
    return (
        <button
            className={isButtonClick ? 'button-click' : 'button-restart'}
            onClick={setClick}
        >
            {text}
        </button>
    );
}

export default Button;