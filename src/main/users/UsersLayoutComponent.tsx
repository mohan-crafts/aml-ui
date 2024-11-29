import { Component } from 'react';


import { Outlet } from 'react-router-dom';
import withNavigate from '../../routing/Navigate.HOC';

interface Props {
    navigate: any
}
interface State {}

class UsersLayoutComponent extends Component<Props, State> {

    constructor(props: any) {
        super(props);
    }

    // onAddUser = () => {ßß
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
