// import './App.css';
import NavBar from "./customercomponent/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//  <-------------- CUSTOMER PANNEL -----------------> 
import Login from './customercomponent/Login'
import Register from './customercomponent/Register'
import ProductList from "./customercomponent/ProductList"
import BuyNow from "./customercomponent/BuyNow"
import AddToCart from "./customercomponent/AddToCart"
import ShippingAddress from "./customercomponent/ShippingAddress";
import Order from './customercomponent/Order'
import Profile from './customercomponent/Profile'

//  <-------------- SELLER PANNEL -----------------> 
import Logins from './sellercomponent/Logins'
import Registers from './sellercomponent/Registers'
import AddProduct from './sellercomponent/AddProduct';
import EditProduct from './sellercomponent/EditProduct';
import ViewProduct from './sellercomponent/ViewProduct';
import Orders from './sellercomponent/Orders'
import Profiles from './sellercomponent/Profiles'

//  <-------------- ADMIN PANNEL -----------------> 
import LogIn from "./admincomponent/LogIn";
import Oder from "./admincomponent/Oder";
import Customer from "./admincomponent/Customer";
import ViewAllProduct from "./admincomponent/ViewAllProduct";

function App() {
  return (
    <div className="App">
      {/* <App></App> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <-------------- CUSTOMER PANNEL -----------------> */}
          <Route path='/login' element={<Login></Login>}>
          </Route>
          <Route path='/register' element={<Register></Register>}>
          </Route>
          <Route path='/productlist' element={<ProductList></ProductList>}>
          </Route>
          <Route path='/buynow' element={<BuyNow></BuyNow>}>
          </Route>
          <Route path='/addtocart' element={<AddToCart></AddToCart>}>
          </Route>
          <Route path='/shippingaddress' element={<ShippingAddress></ShippingAddress>}>
          </Route>
          <Route path='/profile' element={<Profile></Profile>}>
          </Route>
          <Route path='/order' element={<Order></Order>}>
          </Route>

          {/* <-------------- SELLER PANNEL -----------------> */}
          <Route path='/logins' element={<Logins></Logins>}>
          </Route>
          <Route path='/registers' element={<Registers></Registers>}>
          </Route>
          <Route path='/add' element={<AddProduct></AddProduct>}>
          </Route>
          <Route path='/edit' element={<EditProduct></EditProduct>}>
          </Route>
          <Route path='/view' element={<ViewProduct></ViewProduct>}>
          </Route>
          <Route path='/orders' element={<Orders></Orders>}>
          </Route>
          <Route path='/profiles' element={<Profiles></Profiles>}>
          </Route>
          {/* <Route path='/searchproducts' element={<SearchProduct></SearchProduct>}>
          </Route> */}

          {/* <-------------- ADMIN PANNEL -----------------> */}
          <Route path='/LogInss' element={<LogIn></LogIn>}>
          </Route>
          <Route path='/oder' element={<Oder></Oder>}>
          </Route>
          <Route path='/customer' element={<Customer></Customer>}>
          </Route>
          <Route path='/viewallproduct' element={<ViewAllProduct></ViewAllProduct>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
