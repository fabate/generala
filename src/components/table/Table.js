import React, { Component } from 'react';
import Cube from "../cube/Cube.js"
import Dice from "../dice/Dice.js"

class Table extends React.Component {

    constructor(props){
        super(props)
        this.state = {showCube: true}
    }


    renderCube() {
        if(this.state.showCube) {
            return <Cube onclick={this.props.rollDices}></Cube>

        }

    }

    renderDices() {
        if(!this.state.showCube) {
            return( <div className="dices">
                    <Dice value={this.props.dices[0]}/>
                    <Dice value={this.props.dices[1]}/>
                    <Dice value={this.props.dices[2]}/>
                    <Dice value={this.props.dices[3]}/>
                    <Dice value={this.props.dices[4]}/>
                </div>)



        }
    }



    render(){

        return (
            <div className="pano">
                {this.renderCube()}
                {this.renderDices()}
            </div>

        );

    }
}

export default Table;