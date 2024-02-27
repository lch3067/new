import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Menu1 from '../pages/admin/authority/Authority_main';
import Menu2 from '../pages/admin/authorityMenu/AuthrotyMenu_main';
import Menu3 from '../pages/admin/codeControll/CodeControll_main';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "/menu1", element: <Menu1 /> },
            { path: "/menu2", element: <Menu2 /> },
            { path: "/menu3", element: <Menu3 /> },
        ]
    },
]);

function AppRouter() {
    return <RouterProvider router={router}/>
}

export default AppRouter;