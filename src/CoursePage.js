import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
const course1 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-1.jpg?alt=media&token=1bc4a708-1625-4352-a75e-dcdee1748f65&_gl=1*1a3ipx0*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMDIuMC4wLjA.'
const course2 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-2.jpg?alt=media&token=494d4042-cfc5-44ee-b8c8-3c4e62b4d1ab&_gl=1*mdrofa*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMTcuMC4wLjA.'
const course3 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-3.jpg?alt=media&token=b5a42be3-95e8-4a50-81f1-5089e990d1dd&_gl=1*fx6avc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMjkuMC4wLjA.'
const course4 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-4.jpg?alt=media&token=4aba60db-33bd-4d75-b124-ae604bc14ae7&_gl=1*4xixnv*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyNDYuMC4wLjA.'
const course5 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-5.jpg?alt=media&token=7521b6b4-201f-472f-bad4-c808a813c7e6&_gl=1*1x0kv30*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyNjEuMC4wLjA.'
const course6 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-6.jpg?alt=media&token=2721408d-87a4-49b4-83ed-052195d038c6&_gl=1*txab5d*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyNzYuMC4wLjA.'

export default class CoursePage extends Component {
    render() {
        return (
            <Layout >
                <HeaderForPage name='Courses' />
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0 justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center position-relative mb-5">
                                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                                    <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/1'}>
                                    <img className="img-fluid" src={course1} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Master In Web design </h4>

                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/2'}>
                                    <img className="img-fluid" src={course2} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Master In Frontend Development</h4>

                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/3'}>
                                    <img className="img-fluid" src={course3} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Master In Backend Development</h4>

                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/6'}>
                                    <img className="img-fluid" src={course4} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Firebase</h4>

                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/5'}>
                                    <img className="img-fluid" src={course5} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Master in 360 & 3D Website</h4>

                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/4'}>
                                    <img className="img-fluid" src={course6} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Master In Fullstack Development
                                        </h4>

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
