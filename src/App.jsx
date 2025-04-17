// import { RouterProvider } from "react-router-dom"
// import Router from "./routes"
import DropDown from "./components/DropDown"
import NavBar from "./components/NavBar"
// import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { CategoryProvider } from "./components/CategoryProvider"
import { useState } from "react"
import { SelectedProductContext } from "./components/SelectedProductContext"
import  SelectedProductProvider from "./components/SelectedProductProvider"
import FavCarProvider  from "./components/FavCarProvider"
import Footer from "./components/Footer"
import AuthProvider from "./components/auth/AuthProvider"
// import Home from "./pages/Home"

const App = () => {
    const [selectedCategory,setSelectedCategory] = useState(0)
    const [favorites,setFavorites] = useState([])
    const [cart,setCart] = useState([])

    return (
        <AuthProvider>
            <CategoryProvider>
                <SelectedProductProvider val={selectedCategory}>
                    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 to-white">
                        <FavCarProvider values={{"fav": [favorites, setFavorites], "cart": [cart, setCart]}}>
                            <NavBar setSelectedCategory={setSelectedCategory}/>
                            <Outlet />
                        </FavCarProvider>
                    </div>
                    <Footer />
                </SelectedProductProvider>
            </CategoryProvider>
        </AuthProvider>
    )
}

export default App