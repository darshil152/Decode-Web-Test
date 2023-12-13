import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import firebaseApp from './firebase/firebase';
import { Formik } from "formik";
import * as Yup from "yup";


let errorContainer = (form, field) => {
    return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
};
let formAttr = (form, field) => ({
    onBlur: form.handleBlur,
    onChange: form.handleChange,
    value: form.values[field],
});

// let submitdetail = ''

export default class Contact extends Component {

    state = {
        cname: '',
        cemail: '',
        csubject: '',
        cmessage: '',
        cphone: ''
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitdetail = (formData, resetForm) => {
        // UploadImageTOFirebase(formData);
        this.sendMessage(formData);
        // abc(formData);
    };



    sendMessage = (formdata) => {

        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("ContactUsPortfolio").add({
                name: formdata.cname,
                phone: formdata.cphone,
                subject: formdata.csubject,
                message: formdata.cmessage,
                email: formdata.cemail,
                createdAt: new Date().getTime(),
                project: 'decode-contact'
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                    reject(error);
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
            toast.success("Thank you for reaching out. We will contact you soon.")
            this.setState({
                cname: '',
                cemail: '',
                csubject: '',
                cmessage: '',
                cphone: ''
            })

        }).catch(error => {
            console.error(error)
        })

    }

    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-5 mb-lg-0 p-0">
                            <div className="bg-light d-flex flex-column justify-content-center px-2 px-md-5" style={{ height: '500px' }}>
                                <div className="d-flex align-items-center mb-5">
                                    <div className="btn-icon bg-primary mr-4">
                                        <a className="text-white" href="https://goo.gl/maps/tY68pnXuMjLQ1Jc19" target="_blank">
                                            <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                                        </a>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Our Location</h4>
                                        <p className="m-0">304, Dhara Arcade, Mahadev Chowk, Mota
                                            Varachha, Surat</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-5">
                                    <div className="btn-icon bg-secondary mr-4">
                                        <i className="fa fa-2x fa-phone text-white"></i>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Call Us</h4>
                                        <p className="m-0">+91 834 776 3858</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="btn-icon bg-warning mr-4">
                                        <i className="fa fa-2x fa-envelope text-white"></i>
                                    </div>
                                    <div className="mt-n1">
                                        <h4>Email Us</h4>
                                        <p className="m-0 text-break">hr@decodesofttech.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title position-relative mb-4">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Need Help?</h6>
                                <h1 className="display-4">Send Us A Message</h1>
                            </div>
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    cname: "",
                                    cemail: '',
                                    cphone: '',
                                    cmessage: '',
                                    csubject: '',

                                }}
                                validationSchema={Yup.object({
                                    cname: Yup.string().required("Name is required."),
                                    cphone: Yup.string().required("Phone number is required."),
                                })}
                                onSubmit={(formData, { resetForm }) => {
                                    this.submitdetail(formData, resetForm);

                                }}
                            >
                                {(runform) => (
                                    <form onSubmit={runform.handleSubmit}>
                                        <div className="contact-form">
                                            {/* <!-- <form> --> */}

                                            <div className="row">
                                                <div className="col-sm-6 form-group">
                                                    <input  {...formAttr(runform, "cname")} name='cname' type="text" id="c-name"
                                                        className="form-control contact-form border-top-0 border-right-0 border-left-0 p-0"
                                                        placeholder="Your Name" />
                                                    {errorContainer(runform, "cname")}

                                                </div>
                                                <div className="col-sm-6 form-group">
                                                    <input type="email" {...formAttr(runform, "cemail")} name='cemail' id="c-email"
                                                        className="form-control contact-form border-top-0 border-right-0 border-left-0 p-0"
                                                        placeholder="Your Email" />
                                                    {errorContainer(runform, "cemail")}

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <select className="form-control contact-form border-top-0 border-right-0 border-left-0 p-0"
                                                            name="csubject"
                                                            {...formAttr(runform, "courses")}
                                                        >
                                                            <option value="" label="Select a course">
                                                                Select a courses{" "}
                                                            </option>
                                                            <option value="1" label="Master In Web design ">
                                                                {" "}
                                                                Master In Web design
                                                            </option>
                                                            <option value="2" label="Master In Frontend Development">
                                                                Master In Frontend Development
                                                            </option>
                                                            <option value="3" label="Master In Backend Development">
                                                                Master In Backend Development
                                                            </option>
                                                            <option value="4" label="firebase">
                                                                firebase
                                                            </option>
                                                            <option value="5" label="Master in 360 & 3D Website">
                                                                Master in 360 & 3D Website
                                                            </option>
                                                            <option value="6" label="Master In Fullstack Development">
                                                                Master In Fullstack Development
                                                            </option>
                                                        </select>
                                                        {errorContainer(runform, "csubject")}
                                                    </div>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <input {...formAttr(runform, "cphone")} name='cphone' type="text" id="c-number"
                                                        className="form-control contact-form border-top-0 border-right-0 border-left-0 p-0"
                                                        placeholder="Enter Contact Number" />
                                                    {errorContainer(runform, "cphone")}

                                                </div>
                                            </div>
                                            <div className="form-group col-12 ">
                                                <textarea {...formAttr(runform, "cmessage")} name='cmessage' className="form-control  border-top-0 border-right-0 border-left-0 p-0" rows="5"
                                                    id="c-message" placeholder="Message" ></textarea>
                                                {errorContainer(runform, "cmessage")}

                                            </div>
                                            <div>
                                                <button type='submit' className="btn btn-primary py-3 px-5" >Send Message</button>
                                            </div>
                                            {/* <!-- </form> --> */}
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </div >
        )
    }
}
