import React from 'react'
const scaleNames = {
    c:"Celsius",
    f:"Fahrenhit"
}

export default function TemInput({scale, tem, onTemChange}) {
    return (
        <div>
            <fieldset>
                <legend className="legend">Enter a {scaleNames[scale]}</legend>
                <input className="input"  type="text" value={tem}  onChange={(e) => onTemChange(e,scale)} />
            </fieldset>
        </div>
    )
}
