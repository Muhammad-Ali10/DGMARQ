import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SoftwarePage from './pages/Software'
import RandomKeys from './pages/RandomKeys'
import BestSellers from './pages/BestSelllers'
import AboutCompany from './pages/AboutCompany'
import Marketplace from './pages/Marketplace'
import Security from "./pages/Security"
import SteamGiftCard from "./pages/SteamGiftCard"
import ContactUs from "./pages/ContactUs"
import Careers from "./pages/Careers"
import Layout from './pages/layout'
import BuyerSupport from './pages/Buyer/BuyerSupport'
import HowToBuy from './pages/HowToBuy'
import SellerSupport from './pages/Seller/SellerSupport'
import HowToSell from './pages/HowToSell'
import Partnerships from "./pages/Partnerships"
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import StaySafe from './pages/StaySafe'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Checkout from './pages/Checkout'
import Dashboard from './pages/Buyer/Dashboard/index'
import Keys from './pages/Buyer/Keys/index'
import OrderHistory from './pages/Buyer/OrderHistory/index'
import Settings from './pages/Buyer/Settings/index'
import Register from "./pages/auth/Register/index"
import Login from "./pages/auth/Login/index"
import ForgotPassword from "./pages/auth/ForgetPassword/index"
import NewPassword from "./pages/auth/ForgetPassword/NewPassword"
import Category from './pages/Category/index'
import SubCategory from './pages/SubCategory/index'
import SubSubCategory from './pages/SubSubCategory/index'
import Wishlist from './pages/WishList'
import { ToastContainer } from "react-toastify";


function App() {
  const queryClient = new QueryClient()

  return (
   <>
      <ToastContainer/>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="software" element={<SoftwarePage />} />
          <Route path="random-keys" element={<RandomKeys />} />
          <Route path="best-sellers" element={<BestSellers />} />
          <Route path="steam-gift" element={<SteamGiftCard />} />
          <Route path="about-company" element={<AboutCompany />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="security" element={<Security />} />
          <Route path="steamgift" element={<SteamGiftCard />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="buyer-support" element={<BuyerSupport />} />
          <Route path="how-to-buy" element={<HowToBuy />} />
          <Route path='seller-support' element={<SellerSupport />} />
          <Route path='how-to-sell' element={<HowToSell />} />
          <Route path='partnerships' element={<Partnerships />} />
          <Route path='terms-conditions' element={<TermsConditions />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='stay-safe' element={<StaySafe />} />
          <Route path='cart' element={<Cart />} />
          
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/sub-category/:id" element={<SubCategory />} />
          <Route path="/sub-sub-category/:id" element={<SubSubCategory />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/keys" element={<Keys />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </QueryClientProvider>
   </>
  )
}

export default App
