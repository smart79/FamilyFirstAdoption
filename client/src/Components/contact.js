import React, { Component } from 'react';
import Footer from './toolbar/footer';
import NavMenu from './toolbar/navMenu';

class Contact extends Component {
    render() {
        return (
            <div className="Footer">
                <NavMenu />
                <Footer />
            </div>

        )
    }
}

export default Contact;