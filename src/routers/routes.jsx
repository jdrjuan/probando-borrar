import { useRoutes } from "react-router-dom";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const Routes = () => {

    const routes = useRoutes(
        [
            { path: '/', element: <Products /> },
            { path: '/contact', element: <Contact /> },
            { path: '*', element: <NotFound /> },
        ]
    );
    return routes;
};

export default Routes;
