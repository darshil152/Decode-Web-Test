import React, { Component } from 'react'
import AdminLayout from './adminlayout/adminlayout'
import * as Yup from "yup";
import { Formik } from 'formik';
import firebaseApp from './firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export default class Expenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            detail: "",
            amount: "",
            type: "",
            Schema: Yup.object().shape({
                amount: Yup.string().required("Amounts is required"),
                detail: Yup.string().required("Detail is required"),
                type: Yup.string().required("Payment type is required"),
            }),
            allexpenses: [],

        };
    }

    componentDidMount() {
        this.getdata()

    }



    savedata = (formData) => {
        const db = firebaseApp.firestore();
        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Expenses").add({
                date: formData.date,
                detail: formData.detail,
                amount: formData.amount,
                type: formData.type,
                status: 0
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    toast.success(' Expenses added successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    // navigate('/dashboard')

                })
                .catch(function (error) {
                    console.error("Please check form again ", error);
                    reject(error);
                    // toast.error('Attendance is already added', {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
            // toast.success("Thank you for reaching out. We will contact you soon.")
        }).catch(error => {
            console.error(error)
        })

    }


    getdata = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Expenses').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())
            });
            this.setState({ allexpenses: entry })
        }).catch(err => {
            console.error(err)
        });

    }




    render() {
        return (
            <AdminLayout >
                <div className="content-main-section">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <Formik
                                    initialValues={{
                                        date: new Date().toJSON().slice(0, 10),
                                        detail: "",
                                        amount: "",
                                        type: "",
                                    }}
                                    validationSchema={this.state.Schema}
                                    onSubmit={(values) => {
                                        this.savedata(values)

                                    }}
                                >
                                    {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                        return (
                                            <div className="mainDiv">
                                                <div className="cardStyle">
                                                    <form onSubmit={handleSubmit}>
                                                        <h1 className='text-center'>Expenses</h1>
                                                        <div className="inputDiv">
                                                            <label for="date" className="inputLabels">date:</label>
                                                            <input
                                                                type="date"
                                                                name="date"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                className="form-control input-style"
                                                                value={values.date}
                                                            />
                                                            <span className="error" style={{ color: "red" }}>
                                                                {errors.date}
                                                            </span>
                                                        </div>

                                                        <div className="inputDiv">
                                                            <label for="passowrd" className="inputLabels"> Detail:</label>
                                                            <input
                                                                type="text"
                                                                name="detail"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                value={values.detail}
                                                                className="form-control input-style"
                                                            />
                                                            <span className="error" style={{ color: "red" }}>
                                                                {errors.detail}
                                                            </span>
                                                        </div>

                                                        <div className="inputDiv">
                                                            <label for="amount" className="inputLabels" >amount</label>
                                                            <input
                                                                type="number"
                                                                name="amount"
                                                                onBlur={handleBlur}
                                                                onChange={handleChange}
                                                                className="form-control input-style"
                                                                value={values.amount}
                                                            />
                                                            <span className="error" style={{ color: "red" }}>
                                                                {errors.amount}
                                                            </span>
                                                        </div>
                                                        <div className=" mt-3 inputDiv">
                                                            <label className="selectcourse">Select type: <span className="text-danger">*</span></label>
                                                            <select className="form-control input-style"
                                                                name="type"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.type}

                                                            >
                                                                <option value="" label="Select a Type    ">
                                                                    Select a Type{" "}
                                                                </option>
                                                                <option value="1" label="Cash ">
                                                                    {" "}
                                                                    Cash
                                                                </option>
                                                                <option value="2" label="Bank Transfer">
                                                                    Bank Transfer
                                                                </option>

                                                            </select>


                                                        </div>


                                                        <div className="buttonWrapper">
                                                            <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
                                                                <span>submit</span>
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

            </AdminLayout >
        )
    }
}
