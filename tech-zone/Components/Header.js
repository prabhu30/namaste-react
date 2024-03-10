import Navbar from './Navbar';

const Header = function () {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-text'>
                <p>Welcome to the one-stop solution to find best laptops of all price ranges</p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Header;