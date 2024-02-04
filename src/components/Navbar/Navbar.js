
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useState } from 'react';
 
 
function Header() {
 
    const [isNavbarOpen, setNavbarOpen] = useState(false)
 
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    }
    return (
        <div className='nav-container'>
            <div className='nav-container-inner-div'>
                <div className='image-logo-div'>
                    <img src="" alt='wu-logo' className='image-header' />
                </div>
                <div className="vl"></div>
                <div className='dollar-genenral-div'>
                    <img src="" alt='dollar-general logo' className='dollar-general-header' />
                </div>
 
            </div>
            <div className='nav-content-div'>
                <p className='home-text-para'>Home</p>
                <p className='find-locations-para'>Find locations</p>
            </div>
            <div className='wu-small-logo-div'>
                <img src="" alt='logo' className='wu-small-logo' />
            </div>
            <div className='menu-item-div' onClick={toggleNavbar}>
                <MenuIcon className='menu-icon-header' />
                <div className={`${isNavbarOpen ? 'navlink-open' : 'navbar-close'}`} >
                    <p>Home</p>
                    <p>Find locations</p>
                </div>
            </div>
 
        </div>
    );
 
}
export default Header;