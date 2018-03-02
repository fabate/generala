import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

    constructor(props) {
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
            stateModify: function(move){
                this.state[move.keys(0)] = move[0];
            }
        };
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
                <Table {...this.props} />
                <Turn {...this.props} />
                <Score {...this.props} />
                <Move {...this.props} />
                <Result {...this.props} />
            </div>
        </p>
      </div>
    );
  }
}

export default App;
