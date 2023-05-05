import {createBrowserRouter} from "react-router-dom"
import Home from "../components/layout/Home"
import LandingPage from "../pages/LandingPage"
import BookNow from "../pages/auth/BookNow"



export const MainRoute = createBrowserRouter([
    {
        path : "/",
        element : <Home />,
        children : [
            {
                index : true,
                element : <LandingPage />
            }
        ]
    },
    {
        path : "/book-now",
        element : <BookNow />
    }
])