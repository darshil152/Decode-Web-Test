import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';

const jeel = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fjeel.png?alt=media&token=1b1a29d4-a103-4d22-9cb5-34150a87f0e6&_gl=1*c9rbfm*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc3NTEuMC4wLjA.'
const lathiyo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Flathiyo.png?alt=media&token=7b1d7ef8-1d54-4193-9678-8c4e6d5f920b&_gl=1*166u86y*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc3OTguMC4wLjA.'
const bantu = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fhiren.jfif?alt=media&token=e5ceda5f-3d39-4491-a828-fbe5074d4f0b&_gl=1*s3e914*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc4MTUuMC4wLjA.'
const dharmil = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fdharmil.jfif?alt=media&token=ddfa13a4-0850-420a-8152-18248e789c3d&_gl=1*1sdgddg*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc2OTQuMC4wLjA.'
export default class Testimonial extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Testimonial</h6>
                                <h1 className="display-4">What Say Our Students</h1>
                            </div>
                            {/* <!-- <p className="m-0">Dolor est dolores et nonumy sit labore dolores est sed rebum amet, justo duo ipsum
                                        sanctus dolore magna rebum sit et. Diam lorem ea sea at. Nonumy et at at sed justo est nonumy
                                        tempor. Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed stet eos ipsum diam</p> --> */}
                        </div>
                        <div className="col-lg-7 p-0">

                            <OwlCarousel className='owl-carousel testimonial-carousel' items={1} loop={true} smartSpeed={600} autoplay={true} dots={false} nav={true}>
                                <div className="bg-light p-sm-5 p-3 test-height">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p>Decode Softtech provides great opportunities for someone who is just starting out with
                                        Coding or even has few years of
                                        experience.. Heaven sir's teaching methods are easy to understand and inclined towards
                                        more practical approach which
                                        helped me to land my first job!!!</p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-thumbnail w-25 mr-4" src={jeel} alt="" />
                                        <div>
                                            <h5>Jeel Thumar</h5>
                                            <span>Full-stack Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-sm-5 p-3 test-height">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p>I found hevan sir's teaching techniques outstanding and very unique. I've always hated
                                        learning computer languages as I
                                        find it very difficult to understand; He is the one who made me fall in love with
                                        programming. Thank you sir!</p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-thumbnail w-25 mr-4" src={bantu} alt="" />
                                        <div>
                                            <h5>Hiren Khichadiya</h5>
                                            <span>Backend Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-sm-5 p-3 test-height">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p>I would recommend to each and every beginner to start your journey from here. Great place
                                        to learn new technologies and
                                        to build our career.</p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-thumbnail w-25 mr-4" src={dharmil} alt="" />
                                        <div>
                                            <h5>Dharmil Vekariya</h5>
                                            <span>Frontend Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-light p-sm-5 p-3 test-height">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <p>I just wanted let you know that the service provided, from registration to training was a
                                        very positive experience for
                                        me. I intend on taking more classes in the future and referring any new hires as well as
                                        friends/family members to take
                                        courses at Decode Softtech.</p>
                                    <div className="d-flex flex-shrink-0 align-items-center mt-4">
                                        <img className="img-thumbnail w-25 mr-4" src={lathiyo} alt="" />
                                        <div>
                                            <h5>Jaydeep Lathiya</h5>
                                            <span>Full-stack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
