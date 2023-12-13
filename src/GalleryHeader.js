import React from 'react'
import { Link } from 'react-router-dom'

export default function GalleryHeader(props) {
    return (
        <div className={"jumbotron jumbotron-fluid activity-page-header position-relative overlay-bottom margin-bottom  "} >
            <div className="container text-center py-5 my-5">

                <h1 data-aos="zoom-in-down" data-aos-duration="1000" className="text-white display-1  ">{props.name}</h1>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className="d-inline-flex text-white  mb-5">
                    <p className="m-0 text-uppercase"> <Link to={'/'} className="text-white" href="">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase"> <Link to={'/gallery'} className="text-white" href="">Gallery </Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">{props.name}</p>
                </div>


            </div>
        </div>
    )
}
