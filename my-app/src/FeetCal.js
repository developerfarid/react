import React, { Component } from 'react'
import FeetInput from './FeetInput'
import { convert, toFeet, toMeter } from './lib/FeetToMeter'
import CSS from '../src/index.css'

export default class FeetCal extends Component {
    state = {
        length: "",
        typee: "f"
    }
    handle = (e, typee)=>{
        this.setState({
            length: e.target.value,
            typee
        })
    }

    
    render() {
        const { length, typee } = this.state;


        const feet = typee=== "m"? convert(length , toFeet): length 
        const meter = typee=== "f" ? convert(length , toMeter): length 
    
        return (
            <div className="ok">
                <FeetInput typee="f" handleChange={this.handle} length={feet} />
                <FeetInput typee="m" handleChange={this.handle} length={meter} />
            
            </div>
        )
    }
}
