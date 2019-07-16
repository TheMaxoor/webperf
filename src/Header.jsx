import React from 'react';


class Header extends React.Component {
 
    render() {
        return (
            <div className="wp-header">
                <button>Menu</button>
                <img className="wp-header__logo" src="https://statics.liberation.fr/newsite/images/logo-libe.svg" alt="logo" />
            </div>
        );
    }
}

export default Header;
