// import React, { useState } from "react";
 

function Header({ onDarkModeClick, colorState }) {
    console.log(onDarkModeClick);
    console.log(colorState);
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {colorState ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    )
}

export default Header