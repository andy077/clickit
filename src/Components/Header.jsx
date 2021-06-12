import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Header = () => {

    const menuToggle = () => {
        const toggle = document.getElementById('menu_icon_id');

        (toggle.style.width == '100%') ? (toggle.style.width = '0%') : (toggle.style.width = '100%');
    }

    return (
        <div className="header">
            <div className="logo_div">
                <a href="#"><h2>clickIt</h2></a>
            </div>
            <div className="menu_div" id='menu_icon_id'>
                <ul>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Upload</a></li>
                    <li><a href="#">Premium</a></li>
                    <li><a href="#">Help?</a></li>
                </ul>
            </div>
            <div className='menu_icon'>
                <MenuRoundedIcon onClick={menuToggle} />
            </div>
        </div>
    )
}

export default Header;
