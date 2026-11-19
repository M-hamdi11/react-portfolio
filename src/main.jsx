import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, children:[
      {
        index:true,
        element:<Hero/>
      },
      {
        path:'/Projects',
        element:<Projects/>
      },
      {
        path:'/Skills',
        element:<Skills/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      }

    ] },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
