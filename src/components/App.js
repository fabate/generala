import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Table from './table/Table.js';
import Turn  from './Turn';
import {currentTurn,generateDices} from '../lib.js';
import PlaySelector  from './PlaySelector.js';
//import Result  from './Result';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            p1:{
                "1":false,
                "2":false,
                "3":false,
                "4":false,
                "5":false,
                "6":false,
                "E":false,
                "F":false,
                "P":false,
                "G":false,
            },
            p2:{
                "1":false,
                "2":false,
                "3":false,
                "4":false,
                "5":false,
                "6":false,
                "E":false,
                "F":false,
                "P":false,
                "G":false,
            },

            dices:[],

        };

        this.rollDices = this.rollDices.bind(this);
    }

    rollDices() {
        this.setState({dices:generateDices()});//Helper.getDices
    }


    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Genere">Welcome to fucking generala</h1>
        </header>
        <p className="App-intro">
            <div>
                <Table {...this.props} rollDices={this.rollDices}/>
                <Turn {...this.props } currentTurn={currentTurn(this.state.p1,this.state.p2)}/>
                {this.state.dices.length === 5 && <PlaySelector {...this.props} dices={this.state.dices} />}
            </div>
        </p>
      </div>
    );
  }
}

export default App;
