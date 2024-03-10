import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Content from './components/Content';

const root = ReactDOM.createRoot(document.querySelector('.root'));

const Main = function () {
    return (
        <>
            <Header />
            <Content />
        </>

    )
}

root.render(<Main />);