import React from "react";

import DashboardComponent from "./dashboard/DashboardComponent";
import HeaderComponent from "./layout/header/HeaderComponent";
import FooterComponent from "./layout/footer/FooterComponent";
import { Outlet } from "react-router-dom";


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