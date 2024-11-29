import React from "react";

import { Outlet } from "react-router-dom";
import FooterComponent from "./layout/footer/FooterComponent";
import HeaderComponent from "./layout/header/HeaderComponent";


class  LandingPageComponent extends React.Component {

    render() {
        return(
            <div> 
              <div className="header">
                <HeaderComponent></HeaderComponent>
              </div>
              <div className="main-container">
                  <Outlet></Outlet>
              </div>
              <div className="footer">
                <FooterComponent></FooterComponent>
              </div>   
            </div>
        )
    }
}

export default LandingPageComponent;