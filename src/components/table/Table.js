import React, { Component } from 'react';
import Cube from "../cube/Cube.js"
import Dice from "../dice/Dice.js"

class Table extends React.Component {

    constructor(props){
        super(props)
        this.state = {showCube: true, dices:[]}
        this.rollDices = this.rollDices.bind(this)
    }

    rollDices() {
        this.setState({showCube:false, dices:[1, 2, 3, 4, 5]})//Helper.getDices
    }


    renderCube() {
        if(this.state.showCube) {
            return <Cube onclick={this.rollDices}></Cube>

        }

    }

    renderDices() {
        if(!this.state.showCube) {
            return( <div className="dices">
                    <Dice value={this.state.dices[0]}/>
                    <Dice value={this.state.dices[1]}/>
                    <Dice value={this.state.dices[2]}/>
                    <Dice value={this.state.dices[3]}/>
                    <Dice value={this.state.dices[4]}/>
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