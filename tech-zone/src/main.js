import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';
import Cart from './components/Cart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('.root'));

const Main = function () {
    return (
        <>
            <Header />
            <Content />
        </>

    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/cart',
        element: <Cart />
    }
])

root.render(<RouterProvider router={routes} />);