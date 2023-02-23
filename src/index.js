import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './Components/Game/Container/index';
import Menu from './Components/Menu/Container/index';
import App from './App';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '/game',
        element: <Game />,
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);


