import React from "react";
function Header(props){
    return(
        <h4>{props.title}</h4>
    )
}
Header.defaultProps={
    title:'TO DO LIST'
}
export default Header;