import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import EmailVerifyScreen from './screens/EmailVerifyScreen'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart'>
                <Route path=':id' element={<CartScreen />} />
                <Route path='' element={<CartScreen />} />
              </Route>
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />

              <Route path='/order/:id' element={<OrderScreen />} />

              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />

              <Route path='/admin/userlist' element={<UserListScreen />} />
              <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
              <Route
                path='/admin/productlist'
                element={<ProductListScreen />}
                exact
              />
              <Route
                path='/admin/productlist/:pageNumber'
                element={<ProductListScreen />}
                exact
              />
              <Route
                path='/admin/product/:id/edit'
                element={<ProductEditScreen />}
              />
              <Route path='/admin/orderlist' element={<OrderListScreen />} />
              <Route path='/search/:keyword' element={<HomeScreen />} exact />
              <Route path='/page/:pageNumber' element={<HomeScreen />} exact />
              <Route
                path='/search/:keyword/page/:pageNumber'
                element={<HomeScreen />}
                exact
              />
              <Route
                path='/activate/:id/:token'
                element={<EmailVerifyScreen />}
              />
            </Routes>
            <ToastContainer
              position='top-center'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='light'
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

// const App = () => {
//   return (
//     <>
//       <Header />
//       <main className='py-3'>
//         <Container>
//           <h1>Welcome to Pineapple Store</h1>
//           <HomeScreen />
//         </Container>
//       </main>
//       <Footer />
//     </>
//   )
// }

export default App
