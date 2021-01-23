import './App.css'
import NavBar from './components/navbar/NavBar'
import FooTer from './components/footer/FooTer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {

  return <>

        <BrowserRouter>
                <NavBar />
                <Switch>
                        <Route exact path='/item/:id' component={ItemListContainer} />
                        <Route exact path='/category/:categoryId' component={ItemListContainer} />
                        <Route  path='/' component={ItemListContainer} />
                </Switch>
                <FooTer/>
        </BrowserRouter>   
        </>
}
export default App




