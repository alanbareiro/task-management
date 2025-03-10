import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { LayoutMain } from './components/layouts/LayoutMain';
import { ThemeProvider } from './Context/ThemeContext';
import './index.css';
import { Home } from './pages/Home/Home';
import Login from './pages/Login/Login';

//Creamos el router y lo configuramos
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      { index: true, element: <Home /> },
      // { path: '/checkout', element: <CheckOut /> }
    ]

  },
  {
    path: '/login', element: <Login />
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
