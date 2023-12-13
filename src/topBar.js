import React, { Component } from 'react'

export default class TopBar extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center text-white">
                            <a href='tel:8347763858'>
                                <small className='text-white'><i className="fa fa-phone mr-2"></i>+91 834 776 3858</small>
                            </a>
                            {/* <!-- <small className="px-3">|</small>
                                    <small><i className="fa fa-envelope mr-2"></i>hr@decodesofttech.com</small> --> */}
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-white px-2" target='_blank' href="https://www.facebook.com/Decode-Softtech-108716078502384">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-white px-2" target='_blank' href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-white px-2" target='_blank' href="https://www.linkedin.com/company/81620839/admin/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-white px-2" target='_blank' href="https://www.instagram.com/decodesofttech/">
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
