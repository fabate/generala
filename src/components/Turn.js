/**
 * Created by acalodolce on 02/03/18.
 */
import React, { Component } from 'react';


export default class Turn extends Component {


    constructor(props) {
        super(props);
    }



    render(){
        return(
            <div>{'Jugador '+this.props.currentTurn}</div>
        );
    }
}