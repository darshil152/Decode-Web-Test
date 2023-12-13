import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class HeaderForPage extends Component {



    render() {
        return (
            <div className={this.props.name === 'Gallery' ? "jumbotron jumbotron-fluid activity-page-header position-relative overlay-bottom margin-bottom  " : 'jumbotron jumbotron-fluid page-header position-relative overlay-bottom margin-bottom'} >
                <div className="container text-center py-5 my-5">

                    <h1 data-aos="zoom-in-down" data-aos-duration="1000" className="text-white display-1  ">{this.props.name}</h1>
                    <div data-aos="zoom-in-down" data-aos-duration="1000" className="d-inline-flex text-white  mb-5">
                        <p className="m-0 text-uppercase"> <Link to={'/'} className="text-white" href="">Home</Link></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">{this.props.name}</p>
                    </div>


                </div>
            </div>
        )
    }
}
