import React, { Component } from 'react'
const featureimg = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Ffeature.jpg?alt=media&token=f51ef1d8-82d3-4cce-9a96-265dc2a0fa86&_gl=1*qbck0v*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc5MTcuMC4wLjA.'
export default class Feature extends Component {
    render() {
        return (
            <div className="container-fluid bg-image margin-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 my-5 pt-5 pb-lg-5">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Why Choose Us?
                                </h6>
                                <h1 className="display-4 my-5">Why You Should Start Learning with Us?</h1>
                            </div>
                            {/* <!-- <p className="mb-4 pb-2">Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores
                                        amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita
                                        est. Diam sanctus gubergren sit rebum clita amet.</p> --> */}
                            <div className="d-flex mb-3">
                                <div className="btn-icon bg-primary mr-4">
                                    <i className="fa fa-2x fa-graduation-cap text-white"></i>
                                </div>
                                <div className="mt-auto mb-auto">
                                    <h4>Skilled Instructors</h4>

                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="btn-icon bg-secondary mr-4">
                                    <i className="fa fa-2x fa-certificate text-white"></i>
                                </div>
                                <div className="mt-auto mb-auto">
                                    <h4>Personal Training</h4>

                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="btn-icon bg-warning mr-4">
                                    <i className="fa fa-2x fa-book-reader text-white"></i>
                                </div>
                                <div className="mt-auto mb-auto">
                                    <h4>100% Job Placements</h4>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 min-h-500" >
                            <div data-aos="flip-up" data-aos-duration="1500" className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 img-cover " src={featureimg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
