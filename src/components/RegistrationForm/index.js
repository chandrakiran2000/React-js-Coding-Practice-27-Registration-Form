// Write your JS code here

import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    blurFirstnameErrorMsg: '',
    blurLastnameErrorMsg: '',
    firstname: '',
    lastname: '',
    isSubmited: false,
  }

  blurFirstname = event => {
    if (event.target.value === '') {
      //  console.log('blur')
      this.setState({
        blurFirstnameErrorMsg: 'Required',
        firstname: event.target.value,
      })
    } else {
      //  console.log('not blur')
      this.setState({blurFirstnameErrorMsg: ''})
    }
  }

  blurLastname = event => {
    if (event.target.value === '') {
      //  console.log('blur')
      this.setState({
        blurLastnameErrorMsg: 'Required',
      })
    } else {
      //  console.log('not blur')
      this.setState({blurLastnameErrorMsg: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstname: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastname: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state

    if (firstname === '' && lastname === '') {
      this.setState({
        blurFirstnameErrorMsg: 'Required',
        blurLastnameErrorMsg: 'Required',
      })
    } else if (firstname === '') {
      this.setState({blurFirstnameErrorMsg: 'Required'})
    } else if (lastname === '') {
      this.setState({blurLastnameErrorMsg: 'Required'})
    } else {
      this.setState(prevState => ({
        isSubmited: !prevState.isSubmited,
        blurFirstnameErrorMsg: '',
        blurLastnameErrorMsg: '',
        firstname: '',
        lastname: '',
      }))
      console.log('submitted')
    }
  }

  getTheForm = () => {
    const {blurFirstnameErrorMsg, blurLastnameErrorMsg} = this.state
    const {firstname, lastname} = this.state
    const errorFirst = blurFirstnameErrorMsg === '' ? '' : 'input-required'
    const errorLast = blurLastnameErrorMsg === '' ? '' : 'input-required'
    return (
      <form className="form-card" onSubmit={this.submitForm}>
        <div className="input-first-name-card">
          <label htmlFor="firstnameid" className="input-label-name">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstnameid"
            className={`input-first-name ${errorFirst}`}
            placeholder="Firstname"
            onBlur={this.blurFirstname}
            onChange={this.onChangeFirstName}
            value={firstname}
          />
          <p className="first-name-error-msg">{blurFirstnameErrorMsg}</p>
        </div>
        <div className="input-last-name-card">
          <label htmlFor="lastnameid" className="input-label-name">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastnameid"
            className={`input-last-name ${errorLast}`}
            placeholder="Lastname"
            onBlur={this.blurLastname}
            onChange={this.onChangeLastName}
            value={lastname}
          />
          <p className="last-name-error-msg">{blurLastnameErrorMsg}</p>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      isSubmited: !prevState.isSubmited,
    }))
  }

  getTheSuccess = () => (
    <div className="success-card">
      <img
        className="success-img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-heading">Submitted Successfully</p>
      <button className="success-btn" type="button" onClick={this.onClickBtn}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmited} = this.state
    return (
      <div className="registration-form-card">
        <h1 className="registration-form-heading">RegistrationForm</h1>
        {isSubmited ? this.getTheSuccess() : this.getTheForm()}
      </div>
    )
  }
}

export default RegistrationForm
