import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Componants/Layouts/Main/Main';
import { ProductAndCartLoader } from './Loaders/ProductAndCartLoader';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Orders from './Pages/Orders/Orders';
import Shop from './Pages/Shop/Shop';




function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/shop',
          loader: ProductAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader: ProductAndCartLoader,
          element: <Orders></Orders>
        },
       
      ]
    },
    {
      path: '*',
      element:<NotFound></NotFound>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
