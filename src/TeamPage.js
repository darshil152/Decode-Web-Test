import React, { Component } from 'react'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
import Team from './team'

export default class TeamPage extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name='Instructors' />
                <Team />
            </Layout>
        )
    }
}
