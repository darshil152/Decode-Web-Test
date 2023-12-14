import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from 'formik';
import * as Yup from "yup";

import firebaseApp from './firebase/firebase';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from './contexts/HeaderContext';




let data = [];
let urole = 1
let formData = ''
export default function Login() {



    const navigate = useNavigate();
    const [userData, setuserData] = useState([])
    const [userRole, setuserRole] = useState(1)
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordType, setPasswordType] = useState("password");


    useEffect(() => {
        getalldata();

    }, [])


    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const getalldata = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                data.push(doc.data())
            });

            setuserData(data)
            console.log(data)

        }).catch(err => {
            console.error(err)
        });
    }

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

    const submitloginform = (formdata) => {
        let isflag = false

        formData = formdata
        for (let i = 0; i < data.length; i++) {
            if (data[i].er_num == formdata.enrollmentNumber && data[i].password == formdata.password) {

                urole = data[i].userRole
                setuserRole(urole)
                localStorage.setItem('userrole', data[i].userRole)
                localStorage.setItem('user_name', data[i].f_name)
                localStorage.setItem('sc', data[i].password)
                localStorage.setItem("userer_num", data[i].er_num)
                isflag = true
            }
        }
        if (isflag && urole == 1) {
            toast('You loggin successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {

                document.getElementById('btn').click()
            }, 10);

        } else if (isflag && urole == 2) {

            toast('You loggin successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {

                document.getElementById('btn').click()
            }, 10);

        } else if (isflag && urole == 3) {

            toast('You loggin successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {

                document.getElementById('btn').click()
            }, 10);
        }

        else {
            toast.error('Your credential is incorrect', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const NavigateFunction = () => {

        setTimeout(() => {
            if (urole == 1) {
                localStorage.removeItem('user')
                navigate('/socialmedia/' + formData.enrollmentNumber)
            }
            if (urole == 2) {
                localStorage.setItem('user', 'de-ad')
                navigate('/dashboard')
            } if (urole == 3) {
                localStorage.setItem('user', 'de-hr')
                navigate('/attandance')
            }
        }, 100);
    }


    return (
        <Context.Consumer>
            {value => <>
                <section>
                    <div className="login-root">
                        <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
                            <div className="loginbackground box-background--white padding-top--64">
                                <div className="loginbackground-gridContainer">
                                    <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
                                        <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}>
                                        </div>
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
                                        <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
                                        <div className="box-root box-background--blue800" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
                                        <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
                                        <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
                                        <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
                                        <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
                                        <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }} />
                                    </div>
                                    <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
                                        <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }} />
                                    </div>
                                </div>
                            </div>
                            <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                                <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                                    <h1 className='studentslogin'>Student Login</h1>
                                </div>
                                <div className="box-root flex-flex flex-justifyContent--center error">
                                </div>
                                <div className="formbg-outer">
                                    <div className="formbg">
                                        <div className="formbg-inner padding-horizontal--48">
                                            <Formik
                                                enableReinitialize
                                                initialValues={{
                                                    enrollmentNumber: "",
                                                    password: "",
                                                }}
                                                validationSchema={Yup.object({
                                                    // EnrollmentNumber: Yup.string().required("First name is required."),
                                                    // password: Yup.string().required("First name is required."),

                                                })}
                                                onSubmit={(formData, { resetForm }) => {
                                                    submitloginform(formData, resetForm);
                                                }}
                                            >
                                                {(runform) => (

                                                    <form id="stripe-login" onSubmit={runform.handleSubmit}>
                                                        <div className="field padding-bottom--24">
                                                            <label htmlFor="email">Enrollment Number</label>
                                                            <input type="text" id='email' name="enrollmentNumber" {...formAttr(runform, "enrollmentNumber")} placeholder="" />
                                                            {errorContainer(runform, "enrollmentNumber")}

                                                        </div>
                                                        <div className="field padding-bottom--24">
                                                            <label htmlFor="pass">Password</label>

                                                            <input type={passwordType} id='pass' name="password" {...formAttr(runform, "password")} placeholder="" />
                                                            <button className="btn-btn-primary eyepass" type='button' onClick={togglePassword}>
                                                                {passwordType === "password" ? <i className="fa fa-eye-slash" aria-hidden="true"></i> : <i className="fa fa-eye" aria-hidden="true"></i>
                                                                }
                                                            </button>
                                                            {errorContainer(runform, "password")}


                                                        </div>


                                                        <div className="field padding-bottom--24">
                                                            <input href="#" type="submit" defaultValue="Login" />
                                                        </div>

                                                    </form>
                                                )}
                                            </Formik>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                        <button className='d-none' id="btn" onClick={() => { value.setData(userData); value.setUserRole(userRole); NavigateFunction() }}>click me</button>
                    </div>
                </section>
            </>}
        </Context.Consumer >

    )
}

