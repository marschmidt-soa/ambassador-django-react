import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {RedirectToUsers} from "./components/RedirectToUsers";
import Links from "./pages/Links";
import Products from "./pages/products/Products";
import ProductForm from "./components/ProductForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route path={'/'} exact component={RedirectToUsers}/>
                <Route path={'/users'} exact component={Users}/>
                <Route path={'/users/:id/links'} component={Links}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/products'} exact component={Products}/>
                <Route path={'/products/create'} component={ProductForm}/>
                <Route path={'/products/:id/edit'} component={ProductForm}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
