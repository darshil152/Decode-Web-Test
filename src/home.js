import React, { Component } from 'react'

import TopBar from './topBar';
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Feature from './feature';
import Courses from './courses';
import Team from './team';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './Footer';
import Layout from './Layout';
import Login from './Login';
export default class Home extends Component {


    render() {
        return (
            <Layout>

                {/* <!-- Header Start --> */}
                <Header />
                {/* <!-- Header End --> */}


                {/* <!-- About Start --> */}
                <About />
                {/* <!-- About End --> */}


                {/* <!-- Feature Start --> */}
                <Feature />
                {/* <!-- Feature Start --> */}


                {/* <!-- Courses Start --> */}
                <Courses />
                {/* <!-- Courses End --> */}


                {/* <!-- Team Start --> */}
                <Team />
                {/* <!-- Team End --> */}


                {/* <!-- Testimonial Start --> */}
                <Testimonial />
                {/* <!-- Testimonial Start --> */}


                {/* <!-- Contact Start --> */}
                <Contact />
                {/* <!-- Contact End --> */}



            </Layout >
        )
    }
}
