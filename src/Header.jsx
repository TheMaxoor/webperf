import React from 'react';


class Header extends React.Component {
 
    render() {
        return (
            <div className="wp-header">
                <button className="wp-header__menu">Menu</button>
                <img className="wp-header__logo" src="logo-acceleration.svg" alt="logo" />
                <input className="wp-header__search" type="text" placeholder="Rechercher"/>
                <button className="wp-header__twitter">
                    <svg className="icon fill-black" role="img" width="20" height="20" viewBox="0 0 20 20">
                        <title>Twitter</title>
                        <path d="M19.5 4.1c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.2-.8.4-1.6.8-2.5.9-.7-.8-1.7-1.2-2.8-1.2-2.2 0-3.9 1.7-3.9 3.9 0 .3 0 .6.1.9-3.3-.1-6.2-1.7-8.1-4-.3.6-.5 1.2-.5 2 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.1 3.8-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.5 1.5 1.9 2.7 3.6 2.7-1.3 1-3 1.7-4.8 1.7-.3 0-.6 0-.9-.1 1.7 1.1 3.8 1.8 6 1.8 7.2 0 11.1-5.9 11.1-11.1v-.5c.6-.4 1.3-1.1 1.8-1.9"></path>
                    </svg>
                </button>
                <button className="wp-header__facebook">
                    <svg className="icon fill-black" role="img" width="20" height="20" viewBox="0 0 20 20">
                        <title>Facebook</title>
                        <path d="M5.7 7h1.8v-1.8000000000000003c0-.8 0-2 .6-2.8.6-.7 1.5-1.3 2.9-1.3 2.3 0 3.3.3 3.3.3l-.5 2.7s-.8-.2-1.5-.2-1.3.3-1.3 1v2.1h2.9l-.2 2.7h-2.7v9.2h-3.5v-9.2h-1.8v-2.7z"></path>
                    </svg>
                </button>
                <button className="wp-header__abo">Abonnement</button>
            </div>
        );
    }
}

export default Header;
