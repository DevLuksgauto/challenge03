import React from 'react';
import WebFont from 'webfontloader';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FirstPage from './components/FirstPage';
import LogInPage from './components/LogInPage';
import SearchPage from './components/SearchPage';
import ProductsPage from './components/ProductsPage';
import ItemPage from './components/ItemPage';
import NotFound from './components/NotFound';
import ShoppingCartPage from './components/ShoppingCartPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['DM Sans: 400,500,700', 'Montserrat']
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home" element={<FirstPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ItemPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
