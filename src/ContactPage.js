import React, { Component } from 'react'
import Contact from './Contact'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'

export default class ContactPage extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name='Contact Us' />
                <Contact />
            </Layout>
        )
    }
}
