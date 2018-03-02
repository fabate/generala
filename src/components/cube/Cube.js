
import React, { Component } from 'react';


class Cube extends React.Component {



    render() {
        return (
           <button id="cube" onClick={this.props.onclick}>Move</button>
        )
    }
}

export default Cube