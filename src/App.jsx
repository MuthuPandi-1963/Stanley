import Navbar from './components/Navbar'
import About from './components/About';
import Add from './components/props/Ex1'
import Products from './components/props/Products';
import productData from './components/props/Products.data'
import Base from './components/useState/Base1';
function App(){
  const navBarItems = ["Home" , "About" , "Settings","Sign up","Login" ,"Contact us"]
  return (
    <>
    {/* <Navbar item={navBarItems}/>
    <About/>
    <Products products = {productData} />
    <Add a={10} b={20} />
    <Add a={100} b={200} />
    <Add a={300} b={600} /> */}
    <Base/>
    </>
  )
}
export default App;