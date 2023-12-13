import React, { Component } from 'react'
import Feature from './feature'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'

export default class FeaturePage extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name="Features" />
                <Feature />
            </Layout>
        )
    }
}
