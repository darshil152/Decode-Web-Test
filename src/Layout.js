import React, { Component } from 'react'
import Footer from './Footer'
import NavbarComponent from './navbar';
import TopBar from './topBar'
import Navbarforprofile from './navbarforprofile';

export default class Layout extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <TopBar />
                <NavbarComponent />
                {/* <Navbarforprofile /> */}
                {this.props.children}
                <Footer />
            </>
        )
    }
}
