import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({onRouteChange, route}) => {
    if (route === 'home'){
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
            <Logo />
            <p onClick={() =>onRouteChange('news')} className='f3 link dim black underline pa3 pointer'>News</p>
            <p onClick={() =>onRouteChange('graphs')} className='f3 link dim black underline pa3 pointer'>Graphs</p>
        </nav>
    );
    } else if (route === 'graphs'){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                <Logo />
                <p onClick={() =>onRouteChange('news')} className='f3 link dim black underline pa3 pointer'>News</p>
                <p onClick={() =>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
            </nav>
        )
    } else if (route === 'news'){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
                <Logo />
                <p onClick={() =>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
                <p onClick={() =>onRouteChange('graphs')} className='f3 link dim black underline pa3 pointer'>Graphs</p>
            </nav>
        )
    }
}

export default Navigation;