import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
const Heaven = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fheaven.jpeg?alt=media&token=e7daf1ce-93ad-4083-af57-fed82185618c&_gl=1*10wa2lo*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc2NDMuMC4wLjA.'
const Vandan = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fvandan.jpeg?alt=media&token=5efdfc5a-3d1e-4f38-b75d-8d98ac6a7ceb&_gl=1*eh2q3r*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc2NjMuMC4wLjA.'
const Dhara = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fdhara.jpeg?alt=media&token=f56d1f67-4887-4301-80ac-c0fb84d8d8e1&_gl=1*8ttbsw*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc2MTkuMC4wLjA.'
const Darshil = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fdarshil.jpeg?alt=media&token=491c4cfd-4ae0-470d-96d4-c434229bfaa7&_gl=1*il6ty5*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc1NzguMC4wLjA.'
export default class Team extends Component {
    state = {
        teamCarousel: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    }
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="section-title text-center position-relative mb-5">
                        <h6 className="d-inline-block position-relative text-secondary secondary-text text-uppercase pb-2">Instructors</h6>
                        <h1 className="display-4">Meet Our Instructors</h1>
                    </div>
                    <OwlCarousel className='owl-carousel team-carousel position-relative' responsive={this.state.teamCarousel} smartSpeed={600} margin={30} items={3} loop={true} autoplay={true} nav={true}>
                        <div className="team-item">
                            <img className="img-fluid w-100" src={Heaven} alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Heaven Kapopara</h5>
                                <p className="mb-2">Fullstack Developer</p>
                                <div className="d-flex justify-content-center">
                                    <a className="mx-1 p-1" href="https://twitter.com/Heaven_0715"><i
                                        className="fab fa-twitter"></i></a>
                                    <a className="mx-1 p-1" href="https://www.facebook.com/hevan.kapopara.3/"><i
                                        className="fab fa-facebook-f"></i></a>
                                    <a className="mx-1 p-1" href="https://www.linkedin.com/in/heaven-kapopara-41a517189/"><i
                                        className="fab fa-linkedin-in"></i></a>
                                    <a className="mx-1 p-1" href="https://www.instagram.com/decodesofttech/"><i
                                        className="fab fa-instagram"></i></a>

                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src={Vandan} alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Vandan</h5>
                                <p className="mb-2">Flutter Developer</p>
                                <div className="d-flex justify-content-center">
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="mx-1 p-1" href="https://www.instagram.com/decodesofttech/"><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src={Dhara} alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Dhara</h5>
                                <p className="mb-2">Web Designer</p>
                                <div className="d-flex justify-content-center">
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="mx-1 p-1" href="https://www.instagram.com/decodesofttech/"><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <img className="img-fluid w-100" src={Darshil} alt="" />
                            <div className="bg-light text-center p-4">
                                <h5 className="mb-3">Darshil Lunagariya</h5>
                                <p className="mb-2">Frontend Developer</p>
                                <div className="d-flex justify-content-center">
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="mx-1 p-1" href="https://www.instagram.com/decodesofttech/"><i
                                        className="fab fa-instagram"></i></a>
                                    <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>


                </div>
            </div>
        )
    }
}
