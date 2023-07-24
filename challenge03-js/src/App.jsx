import WebFont from 'webfontloader';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FirstPage from './components/FirstPage.jsx';
import LogInPage from './components/LogInPage.jsx';
import SearchPage from './components/SearchPage';
import ProductsPage from './components/ProductsPage';
import ItemPage from './components/ItemPage';
import NotFound from './components/NotFound';
import ShoppingCartPage from './components/ShoppingCartPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  WebFont.load({
    google: {
      families: ['DM Sans: 400,500,700', 'Montserrat']
    }
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/home"
          element={
            <ProtectedRoute>
              <FirstPage />
            </ProtectedRoute>
          } />
        <Route path="/search"
          element={
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
          } />
        <Route path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          } />
        <Route path="/products/:id"
          element={
            <ProtectedRoute>
              <ItemPage />
            </ProtectedRoute>
              } />
        <Route path="/shoppingcart"
          element={
            <ProtectedRoute>
              <ShoppingCartPage />
            </ProtectedRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
  )
};

export default App;