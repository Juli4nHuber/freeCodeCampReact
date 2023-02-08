import React from "react";
import '../styles/counter.css'

export default function Counter({ numClicks}) {
    return (
        <div className='counter'>
            {numClicks}
        </div>
    );
}