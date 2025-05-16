import Navbar from './components/Navbar'
import Add from './components/props/Ex1'
import Products from './components/props/Products';
import productData from './components/props/Products.data'
import Base from './components/useState/Base1';
import About from './pages/About.jsx'
import {Routes , Route} from 'react-router-dom'
import Settings from './pages/Settings';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home.jsx';
import TechStack from './pages/TechStack.jsx';
import SingleProducts from './pages/SingleProducts.jsx';
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
    {/* <Base/> */}
    <Navbar/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path='products' element={<TechStack/>}/>
      <Route path='products/:id' element={<SingleProducts/>} />
    </Routes>
    </>
  )
}
export default App;