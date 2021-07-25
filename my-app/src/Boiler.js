import React from 'react'

export default function Boiler({ cal = 0 }) {
    
        
    if (cal >= 100) {
        return <p>Water Wil Boil</p>
    }
    return <p>Water would not Boil</p>
}