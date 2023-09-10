// Header.js
import React from 'react';
const Header = () => {

    return (
        <header id="draggable-area" className='w-full h-8 bg-sumi-900 ' style={{ WebkitAppRegion: 'drag' } as any}>
            &nbsp;{/* <header className='w-full h-8 bg-sumi-900'></header> */}
        </header>
    );
}

export default Header;
