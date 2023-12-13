import React, { Component } from 'react'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
import Testimonial from './Testimonial'

export default class TestimonialPage extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name='Testimonial' />
                <Testimonial />
            </Layout>
        )
    }
}
