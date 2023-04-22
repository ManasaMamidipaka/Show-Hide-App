// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading"> Show/Hide </h1>
        <div className="btn-container">
          <div className="name-container">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
              {showFirstName && <p className="show-hide-name"> Joe </p>}
            </button>
          </div>
          <div className="name-container">
            <button
              className="show-hide-btn"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
              {showLastName && <p className="show-hide-name"> Jonas </p>}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
