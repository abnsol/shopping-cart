// import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import App from "./App"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Favorites from "./pages/Favorites"
import Account from "./pages/Account"
import Login from "./pages/Login"       
import ProtectedRoute from "./components/ProtectedRoute"        

const routes = [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: '/cart',
                            element: <Cart />,
                        },
                        {
                            path: '/favorites',
                            element: <Favorites />,
                        }
                    ]
                },
                {
                    path: '/account',
                    element: <Account />,
                },
                {
                    path: '/shop',
                    element: <Shop />,
                },
                {
                    path: '/login',
                    element: <Login />,
                }
            ]
        },
        
    ];

export default routes