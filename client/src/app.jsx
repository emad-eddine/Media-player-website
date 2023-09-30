import { Router, RouterProvider, createBrowserRouter } from "react-router-dom"
import HomeLayout from "./pages/HomeLayout"
import LandingPage from "./pages/LandingPage"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import { loader as homeLoader } from "./pages/HomePage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<LandingPage />
            },
            {
                path:"/register",
                element:<RegisterPage />
            },
            {
                path:"/login",
                element:<LoginPage />
            },{
                path:"/home",
                element:<HomePage />,
                loader:homeLoader
            }
        ]
    }
])



function App() {
  return (
    <RouterProvider router = {router} />
  )
}
export default App