import React, { Component } from 'react'
import Boiler from './Boiler'
import TemInput from './TemInput'
import {convart, toCal, toFar} from './lib/Convert'

export default class Calculature extends Component {
    state = {
        tem: "",
        scale:"c"
    }
    onHandleChange = (e, scale) => {
        this.setState({
            
                tem: e.target.value,
                scale
    
        })
    }
    render() {
        const { tem, scale } = this.state;

        const cal= scale==="f" ? convart(tem, toCal):tem
        const far= scale==="c" ? convart(tem, toFar):tem
        return (
            <div className="ok">
                <TemInput
                    scale="c"
                    onTemChange={this.onHandleChange}
                    tem={cal}
                
                />
                <TemInput
                    scale="f"
                    onTemChange={this.onHandleChange}
                    tem={far}
                
                
                />
                <Boiler className="p" cal= {parseFloat(cal)} />
            </div>
        )
    }
}
