import React from 'react'
const leanthName = {
    f:"Feet",
    m: "Meter",
    c:"cinte Meter"
}

export default function FeetInput({length, typee, handleChange}) {
    return (
        <div>
            <fieldset>
                <legend className="legend">Enter a Value {leanthName[typee]}:</legend>
                <input className="input" type="text" name="" id="" value= {length} onChange= {(e)=>handleChange(e, typee)}  />
            </fieldset>
        </div>
    )
}
