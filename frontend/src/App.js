import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Marketplace from './pages/Marketplace';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PaymentOptions from './pages/PaymentOptions';
import MyProducts from './pages/MyProducts';
import MyOrders from './pages/MyOrders';
import MySales from './pages/MySales';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import './App.css'; // Keep for general styles or remove if fully MUI

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue for primary actions
    },
    secondary: {
      main: '#f48fb1', // Pink for secondary actions
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d', // Slightly lighter dark for cards/surfaces
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', // Blue gradient for AppBar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.08)', // Glassmorphism effect
          backdropFilter: 'blur(10px)',
          borderRadius: 15,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Resets CSS and applies theme background */}
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment-options" element={<PaymentOptions />} />
              <Route path="/my-products" element={<MyProducts />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-sales" element={<MySales />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
