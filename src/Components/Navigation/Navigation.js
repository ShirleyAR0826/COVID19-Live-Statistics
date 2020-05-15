import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Logo />
            <p onClick='#' className='f3 link dim black underline pa3 pointer'>News</p>
            <p onClick='#' className='f3 link dim black underline pa3 pointer'>Graphs</p>
        </nav>
    );
}

export default Navigation;