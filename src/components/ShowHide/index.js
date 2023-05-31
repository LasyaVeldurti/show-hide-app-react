// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isHiddenFirstName: true, isHiddenSecondName: true}

  onClickDisplayFirstName = () => {
    this.setState(prevState => ({
      isHiddenFirstName: !prevState.isHiddenFirstName,
    }))
  }

  onClickDisplaySecondName = () => {
    this.setState(prevState => ({
      isHiddenSecondName: !prevState.isHiddenSecondName,
    }))
  }

  renderFirstName = () => {
    const {isHiddenFirstName} = this.state
    console.log(isHiddenFirstName)

    if (isHiddenFirstName === false) {
      return (
        <div className="firstname-container">
          <p>Joe</p>
        </div>
      )
    }
    return ''
  }

  renderLastName = () => {
    const {isHiddenSecondName} = this.state
    console.log(isHiddenSecondName)

    if (isHiddenSecondName === false) {
      return (
        <div className="firstname-container">
          <p>Jonas</p>
        </div>
      )
    }
    return ''
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div className="sub-container">
            <button
              onClick={this.onClickDisplayFirstName}
              className="show-hide-button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {this.renderFirstName()}
          </div>
          <div className="sub-container">
            <button
              onClick={this.onClickDisplaySecondName}
              className="show-hide-button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
