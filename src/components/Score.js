import React, { Component } from 'react'
import playerPoints, { gamePoints } from '../lib'

class Score extends Component {
    render (props) {
        let results = this.tableData(this.props.p1, this.props.p2);
        return (
            <table>
                <thead>
                    <tr>
                        <td>Move</td>
                        <td>P1</td>
                        <td>P2</td>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result,i) => 
                    <tr key={result[0]}>
                        <td key={result[1]}>{result[0]}</td>
                        <td key={result[2]}>{result[1]}</td>
                        <td key={result[3]}>{result[2]}</td>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>{/*playerPoints(this.props.p1)*/}</td>
                        <td>{/*playerPoints(this.props.p2)*/}</td>
                    </tr>
                </tfoot>
            </table>
        )
    }
    tableData (p1,p2) {
        let result = Object.keys(p1).map( k => {
            return [
                k,
                ['E', 'F', 'P', 'G'].indexOf(k) === -1 ? k*p1[k] : p1[k] || 0,
                ['E', 'F', 'P', 'G'].indexOf(k) === -1 ? k*p2[k] : p2[k] || 0,
            ]
        });
        
        return result;
    }
}
export default Score;