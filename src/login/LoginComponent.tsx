import React, { Component } from 'react'; 

import withNavigate from '../routing/Navigate.HOC';
import ApiService from '../service/ApiService';

interface State {
    credentials : {
        userName: string,
        password: string,
    }
    loginRes: any
  }

interface Props {
    navigate: any
}

class LoginComponent extends Component<Props, State> {

    constructor(props: any){  
        super(props);  
        this.state = { 
             loginRes: {},
             credentials:  {
                userName: "",
                password: ""
             }
          }  
    }

    private handleInputChange = (event: any) => {
        const {name, value } = event.target;
        this.setState({
            credentials: {
                ...this.state.credentials,
                [name]: value
            }
        })
    }

    private handleClick() {
       ApiService.getData("login").then(data => this.cbsLogin(data));
    };

    private cbsLogin(data: any) {
        this.setState({loginRes: data});
        if (data.name) {
            this.props.navigate("/main");
        }
    }
    
    render(): React.ReactNode {
        return ( 
            <div className='login-container'>
                <div>
                    <label> User Name: </label>
                    <input type="text" 
                           name='userName'
                           placeholder="user name" 
                           value={this.state.credentials.userName}
                           onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label> Password:  </label>
                    <input type="password" 
                           name='password'
                           placeholder="Enter your password"
                           value={this.state.credentials.password} 
                           onChange={this.handleInputChange}/>
                </div>
                <div>
                    <button name="Login" onClick={() => this.handleClick()}> Login</button>
                </div>
            </div>
        )
    }
}

export default withNavigate(LoginComponent);