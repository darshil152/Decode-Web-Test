
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
const rtd = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Frtd-logo.png?alt=media&token=6fd4154d-652a-498f-bd8e-255036938764&_gl=1*1kceqag*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU1NzAuMC4wLjA.'
const advance = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fadvance.png?alt=media&token=7c7cb4a8-8640-4ab8-b0da-20dd832bbac7&_gl=1*1wfs5gh*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUyMzUuMC4wLjA.'
const vpn = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fvpn1.png?alt=media&token=69cb8d91-6986-4d3c-b05b-b273a5ce1cd1&_gl=1*nyhab5*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUzNTkuMC4wLjA.'
const bvm = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fbvm-infotech.png?alt=media&token=de5a8ac6-6fca-4bf4-bb7f-17d0afbd8678&_gl=1*g1vblx*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUyNTguMC4wLjA.'
const cscode = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcscodetech.png?alt=media&token=4c0092d3-84f4-49b0-a654-71871433d443&_gl=1*fuwyhk*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUyODIuMC4wLjA.'
const forefront = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fforefront-infotech.png?alt=media&token=cebbaaa8-f71e-4d9c-8edc-fcdc1a1d5a32&_gl=1*9ujx9g*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUzMDkuMC4wLjA.'
const infratech = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2FGrow-Solutions.png?alt=media&token=c582d118-772d-4dc0-a263-515d6930370a&_gl=1*bgpr1z*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUwNDcuMC4wLjA.'
const kd = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2FKD.jpg?alt=media&token=65aab24e-fdc0-479a-87e9-d2a15e9510f7&_gl=1*2jliyh*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUxNDkuMC4wLjA.'
const maruti = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2FMaruti-Business-Plus.png?alt=media&token=5ac775eb-fb50-4e20-8af0-46c925902ee7&_gl=1*189ajcv*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUxNjMuMC4wLjA.'
const ocean = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Focean-technoweb.png?alt=media&token=6327fd4e-3da2-41bb-b2e7-db62e516b707&_gl=1*84aj8s*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU1NDAuMC4wLjA.'
const rcube = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Frcube.png?alt=media&token=d6bec9ee-d1c9-476a-a15d-1da8e94b254f&_gl=1*33v9og*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU0ODYuMC4wLjA.'
const secure = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fsecure1.png?alt=media&token=608f7da5-1207-45ce-bf35-6a9520e26465&_gl=1*1ifh42f*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU1MTAuMC4wLjA.'
const shaktiweb = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2FShakti-websolutions.png?alt=media&token=9f141db6-cd5e-4f41-9025-3ab465c7b415&_gl=1*1sqv9hg*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUyMDcuMC4wLjA.'
const sokf = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fsokf.png?alt=media&token=e546681f-7e66-423c-a0e0-a7ea49c2c858&_gl=1*19rhzg3*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU0NDAuMC4wLjA.'
const vasundhara = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fvasundhara-infotech1.png?alt=media&token=7aa181b4-564e-45f3-9ccb-4386ace9a88b&_gl=1*8270xt*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUzODguMC4wLjA.'
const webvolty = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fwebvolty.png?alt=media&token=e5d71fdb-e348-45ad-9c64-f62f92996dfc&_gl=1*1w0ygy8*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUzMzkuMC4wLjA.'
const tripix = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Ftripix-infotech.png?alt=media&token=526f3ac5-1cb9-4799-95c1-2e44ffb5ac0f&_gl=1*16tga8f*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTU0MTAuMC4wLjA.'

const grow = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2FGrow-Solutions.png?alt=media&token=c582d118-772d-4dc0-a263-515d6930370a&_gl=1*bgpr1z*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTUwNDcuMC4wLjA.'

export default class PlacementPartners extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name='Placement Partners' />

                <div className="container-fluid px-0 py-5">
                    <div className="row mx-0 justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="section-title text-center position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Placement Partners</h6>
                                {/* <h1 className="display-4">Checkout New Releases Of Our Courses</h1> */}

                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={rtd} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={advance} alt="advance" />
                                    </div>
                                </Link>

                            </div> <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={vpn} alt="rentech" />
                                    </div>
                                </Link>

                            </div> <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={bvm} alt="rentech" />
                                    </div>
                                </Link>

                            </div> <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={cscode} alt="rentech" />
                                    </div>
                                </Link>

                            </div> <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={grow} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={forefront} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={infratech} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={kd} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={maruti} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={ocean} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={rcube} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={secure} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={shaktiweb} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={sokf} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={vasundhara} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={webvolty} alt="rentech" />
                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link className="courses-list-item position-relative d-block overflow-hidden mb-2 placementlogo" to={'/details/1'}>

                                    <div className="courses-text">
                                        <img className="img-fluid m-auto" src={tripix} alt="rentech" />
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
