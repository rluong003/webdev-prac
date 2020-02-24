import React from "react";

function Footer(){
    let date = new Date();

    return(
        <footer>
        <p className="footer p"> Copyright {date.getFullYear()} </p>
        </footer>
        
    );
}


export default Footer;