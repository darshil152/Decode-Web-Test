import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid position-relative overlay-bottom margin-bottom" >
                <div className="container text-center my-5 py-5">
                    <h1 data-aos="zoom-in-down" data-aos-duration="1000" className="text-white mt-4 mb-4 ">Welcome to</h1>
                    <h1 data-aos="zoom-in-down" data-aos-duration="1000" className="text-white display-1  mb-5">Decode Softtech</h1>
                    {/* <!-- <div className="mx-auto mb-5" style="width: 100%; max-width: 600px;">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Courses</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Courses 1</a>
                                            <a className="dropdown-item" href="#">Courses 2</a>
                                            <a className="dropdown-item" href="#">Courses 3</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control border-light" style="padding: 30px 25px;"
                                        placeholder="Keyword">
                                        <div className="input-group-append">
                                            <button className="btn btn-secondary secondary-btn px-4 px-lg-5">Search</button>
                                        </div>
                                </div>
                            </div> --> */}
                </div>
            </div>
        )
    }
}
