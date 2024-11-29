import React, { Component } from 'react'
import ApiService from '../../service/ApiService';
import withNavigate from '../../routing/Navigate.HOC';

interface Props {
  navigate: any
}

interface State {
  userForm: {
    name: string,
    email: string,
    dob: string,
    gender: string,
    phone: number,
    address: string,
    pincode: string, 
    state: string,
    country: string,
    loginId: string,
    password: string
  }
}

class AddUserComponent extends Component<Props, State> {


  constructor(props: any) {
    super(props);
    this.state = {
      userForm: {
        name: '',
        email: '',
        dob: '',
        gender: '',
        phone: 0,
        address: '',
        pincode: '',
        state: '',
        country: '',
        loginId: '',
        password: ''
      }
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault()

    const res = ApiService.postData('/users', this.state.userForm);
    console.log(res);
  }

  handleReset = (e: any) => {
    e.preventDefault()

    this.setState({userForm: {
      name: '',
      email: '',
      dob: '',
      gender: '',
      phone: 0,
      address: '',
      pincode: '',
      state: '',
      country: '',
      loginId: '',
      password: ''
    }})
    
  }

  gotoUsers = () => {
    this.props.navigate('/main/users');
  }

  onInputChange = (event: any) => {
    const {name, value} = event.target;
    this.setState({
      userForm: {
        ...this.state.userForm,
        [name]: value
      } 
    })
  }

  render() {
    return (
      <div>
        <h1> Create User:</h1>
        <div>
          <form>
            <div>
              <label>Name:</label>
              <input type='text' name='name'
                value={this.state.userForm.name}
                onChange={this.onInputChange}
                placeholder='Full Name'
                required/>
            </div>
            <div>
              <label>Email:</label>
              <input type='text' name='email'
                value={this.state.userForm.email}
                onChange={this.onInputChange}
                placeholder='Email Id'
                required/>
            </div>
            <div>
              <label>Dob:</label>
              <input type='text' name='dob'
                value={this.state.userForm.dob}
                onChange={this.onInputChange}
                placeholder='Date of Birth'
                required/>
            </div>
            <div>
              <label>Gender:</label>
              <label>
                <input type='radio' name='gender'
                  value="male"
                  checked={this.state.userForm.gender === 'male'}
                  onChange={this.onInputChange}/>
                  Male
              </label>
              
              <label>
                <input type='radio' name='gender'
                  value="female"
                  checked={this.state.userForm.gender === 'female'}
                  onChange={this.onInputChange}/>
                  Female
              </label>
            </div>
            <div>
              <label>Phone:</label>
              <input type='number' name='phone'
                value={this.state.userForm.phone}
                onChange={this.onInputChange}
                placeholder='Phone Number'/>
            </div>
            <div>
              <label>Address:</label>
              <input type='text' name='address'
                value={this.state.userForm.address}
                onChange={this.onInputChange}
                placeholder='Address' required/>
            </div>
            <div>
              <label>Pincode:</label>
              <input type='text' name='pincode'
                value={this.state.userForm.pincode}
                onChange={this.onInputChange}
                placeholder='Pincode' required/>
            </div>
            <div>
              <label>State:</label>
              <input type='text' name='state'
                value={this.state.userForm.state}
                onChange={this.onInputChange}
                placeholder='State' required/>
            </div>
            <div>
              <label>Country:</label>
              <input type='text' name='country'
                value={this.state.userForm.country}
                onChange={this.onInputChange}
                placeholder='Country' required/>
            </div>
            <div>
              <label>Loin Id:</label>
              <input type='text' name='loginId'
                value={this.state.userForm.loginId}
                onChange={this.onInputChange}
                placeholder='Login Id' required/>
            </div>
            <div>
              <label>Password:</label>
              <input type='password' name='password'
                value={this.state.userForm.password}
                onChange={this.onInputChange}
                placeholder='Password' required/>
            </div>
            <div>
              <button type='submit' onClick={this.handleSubmit} > Submit</button>
              <button type='reset' onClick={this.handleReset} > Reset</button>
            </div>
          </form>
        </div>
        <div>
          <button onClick={this.gotoUsers}> Retrun to Users</button>
        </div>
      </div>
    )
  }
}


export default withNavigate(AddUserComponent);
