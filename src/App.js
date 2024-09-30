import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Footer/Footer'
import './styles/main.scss'

const App = () => {
  return (
    <div className="wrapper">
      <div className="main">
        <Header />
        <HeroSection />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
