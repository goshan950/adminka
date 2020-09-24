import React from 'react';
import NavBarDesktop from './NavBarDesktop/NavBarDesktop';
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import MediaQuery from 'react-responsive'

const NavBarContainer = () => {
    return (
        <MediaQuery minWidth={768}>
            {(matches) => matches
                ? <NavBarDesktop />
                : <NavBarMobile />}
        </MediaQuery>
    )
}

export default NavBarContainer;