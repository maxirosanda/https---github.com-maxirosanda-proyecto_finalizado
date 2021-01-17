import './App.css'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {

  return <>
 <NavBar />
<ItemListContainer texto='hola buenas Noches'>
  <h2>children 1</h2>
  <h3>children 2</h3>
</ItemListContainer>
</>
}
export default App
