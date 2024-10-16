import React, { Component, Suspense } from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx'
import AppRoutes from './AppRoutes.jsx';
import './assets/Fonts/Fonts.css';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter basename='/abig-app/app/home/'>
          <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
