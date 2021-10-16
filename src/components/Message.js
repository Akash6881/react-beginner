import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'please subsribe'
        }
    }

    changeMessage(){
        this.setState({
            message : 'thanks for subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>subsribe</button>
            </div>
        )
    }
}

export default Message