import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Layout from './page/Layout';
import { productData } from './Api/api';
import ErrorPage from './component/Error/ErrorPage';
import Cart from './page/Cart';
import Signin from './page/Signin';
import Registration from './page/Registration';
import Checkout from './page/Checkout';
import Details from './page/Details';
import Order from './page/Order';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: productData,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/cart/checkout',
          element: <Checkout />,
        },
        {
          path: '/details/:id',
          element: <Details />,
        },
        {
          path: '/orderdetails',
          element: <Order />,
        },
      ],
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/registration',
      element: <Registration />,
    },
  ]);
  return (
    <div className="font-bodyFont ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
