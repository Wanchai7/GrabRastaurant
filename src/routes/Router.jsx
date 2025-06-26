import { createBrowserRouter } from "react-router";

import AddRestaurant from '../page/AddRestaurant'
import Home from '../page/Home'
import Update from '../page/Update'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/update/:id",
        element: <Update />
    },
    {
        path: "/add",
        element: <AddRestaurant />
    }
])

export default router   