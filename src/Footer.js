import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const whiteLogo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fwhite%20logo.png?alt=media&token=08482253-bb78-4cd4-8c43-2abede93190c&_gl=1*9fwdmm*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTQ2NzAuMC4wLjA.'

export default class Footer extends Component {
    render() {
        return (
            <>

                <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{ marginTop: '90px' }}>
                    <div className="container mt-5 pt-5">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <a href="/" className="navbar-brand">
                                    <img className="m-0 logo" src={whiteLogo} alt="Decode Softtech" />
                                </a>
                                {/* <!-- <p className="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est,
                                        tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero
                                        clita diam</p> --> */}
                            </div>
                            {/* <!-- <div className="col-md-6 mb-5">
                                    <h3 className="text-white mb-4">Newsletter</h3>
                                    <div className="w-100">
                                        <div className="input-group">
                                            <input type="text" className="form-control border-light" style="padding: 30px;"
                                                placeholder="Your Email Address">
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary px-4">Sign Up</button>
                                                </div>
                                        </div>
                                    </div>
                                </div> --> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">Get In Touch</h3>
                                <p> <a className="text-white-50" href="https://goo.gl/maps/tY68pnXuMjLQ1Jc19" target="_blank"><i
                                    className="fa fa-map-marker-alt mr-2"></i>
                                    304, Dhara Arcade, Mahadev Chowk, Mota
                                    Varachha, Surat</a></p>
                                <p>
                                    <a className="text-white-50" href="tel:8347763858"> <i className="fa fa-phone mr-2"></i>+91 834 776
                                        3858</a>
                                </p>
                                <p>
                                    <a className="text-white-50" href="mailto:hr@decodesofttech.com">
                                        <i className="fa fa-envelope mr-2"></i>
                                        hr@decodesofttech.com </a>
                                </p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="text-white mr-4" target='_blank' href="#"><i className="fab fa-2x fa-twitter"></i></a>
                                    <a className="text-white mr-4" target='_blank' href="https://www.facebook.com/Decode-Softtech-108716078502384"><i
                                        className="fab fa-2x fa-facebook-f"></i></a>
                                    <a className="text-white mr-4" target='_blank' href="https://www.linkedin.com/company/81620839/admin/"><i
                                        className="fab fa-2x fa-linkedin-in"></i></a>
                                    <a className="text-white" target='_blank' href="https://www.instagram.com/decodesofttech/"><i
                                        className="fab fa-2x fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">We Provide</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-white-50 mb-2" href="/details/1"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                                    <a className="text-white-50 mb-2" href="/details/2"><i className="fa fa-angle-right mr-2"></i>Frontend
                                        Development</a>
                                    <a className="text-white-50 mb-2" href="/details/3"><i className="fa fa-angle-right mr-2"></i>Backend
                                        Development</a>
                                    <a className="text-white-50 mb-2" href="/details/4"><i className="fa fa-angle-right mr-2"></i>Fullstack
                                        Development</a>
                                    <a className="text-white-50 mb-2" href="/details/6"><i className="fa fa-angle-right mr-2"></i>Firebase</a>
                                    <a className="text-white-50 mb-2" href="/details/5"><i className="fa fa-angle-right mr-2"></i>360 & 3D
                                        Website</a>
                                    <a className="text-white-50 mb-2" href="/details/2"><i className="fa fa-angle-right mr-2"></i>React Js</a>
                                    <a className="text-white-50 " href="/details/3 "><i className="fa fa-angle-right mr-2"></i>Node Js</a>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3 className="text-white mb-4">Quick Links</h3>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link className="text-white-50 mb-2" to={'/'}><i className="fa fa-angle-right mr-2"></i>Home</Link>
                                    {/* <a className="text-white-50 mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a> */}
                                    {/* <a className="text-white-50 mb-2" href="/about">
                                        <i className="fa fa-angle-right mr-2"></i>About Us</a> */}
                                    <Link className="text-white-50 mb-2" to={'/about'}> <i className="fa fa-angle-right mr-2"></i>About Us</Link>
                                    {/* <a className="text-white-50 mb-2" href="/courses">
                                        <i className="fa fa-angle-right mr-2"></i>Courses</a> */}
                                    <Link className="text-white-50 mb-2" to={'/courses'}><i className="fa fa-angle-right mr-2"></i>Courses</Link>
                                    {/* <a className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Terms &
                                        Condition</a> */}
                                    <Link className="text-white-50 mb-2" to={'/terms'}><i className="fa fa-angle-right mr-2"></i>Terms &
                                        Condition</Link>
                                    <Link className="text-white-50 mb-2" to={'/placement-partners'}><i className="fa fa-angle-right mr-2"></i>Placement Partners</Link>
                                    {/* <a className="text-white-50" href="/contact">
                                        <i className="fa fa-angle-right mr-2"></i>Contact Us</a> */}
                                    <Link className="text-white-50 mb-2" to={'/gallery'}><i className="fa fa-angle-right mr-2"></i>Our Activity</Link>
                                    <Link className="text-white-50 mb-2" to={'/career'}><i className="fa fa-angle-right mr-2"></i>Career</Link>
                                    <Link className="text-white-50 mb-2" to={'/contact'}><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-white-50 border-top py-4 border-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                                <p className="m-0">© Copyright 2023. <a className="text-white" href="https://decodesofttech.com">Decode
                                    Softtech</a>. All Rights
                                    Reserved.
                                </p>
                            </div>
                            {/* <!-- <div className="col-md-6 text-center text-md-right">
                                    <p className="m-0">Designed by <a className="text-white" href="https://htmlcodex.com">HTML Codex</a>
                                    </p>
                                </div> --> */}
                        </div>
                    </div>
                </div>
                <a href="#" className="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"><i
                    className="fa fa-angle-double-up"></i></a>
            </>
        )
    }
}
