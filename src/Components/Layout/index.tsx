import Footer from "../Footer/Footer";
import React from 'react';

function Layout(props) {
    return (
        <div id="main">
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout