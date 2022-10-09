import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Componants/Layouts/Main/Main';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Orders from './Pages/Orders/Orders';
import Shop from './Pages/Shop/Shop';
import Header from './Shared/Header/Header';


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
          element: <Shop></Shop>
        },
        {
          path:'/orders',
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
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
