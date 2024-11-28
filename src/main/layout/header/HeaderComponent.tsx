import React from "react";
import Navbar from "./menu/MenuComponent";
import MenuComponent from "./menu/MenuComponent";


class HeaderComponent extends React.Component {


    render() {
        return (
            <>
                <h1> Liberary Management System</h1>
                <MenuComponent></MenuComponent>
            </>
        )
    }
}

export default HeaderComponent;