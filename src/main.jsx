import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router';

import App from './App';
import RootLayout from "./routes/RootLayout";
import NewPost from "./components/NewPost";
import './index.css';

const router = createBrowserRouter([
  {path: '/', Component: RootLayout, children: [
      {index: true, Component: App},
      {path: '/create-post', Component: NewPost},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
