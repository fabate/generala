import React, { Component } from 'react';

class Dice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.value}
            </div>
        );
    }
}



export default Dice