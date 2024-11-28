import React, { Component } from 'react'
import { IoIosAddCircle } from "react-icons/io";


import ViewUsersComponent from './ViewUsersComponent';
import withNavigate from '../../routing/Navigate.HOC';
import { Outlet } from 'react-router-dom';

interface Props {
    navigate: any
}
interface State {}

class UsersLayoutComponent extends Component<Props, State> {

    constructor(props: any) {
        super(props);
    }

    // onAddUser = () => {
    //     this.props.navigate('/main/users/add');
    // }

    render() {
        return (
        <div>
            <Outlet></Outlet>
            {/* <IoIosAddCircle onClick={this.onAddUser} > Add User </IoIosAddCircle> */}
            {/* <button></button>
            <ViewUsersComponent></ViewUsersComponent> */}
        </div>

        )
    }
}


export default withNavigate(UsersLayoutComponent);
