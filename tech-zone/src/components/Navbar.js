import { NAVBAR_LOGO_URL } from "../utils/constants";

const Navbar = function () {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img className='logo' src={NAVBAR_LOGO_URL} alt="Website Logo" />
                <p>FoodZone</p>
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

export default Navbar;