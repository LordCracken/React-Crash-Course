import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router';

import RootLayout from "./routes/RootLayout";
import Posts from './routes/Posts';
import NewPost from "./routes/NewPost";
import './index.css';

const router = createBrowserRouter([
  {path: '/', Component: RootLayout, children: [
      {path: '/', Component: Posts, children: [{path: 'create-post', Component: NewPost}]},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
