import React, { Component } from 'react'

export class PersonClass extends Component {
  render() {
    return (
       <div>
            <span>{this.props.name} </span>
            <span>{this.props.surname} </span>
            <span>{this.props.age} </span>
            <br/>
        </div>
    )
  }
}
export default PersonClass