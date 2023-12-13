import React, { Component } from 'react'
import Studentlayout from "./studentlayout/studentlayout"
import firebaseApp from './firebase/firebase';
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Newpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oldpassword: "",
            Newpassword: "",
            confirmpassword: "",
            id: "",
            sc: localStorage.getItem('sc'),
            currentuser: [],
            Schema: Yup.object().shape({
                oldpassword: Yup.string().required("This field is required"),
                password: Yup.string().required("This field is required"),
                changepassword: Yup.string().when("password", {
                    is: val => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        "Both password need to be the same"
                    )
                })
            }),

        };
    }

    componentDidMount() {
        const url = window.location.href;
        var ids = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id: ids }, () => {
            this.getalldatas();
        })
    }




    getalldatas = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ currentuser: doc.data() }, () => {
                    if (Number(localStorage.getItem('userrole')) !== 2) {
                        if (this.state.sc !== this.state.currentuser.password) {
                            window.location.href = '/'
                        }
                    }
                })
            });
        }).catch(err => {
            console.error(err)
        });
    }

    updatepass = (data) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    password: data.changepassword
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        toast.success('Password change successfully', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        window.location.href = "/"
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
            })
        }).catch(err => {
            console.error(err)
        });

    }



    checkoldpass = (data) => {
        if (this.state.currentuser.password == data.oldpassword) {
        } else {
            alert("Your old password does not match");
            toast.error('Your old password does not match', {
                position: toast.POSITION.TOP_RIGHT
            });
            window.location.reload(true);

        }
    }

    render() {
        return (
            <>
                <Studentlayout>
                    <div className="content-main-section left">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <Formik
                                        initialValues={{
                                            oldpassword: "",
                                            password: "",
                                            changepassword: ""
                                        }}
                                        validationSchema={this.state.Schema}
                                        onSubmit={(values) => {
                                            this.checkoldpass(values);
                                            this.updatepass(values);
                                        }}
                                    >
                                        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                            return (
                                                <div className="mainDiv">
                                                    <div className="cardStyle">
                                                        <form onSubmit={handleSubmit}>
                                                            <h1 className='text-center'>Change Password</h1>
                                                            <div className="inputDiv">
                                                                <label for="passowrd" className="inputLabels">oldpassword:</label>
                                                                <input
                                                                    type="password"
                                                                    name="oldpassword"
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    className="form-control input-style"
                                                                    value={values.oldpassword}
                                                                />
                                                                <span className="error" style={{ color: "red" }}>
                                                                    {errors.oldpassword}
                                                                </span>
                                                            </div>

                                                            <div className="inputDiv">
                                                                <label for="passowrd" className="inputLabels">New Password:</label>
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    value={values.password}
                                                                    className="form-control input-style"
                                                                />
                                                                <span className="error" style={{ color: "red" }}>
                                                                    {errors.password}
                                                                </span>
                                                            </div>

                                                            <div className="inputDiv">
                                                                <label for="passowrd" className="inputLabels" >Confirm Password:</label>
                                                                <input
                                                                    type="password"
                                                                    name="changepassword"
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                    className="form-control input-style"
                                                                    value={values.changepassword}
                                                                />
                                                                <span className="error" style={{ color: "red" }}>
                                                                    {errors.changepassword}
                                                                </span>
                                                            </div>

                                                            <div className="buttonWrapper">
                                                                <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
                                                                    <span>Submit</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </Formik>
                                </div>
                            </div>

                        </div>
                    </div>
                    <ToastContainer />
                </Studentlayout>
            </>
        )
    }
}

