import React from 'react'
import "./App.css"
import NavBar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/Footer"
import CartContainer from "./components/Cart/CartContainer"
import CategoryContainer from "./components/Item/CategoryContainer"
import ItemContainer from './components/Item/ItemContainer'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import {Context} from './Context'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'

const App = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Context>
        <NavBar />
        <Switch>
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route
            exact
            path="/category/:categoryid"
            component={CategoryContainer}
          />
          <Route path="/" component={ItemContainer} />{" "}
        </Switch>
        <Footer />
        </Context>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
