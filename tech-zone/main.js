import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('.root'));

const Navbar = function () {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img className='logo' src="https://cdn.dribbble.com/users/9853924/screenshots/19234500/media/2de3ef20f56373dc1baef595866aff42.jpg?resize=1200x900&vertical=center" alt="Image of various tech gadgets on a table" />
                <p>TechZone</p>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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

const Search = function () {
    return (
        <div className='search'>
            <input type="text" placeholder='Search Catalog' className='search-input' />
            <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

const LaptopCard = function (props) {
    const { name, price, specs, productImage, productLink } = props;

    return (
        <div className='laptop-card'>
            <img src={productImage} alt="Image of Laptop" className='laptop-image' />
            <div className='laptop-name-price'>
                <p className='laptop-name'>{name}</p>
                <p className='laptop-price'>{price}</p>
            </div>
            <p className='laptop-specs'><b>Specs :-</b> {specs}</p>
            <a href={productLink} target='_blank' className='laptop-buy-button'>View and Buy</a>
        </div>
    )
}

const LaptopsContainer = function () {
    return (
        <div className='laptops-container'>
            <LaptopCard name="HP Laptop 15s" price="₹ 96,248" specs="i5, 12th Gen, 16 GB RAM, 512 GB SSD" productImage="https://m.media-amazon.com/images/I/71t3PXu3lNL._AC_UY327_FMwebp_QL65_.jpg" productLink="https://amzn.eu/d/j0iAPrj" />

            <LaptopCard name="Lenovo Ideapad 3" price="₹ 33,990" specs="i3, 11th Gen, 8 GB RAM, 512 GB SSD" productImage="https://m.media-amazon.com/images/I/61jyqpkeJQL._SX679_.jpg" productLink="https://amzn.eu/d/0vGBh6M" />

            <LaptopCard name="MacBook Air M1" price="₹ 74,990" specs="i5, 12th Gen, 8 GB RAM, 256 GB SSD" productImage="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg" productLink="https://amzn.eu/d/jl7maoK" />
        </div>
    )
}

const Content = function () {
    return (
        <>
            <Search />
            <LaptopsContainer />
        </>
    )
}

// Main Component
const Main = function () {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}

root.render(<Main />);