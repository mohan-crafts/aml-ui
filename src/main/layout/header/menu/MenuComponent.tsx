import { Component } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
// import "../App.css";
import { IconContext } from "react-icons";

interface State {
    sidebar: boolean
}

interface Props {

}

export default class MenuComponent extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            sidebar: true
        }
    }

    private showSidebar = () => {
        this.setState({sidebar: !this.state.sidebar})
    }


    render() {
        return (
            <>
              <IconContext.Provider value={{ color: "green" }}>
                <div className="navbar">
                  <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={this.showSidebar} />
                  </Link>
                </div>
                <nav className={this.state.sidebar ? "nav-menu active" : "nav-menu"}>
                  <ul className="nav-menu-items" onClick={this.showSidebar}>
                    <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                      </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </IconContext.Provider>
            </>
          );
    }
}
