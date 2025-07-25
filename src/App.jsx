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

function App() {
  const queryClient = new QueryClient()

  return (
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
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
