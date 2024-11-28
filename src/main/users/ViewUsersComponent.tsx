import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { LuEye } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import withNavigate from "../../routing/Navigate.HOC";
import ApiService from "../../service/ApiService";

interface Props {
    navigate: any
}
interface State {
    users: []
}

class ViewUsersComponent extends React.Component<Props,State> {

    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        }

        this.getUsers();
    }

    getUsers() {
        ApiService.getData('/users').then((res) => {
            this.setState({users: res});
        })
    }

    onAddUser = () => {
        this.props.navigate('/main/users/add');
    }

    onViewUser = (user: any) => {
        this.props.navigate('/main/users/add');
    }

    onEditUser = (user: any) => {
        this.props.navigate('/main/users/edit/' + user.id);
    }

    render() {
        return (
         <div>
            <div>
                <button onClick={this.onAddUser} >
                    <IoIosAddCircle /> Add User
                </button>
            </div>
            <div>
                <h2> User Table </h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Login Id</th>
                            <th>Password</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.users.map((user: any) => (
                            <tr key={user.id}>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                                <td> {user.phone} </td>
                                <td> {user.address} </td>
                                <td> {user.state} </td>
                                <td> {user.country} </td>
                                <td> {user.loginId} </td>
                                <td> {user.password} </td>
                                <td > 
                                    <span onClick={() => this.onViewUser(user)} className="user-options"> <LuEye  /> </span>
                                    <span onClick={() => this.onEditUser(user)} className="user-options"> <MdOutlineModeEditOutline  /> </span>
                                </td>
                            </tr>
                           ))
                        }
                    </tbody>
                </table>
            </div>
         </div>

        )
    }
}




export default withNavigate(ViewUsersComponent);