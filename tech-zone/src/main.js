import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Shimmer from './components/Shimmer';

// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));

const root = ReactDOM.createRoot(document.querySelector('.root'));

const Main = function () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>

    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Content />
            },
            {
                path: '/grocery',
                element:
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: 'restaurant/:id',
                element: <RestaurantMenu />
            }
        ]
    }
])

root.render(<RouterProvider router={routes} />);