import React, { Component } from 'react'

import { Dropdown } from "react-bootstrap";
import { Context } from "../contexts/HeaderContext";
import firebaseApp from '../firebase/firebase';
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

const Profile = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fprofile.png?alt=media&token=48e3adc9-68e6-48a8-ae2e-2ec30d45d2ed&_gl=1*jb5yt1*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTk3MDAuMC4wLjA.";
const menu = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fmenu.png?alt=media&token=fa92a152-457c-4807-b96f-50f26a9731e2&_gl=1*5janv0*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTgzNjEuMC4wLjA."



var url = window.location.href;
var result = url.split('/');
let urlId = result[result.length - 1];
var Param = result[result.length - 2];
export default class studentheader extends Component {

    state = {
        status: 0,
        message: ''
    }

    componentDidMount() {
        this.getMarqueeData()
    }

    getMarqueeData = () => {



        const db = getDatabase();
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            this.setState({ message: data.msg, status: data.marque }, () => {
                if (this.state.status) {
                    let interval = setInterval(() => {
                        if (document.getElementsByClassName('content-main-section')[0]) {
                            clearInterval(interval);
                            document.getElementsByClassName('content-main-section')[0].style.paddingTop = '130px'
                        }
                    }, 100);

                }
            })
        });


    }

    addmainclass = () => {
        document.getElementById("root").classList.toggle("dash-main-class-add");
        document.getElementById("s-sidebar-back").classList.remove("d-none");
    };

    openUserinfo = () => {
        document.getElementById("user-detail").classList.toggle("active-user-info");

    };
    render() {
        return (
            <Context.Consumer>
                {value => <>
                    <header className="header-fix-top-section">
                        <div onClick={this.addmainclass} className="d-xl-none abce">
                            <img src={menu} className="me-3 mr-3 imgmenu" alt="arrow" />
                        </div>


                        <div className="ms-auto mobile-responsive-info d-none" id="user-detail">
                            <div className="d-flex align-items-center mobile-responsive-info-inr">

                                <div className="dropdown-header p-0 ms-3">
                                    <Dropdown >
                                        <Dropdown.Toggle id="dropdown" >
                                            <div className="asdasd">

                                                <img src={value.state.currentStudentData.profile_img !== '' ? value.state.currentStudentData.profile_img : Profile} alt="profile" />
                                                <h2 className="d-md-none d-sm-none ">{value.state.currentStudentData.f_name + ' ' + value.state.currentStudentData.l_name}</h2>
                                                <h6 className="d-md-none d-sm-none">{value.state.currentStudentData.er_num}</h6>
                                            </div>


                                            <div className=" pl-3 text-start">
                                                <span className="d-block">{value.state.currentStudentData.f_name + ' ' + value.state.currentStudentData.l_name}</span>
                                                <bdi className="d-block">{value.state.currentStudentData.er_num}</bdi>
                                            </div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-none" onClick={this.openUserinfo}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                            </svg> */}
                        </div>
                    </header>
                    {
                        this.state.status == 1 && <marquee className="blink" width="100%" id="myDIV" behavior="scroll" scrollamount="12" direction="left" height="50px" >
                            {this.state.message}


                        </marquee>
                    }
                </>}
            </Context.Consumer>
        )
    }
}
