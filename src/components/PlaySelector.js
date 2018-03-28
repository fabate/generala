import React, { Component } from 'react';
import {possiblePlayerPlays} from '../lib';

class PlaySelector extends Component {
    constructor(props){
        super(props);
        this.possiblePlayerPlays = possiblePlayerPlays(this.props.dices);
    }
    render(){
        return (
            <div>
                {this.possiblePlayerPlays[1] ? <input value={{1: this.possiblePlayerPlays[1]}} type="button">{this.possiblePlayerPlays[1]*1} al uno</input>: ''}
                {this.possiblePlayerPlays[2] ? <input value={{2: this.possiblePlayerPlays[2]}} type="button">{this.possiblePlayerPlays[2]*2} al dos</input>: ''}
                {this.possiblePlayerPlays[3] ? <input value={{3: this.possiblePlayerPlays[3]}} type="button">{this.possiblePlayerPlays[3]*3} al tres</input>: ''}
                {this.possiblePlayerPlays[4] ? <input value={{4: this.possiblePlayerPlays[4]}} type="button">{this.possiblePlayerPlays[4]*4} al cuatro</input>: ''}
                {this.possiblePlayerPlays[5] ? <input value={{5: this.possiblePlayerPlays[5]}} type="button">{this.possiblePlayerPlays[5]*5} al cinco</input>: ''}
                {this.possiblePlayerPlays[6] ? <input value={{6: this.possiblePlayerPlays[6]}} type="button">{this.possiblePlayerPlays[6]*6} al seis</input>: ''}
                {this.possiblePlayerPlays['E'] ? <input type="button">Escalera</input>: ''}
                {this.possiblePlayerPlays['F'] ? <input type="button">Full</input>: ''}
                {this.possiblePlayerPlays['P'] ? <input type="button">Poker</input>: ''}
                {this.possiblePlayerPlays['G'] ? <input type="button">Generala</input>: ''}
            </div>
        );
    }
}

export default PlaySelector;