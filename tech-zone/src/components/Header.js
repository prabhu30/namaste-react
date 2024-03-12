import Navbar from './Navbar';

const Header = function () {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-text'>
                <p>Welcome to the FoodZone</p>
                <p>One-Stop Hub to find best restaurants with wide range of cuisines</p>
                <button>Explore Food</button>
            </div>
        </div>
    )
}

export default Header;