import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'

const Cart = () => <div className="page"><h1>My Cart</h1></div>
const Orders = () => <div className="page"><h1>My Orders</h1></div>
const Settings = () => <div className="page"><h1>Settings</h1></div>
const Profile = () => <div className="page"><h1>My Profile</h1></div>

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App