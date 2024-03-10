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

export default Navbar;