import React, { Component } from "react";
class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      date: new Date()
    }
  }

  componentDidMount=()=>{
    setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 1000);
  }

  render(){
    return(
      <div>
        <h1>This is class component</h1>
        <h2>Time is: {this.state.date.toLocaleTimeString()}</h2>
        <hr />
      </div>
    )
  }
}

export default Clock;