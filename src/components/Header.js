import React from "react";

function Header ({onDarkModeClick, isDarkMode}){
    return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;

//I brought most of the items that belonged in the header component here from and 
//make sure everything aligns with the hierarchy of components
