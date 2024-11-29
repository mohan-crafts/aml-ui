import React from "react";
import MenuComponent from "./menu/MenuComponent";


class HeaderComponent extends React.Component {


    render() {
        return (
            <>
                <h1> Liberary Management System</h1>
                <MenuComponent></MenuComponent>ß
            </>
        )
    }
}

export default HeaderComponent;