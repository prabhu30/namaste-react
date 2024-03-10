import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Content from './Components/Content';

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