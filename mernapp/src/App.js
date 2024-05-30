import Home from "./screens/Home";
import Login from "./screens/Login"
import './index.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from "./screens/Signup.js";
function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'Login',
      element: <Login />
    },
    {
      path: 'createUser',
      element: <Signup />
    }
  ])
  {
    return (
      <>
        <RouterProvider router={router} />
      </>

    );
  }
}

export default App;
