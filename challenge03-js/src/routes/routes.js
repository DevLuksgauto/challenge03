import LogInPage from '../components/LogInPage';
// import SearchPage from '../components/SearchPage';
import ProductsPage from '../components/ProductsPage';
import FirstPage from '../components/FirstPage.jsx';

const routes = [
  {
    path: '/',
    element: LogInPage,
    exact: true,
  },
  {
    path: '/home',
    element: FirstPage,
    exact: false,
  },
  {
    path: '/products',
    element: ProductsPage,
    exact: false,
  },
];

export default routes;
