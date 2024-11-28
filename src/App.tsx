import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";


import logo from './logo.svg';
import './App.scss';
import HeaderComponent from './main/layout/header/HeaderComponent';
import FooterComponent from './main/layout/footer/FooterComponent';
import LandingPageComponent from './main/LandingPageComponet';
import LoginComponent from "./login/LoginComponent";
import DashboardComponent from "./main/dashboard/DashboardComponent";
import UsersComponent from "./main/users/AddUsersComponent";
import BooksComponent from "./main/books/BooksComponent";
import UsersLayoutComponent from "./main/users/UsersLayoutComponent";
import AddUserComponent from "./main/users/AddUsersComponent";
import ViewUsersComponent from "./main/users/ViewUsersComponent";


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginComponent/>} />
            <Route path='/login' element={<LoginComponent/>} />

            <Route path='/main' element={<LandingPageComponent/>} >
              <Route index element={<DashboardComponent/>} />
              <Route path="users" element={<UsersLayoutComponent/>}>
                <Route  index element={<ViewUsersComponent/>} />
                <Route path="add" element={<AddUserComponent/>} />
                <Route path="edit/:id" element={<AddUserComponent/>} />
              </Route>
              <Route path="books" element={<BooksComponent/>} />
              <Route path="authors" element={<BooksComponent/>} />
              <Route path="orders" element={<BooksComponent/>} />
            </Route>

            <Route path='*' element={<LoginComponent/>} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
 
}

export default App;

