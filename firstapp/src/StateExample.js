import React  from 'react'

export default class StateExample extends React.Component {
    state={
        name:"react",
        age:72467
    }
  render() {
    return (
      <div>
        StateExample
       <p>{this.state.name}
       {this.state.age}
        </p>
      </div>
    )
  }
}
