import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import CategoryNews from "../components/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children: [
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    }
]);
export default router;