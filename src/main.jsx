import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { AuthContext } from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='mx-auto max-w-7xl '>
    <React.StrictMode>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </React.StrictMode>,
  </div>
)
