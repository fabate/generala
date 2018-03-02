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
            <div>{this.props.currentTurn(this.props.p1,this.props.p2)}</div>
        );
    }
}