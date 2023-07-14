import { Fragment } from 'react';
import WebFont from 'webfontloader';
import './App.css';

import FirstPage from './components/FirstPage.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LogInPage from './components/LogInPage.jsx';
import SearchPage from './components/SearchPage';
import ProductsPage from './components/ProductsPage'
import CarouselFeaturedProducts from './components/subComponents/CarouselFeaturedProducts'

function App() {
  WebFont.load({
    google: {
      families: ['DM Sans: 400,500,700', 'Montserrat']
    }
  });
  return (
    <Router>
      <Routes>
          <Route  path='/' element={<LogInPage />}/>
          <Route  path='/home' element={<FirstPage />}/>
          <Route  path='/search' element={<SearchPage />}/>
          <Route  path='/products' element={<ProductsPage />}/>
          <Route  path='/teste' element={<CarouselFeaturedProducts />}/>
      </Routes>
    </Router>
  )
};

export default App;
