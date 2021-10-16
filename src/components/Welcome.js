import React, { Component } from 'react'

class Welcome extends Component{
    render(){

        return <h1>hi {this.props.name} </h1>
    }
}

export default Welcome