import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const logo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Flogo.png?alt=media&token=01789094-d54f-4a62-b232-8429172a3dc9&_gl=1*1ddejsb*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTgxNDguMC4wLjA.'
function Studentsidebar(props) {

    const [id, setId] = useState('');
    const [lastid, setLastid] = useState("");
    const [userollno, setUserollno] = useState('')
    const [show, setShow] = useState(false);
    const [urlName, seturlName] = useState('');




    const sidebar_change = (name) => {
        if (name) {
            // window.location.href = "/" + name;
            document.getElementById("root").classList.remove("dash-main-class-add");
        }
    };
    useEffect(() => {
        let url = window.location.href;
        let data = url.split('/')
        let id = data[data.length - 1]
        const urlName = data[data.length - 2];
        seturlName(urlName)
        // var ids = url.substring(url.lastIndexOf('/') + 1);
        var userollno = localStorage.getItem("userer_num")
        // if (userollno == "heaven") {
        //     localStorage.setItem("userer_num", ids)
        // }
        // setUserollno(userollno);
        setId(id)
    }, [])


    const handleClose = () => {
        setShow(false);
        localStorage.clear();
        window.location.href = "/"
    }
    const handleCloseNo = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }


    const clear = () => {
        handleShow()
    }

    const handleBackdrop = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");
        document.getElementById('s-sidebar-back').classList.add('d-none')
    }




    return (
        <>
            <div onClick={handleBackdrop} id="s-sidebar-back" className="sidebar-backdrop d-xl-none d-none" ></div>
            <div className="sidebar-main-section shadow">
                <div className="brand-title">
                    <Link to="/" className="d-inline-flex align-items-center cursor-pointer">
                        <img src={logo} className="img-logo" alt="logo" />
                    </Link>
                </div>
                <div className="sidebar-main-section-inner pt-xl-3">
                    <div className="sidebar-main-inner-menu">
                        <div className="sidebar-main-inner-list">
                            <ul>
                                <Link to={"/socialmedia/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "socialmedia" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" >My Diaries</span>
                                        </bdi>
                                    </li>
                                </Link>
                                <Link to={"/profile/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "profile" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" >Profile</span>
                                        </bdi>
                                    </li>
                                </Link>
                                <Link to={"/attandancesheet/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "attandancesheet" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars">Attandancesheet</span>
                                        </bdi>
                                    </li>
                                </Link>



                                <Link to={"/project/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "project" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars">Myproject</span>
                                        </bdi>
                                    </li>
                                </Link>


                                <Link to={"/paymentdetail/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "paymentdetail" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars">Paymentdetail</span>
                                        </bdi>
                                    </li>
                                </Link>

                                <Link to={"/leave/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "leave" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>Leave application</span>
                                        </bdi>
                                    </li>
                                </Link>

                                <Link to={"/Newpassword/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "Newpassword" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>changepassword</span>
                                        </bdi>
                                    </li>
                                </Link>


                                {/*  <Link to={"/placements/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "placements" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>placements</span>
                                        </bdi>
                                    </li>
                                  </Link> */}


                                <Link to={"/timetable/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "timetable" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>Holidays</span>
                                        </bdi>
                                    </li>
                                </Link>
                                <Link to={"/regulation/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "regulation" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>Terms & Condition</span>
                                        </bdi>
                                    </li>
                                </Link>



                                {/* <Link to={"/progress/" + id} onClick={sidebar_change}>
                                    <li>
                                        <bdi className={urlName === "fees" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>Progress</span>
                                        </bdi>
                                    </li>
                                </Link> */}


                                <Link onClick={clear} >
                                    <li>
                                        <bdi className={urlName === "fees" ? "active" : ""}>
                                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 5.06299C18.5523 5.06299 19 5.5107 19 6.06299C19 6.61527 18.5523 7.06299 18 7.06299H16C15.4477 7.06299 15 6.61527 15 6.06299C15 5.5107 15.4477 5.06299 16 5.06299H18ZM8 5.06299C8.55228 5.06299 9 5.5107 9 6.06299V10.063C9 10.6153 8.55228 11.063 8 11.063H6C5.44772 11.063 5 10.6153 5 10.063V6.06299C5 5.5107 5.44772 5.06299 6 5.06299H8ZM18 13.063C18.5523 13.063 19 13.5107 19 14.063V18.063C19 18.6153 18.5523 19.063 18 19.063H16C15.4477 19.063 15 18.6153 15 18.063V14.063C15 13.5107 15.4477 13.063 16 13.063H18ZM8 17.063C8.55228 17.063 9 17.5107 9 18.063C9 18.6153 8.55228 19.063 8 19.063H6C5.44772 19.063 5 18.6153 5 18.063C5 17.5107 5.44772 17.063 6 17.063H8ZM21 4.06299C21 3.5107 20.5523 3.06299 20 3.06299H14C13.4477 3.06299 13 3.5107 13 4.06299V8.06299C13 8.61527 13.4477 9.06299 14 9.06299H20C20.5523 9.06299 21 8.61527 21 8.06299V4.06299ZM11 4.06299C11 3.5107 10.5523 3.06299 10 3.06299H4C3.44772 3.06299 3 3.5107 3 4.06299V12.063C3 12.6153 3.44772 13.063 4 13.063H10C10.5523 13.063 11 12.6153 11 12.063V4.06299ZM21 12.063C21 11.5107 20.5523 11.063 20 11.063H14C13.4477 11.063 13 11.5107 13 12.063V20.063C13 20.6153 13.4477 21.063 14 21.063H20C20.5523 21.063 21 20.6153 21 20.063V12.063ZM11 16.063C11 15.5107 10.5523 15.063 10 15.063H4C3.44772 15.063 3 15.5107 3 16.063V20.063C3 20.6153 3.44772 21.063 4 21.063H10C10.5523 21.063 11 20.6153 11 20.063V16.063Z" fill="#84879E" />
                                            </svg>
                                            <span className="sidebars" x>Logout</span>
                                        </bdi>
                                    </li>
                                </Link>
                            </ul>

                            <Modal centered show={show} >

                                <Modal.Body className="text-center mt-4"><h3>Are you sure you want to logout ?</h3></Modal.Body>

                                <Modal.Footer style={{ textAlign: "center", }} className="mb-3">
                                    <button className="btn btn-danger abct" style={{ width: "90px" }} onClick={handleClose}>Yes</button>
                                    <button className="btn btn-primary primary-btn danger" style={{ width: "90px" }} onClick={handleCloseNo}>No</button>

                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Studentsidebar;
