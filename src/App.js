import React from 'react'
import "./App.css"
import NavBar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/Footer"
import Cart from "./components/Cart/Cart"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import {Context} from './CartContext'
const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Context>
        <NavBar />
        <Switch>
          <Route exact path="/item/:id" component={ItemListContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route
            exact
            path="/category/:categoryId"
            component={ItemListContainer}
          />
          <Route path="/" component={ItemListContainer} />{" "}
        </Switch>
        <Footer />
        </Context>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
