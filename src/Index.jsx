import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from '@/theme/global';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '@/App.jsx';
import Home from '@/pages/Home/Index';
import About from '@/pages/About/Index';
import Projects from '@/pages/Projects/Index';
import Contact from '@/pages/Contact/Index';
import '@/i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Projects", element: <Projects /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
