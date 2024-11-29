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
        this.state = {}
    }

    render() {
        return (
        <div>
            <Outlet></Outlet>
        </div>

        )
    }
}


export default withNavigate(UsersLayoutComponent);
