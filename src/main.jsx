import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, redirect, RouterProvider} from 'react-router';

import RootLayout from "./routes/RootLayout";
import Posts from './routes/Posts';
import NewPost from "./routes/NewPost";
import PostDetails from "./routes/PostDetails";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/', Component: RootLayout, children: [
      {
        path: '/',
        Component: Posts,
        loader: async () => {
          const response = await fetch('http://localhost:8080/posts');
          const resData = await response.json();
          return resData.posts;
        },
        action: async ({request}) => {
          const formData = await request.formData();
          const postData = Object.entries(formData);
          await fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
              "Content-Type": "application/json",
            }
          });

          return redirect('/');
        },
        children: [
          {
            path: '/create-post',
            Component: NewPost,
            action: async ({request}) => {
              const formData = await request.formData();
              const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
              await fetch('http://localhost:8080/posts', {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              return redirect('/');
            }
          },
          {
            path: '/:postId',
            Component: PostDetails,
            loader: async ({params}) => {
              const response = await fetch('http://localhost:8080/posts/' + params.postId);
              const resData = await response.json();
              return resData.post;
            }
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
