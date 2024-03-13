import { useState } from "react";
import { NAVBAR_LOGO_URL } from "../utils/constants";

const loginLogoutBtn = document.querySelector('.login-logout-btn');

const Navbar = function () {
    const [btnText, setBtnText] = useState("Sign In");

    function updateText() {
        if (btnText === "Sign In") {
            setBtnText("Sign Out");
            // WARNING - This classList isn't working - to be understood why
            // loginLogoutBtn.classList.add('logout-btn');
        } else {
            setBtnText("Sign In");
            // loginLogoutBtn.classList.remove('logout-btn');
        }
    }

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
                    <button className="login-logout-btn" onClick={() => updateText()}>{btnText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;