import WebFont from 'webfontloader';
import './App.css';

import routes from './routes/routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FirstPage from './components/FirstPage.jsx';
import LogInPage from './components/LogInPage.jsx';
import SearchPage from './components/SearchPage';
import ProductsPage from './components/ProductsPage';
import ItemPage from './components/ItemPage';
import NotFound from './components/NotFound';

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
          <Route  path='/teste' element={<ItemPage />}/>
          <Route  path='*' element={<NotFound />}/>
      </Routes>
    </Router>
    // <Router>
    //   <Routes>
    //     {routes.map((route) => {
    //       <Route
    //         key={route.path}
    //         exact={route.exact}
    //         path={route.path}
    //         element={route.element}
    //       />
    //     })}
    //   </Routes>
    // </Router>
  )
};

export default App;
