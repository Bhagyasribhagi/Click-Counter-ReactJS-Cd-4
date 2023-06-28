// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  Increament = () => {
    console.log('clicked')
    this.setState(preState => {
      console.log(`count is ${preState.count}`)
      return {count: preState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="count"> {count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the counter</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.Increament}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
