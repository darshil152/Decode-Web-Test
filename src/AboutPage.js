import React, { Component } from 'react'
import About from './about'
import Feature from './feature'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
import Navbar from './navbar'
import TopBar from './topBar'

export default class AboutPage extends Component {

    render() {
        return (
            <Layout>
                <HeaderForPage name='About' />
                <About />
                <Feature />
            </Layout>
        )
    }
}
