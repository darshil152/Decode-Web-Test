import React, { Component } from 'react'
import Layout from './Layout'
import HeaderForPage from './HeaderForPage'
import { Modal, Button } from "react-bootstrap";
import { Formik } from 'formik'
import * as Yup from "yup";
import firebaseApp from './firebase/firebase';
import { event } from 'jquery';
import { ToastContainer, toast } from 'react-toastify';
import { lightGreen } from '@material-ui/core/colors';



export default class Career extends Component {
    constructor() {

        super()
        this.myRef = React.createRef();
        this.state = {
            isOpen: false,
            isOpen1: false,
            isOpen2: false,
            profile: '',
            email: "",
            name: "",
            graphics: "graphics",
            fullstack: "fullstack",
            flutter: "flutter",
            which: ""


        }
    }

    openModal = (data) => this.setState({ isOpen: true }, () => {
        this.setState({ which: data })
    });
    closeModal = () => this.setState({ isOpen: false });


    handleFileChange = (e) => {
        this.UploadImageTOFirebase(e.target.files[0])
    }


    handleemail = (event) => {
        this.setState({ email: event.target.value })
    }
    handlename = (event) => {
        this.setState({ name: event.target.value })
    }


    UploadImageTOFirebase = (file) => {
        const guid = () => {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return String(s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4());
        }


        let myPromise = new Promise((resolve, reject) => {

            const myGuid = guid();
            const storageUrl = firebaseApp.storage('gs://hey1-portfolio.appspot.com/')
            const storageRef = storageUrl.ref();
            const uploadTask = storageRef.child('decode').child('cv').child(myGuid).put(file)
            uploadTask.on('state_changed',
                (snapShot) => {

                }, (err) => {
                    //catches the errors
                    console.log(err)
                    reject(err)
                }, () => {

                    firebaseApp
                        .storage('gs://hey1-portfolio.appspot.com/')
                        .ref()
                        .child('decode')
                        .child('cv')
                        .child(myGuid)
                        .getDownloadURL()
                        .then(fireBaseUrl => {
                            resolve(fireBaseUrl)
                        }).catch(err => {
                            console.log('error caught', err)
                        })
                })
        })
        myPromise.then(url => {

            this.setState({ profile: url }, () => {
                this.myRef.current.setFieldValue("file", url);
            })
            // sendMessage(data)
        }).catch(err => {
            console.log('error caught', err)
        })
    }




    makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    handlesave = (data) => {

        if (this.state.which == "graphics") {
            let registerQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("career").add({
                    email: data.email,
                    name: data.name,
                    cv: this.state.profile,
                    for: "Graphics Designer",
                    createdAt: Date.now(),
                    id: this.makeid(8)

                })
                    .then((docRef) => {

                        console.log("Document written with ID: ", docRef.id);
                        toast.success("Thanks for Application. Our Team contact you soon.", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        resolve(docRef.id);
                        this.closeModal()

                    })
                    .catch(function (error) {
                        console.error("Please check form again ", error);
                        reject(error);

                    });
            });
            registerQuery.then(result => {
                console.warn('register successful')
                // toast.success("Thank you for reaching out. We will contact you soon.")
            }).catch(error => {
                console.error(error)
            })
        } else if (this.state.which == "fullstack") {
            let registerQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("career").add({
                    email: data.email,
                    name: data.name,
                    cv: this.state.profile,
                    for: "fullstack ",
                    createdAt: Date.now(),
                    id: this.makeid(8)

                })
                    .then((docRef) => {

                        console.log("Document written with ID: ", docRef.id);
                        toast.success("Thanks for Application. Our Team contact you soon.", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        resolve(docRef.id);
                        this.closeModal()

                    })
                    .catch(function (error) {
                        console.error("Please check form again ", error);
                        reject(error);

                    });
            });
            registerQuery.then(result => {
                console.warn('register successful')
                // toast.success("Thank you for reaching out. We will contact you soon.")
            }).catch(error => {
                console.error(error)
            })
        } else {
            let registerQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("career").add({
                    email: data.email,
                    name: data.name,
                    cv: data.file,
                    for: "flutter ",
                    createdAt: Date.now(),
                    id: this.makeid(8)

                })
                    .then((docRef) => {

                        console.log("Document written with ID: ", docRef.id);
                        toast.success("Thanks for Application. Our Team contact you soon.", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        resolve(docRef.id);
                        this.closeModal()

                    })
                    .catch(function (error) {
                        console.error("Please check form again ", error);
                        reject(error);

                    });
            });
            registerQuery.then(result => {
                console.warn('register successful')
                // toast.success("Thank you for reaching out. We will contact you soon.")
            }).catch(error => {
                console.error(error)
            })
        }

    }






    render() {
        return (
            <Layout>
                <HeaderForPage name='Carrer' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 mt-5 text-center'>
                            <div className="hiring-btn-career d-inline-block text-white mb-4">
                                We’re Hiring!
                            </div >

                            <h1 className=' mt-5 slogan'>Unleashing the best individual in you </h1><br></br>
                            <p className='aboutinstitute text-justify'>Decode softtech is a Surat-based IT Education and Training Institution. Founded in 2022,Decode softtech Surat has built an industry-specific and cost effective education ecosystem in IT Service. Decode softtech Surat Provides various enterprise level courses.Decode softtech Surat is also one of the best organizations in Gujarat for providing enterprise level information technologies education and training to corporate and government clients.</p>
                            <h4 className='applynow mt-5 mb-5'>Job Positions 🔎</h4>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="job-pos-box">
                        <div className='row'>
                            <div className="col-lg-4 col-md-6 mb-2 mt-2 ">
                                <div className="crr-jobs-box-main">
                                    <svg width="35" height="44" viewBox="0 0 35 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.0824 30.0539H3.00391L5.46638 22.5955C5.8412 21.4615 6.90395 20.6929 8.09486 20.6929H25.9914C27.1871 20.6929 28.2451 21.4615 28.6199 22.5955L31.0824 30.0539Z" fill="#F06562"></path>
                                        <path d="M20.3714 20.6934H13.7285V30.0541H20.3714V20.6934Z" fill="#DFDFDF"></path>
                                        <path d="M13.9421 20.8228C13.9524 20.7908 13.9692 20.7607 13.9806 20.729H13.1532C13.1161 20.7621 13.0759 20.7886 13.039 20.8228C12.15 21.6416 11.3407 22.7224 10.0914 24.0231L12.0097 25.0805L9.92773 26.3343L12.6133 30.0539H15.603L13.8766 22.6896C13.7316 22.0673 13.7503 21.417 13.9421 20.8228ZM22.0784 25.0805L24.0013 24.0231C22.7475 22.7271 21.9381 21.6416 21.0537 20.8228C20.9996 20.7727 20.9407 20.7332 20.8859 20.6851H20.0896C20.107 20.7315 20.131 20.7759 20.1461 20.8228C20.3426 21.417 20.3613 22.0674 20.2117 22.6897L18.4853 30.054H21.475L24.1652 26.3344L22.0784 25.0805Z" fill="#EF4C4A"></path>
                                        <path d="M20.0381 15.4424V19.7502C20.0381 21.5086 18.7385 22.9336 17.1346 22.9336H16.9564C15.3524 22.9336 14.0527 21.5087 14.0527 19.7502V15.4424H20.0381Z" fill="#EEC06E"></path><path d="M24.2981 10.282C24.2981 10.8892 24.2459 11.4871 24.151 12.0612C23.4725 16.094 20.5498 19.1258 17.0436 19.1258C13.5373 19.1258 10.6147 16.094 9.93618 12.0612C9.84131 11.4871 9.78906 10.8892 9.78906 10.282C9.78906 7.83369 10.6052 5.62275 11.9241 4.01908C13.2383 2.42494 15.046 1.43799 17.0435 1.43799C19.0409 1.43799 20.8487 2.42485 22.1628 4.01908C23.482 5.62275 24.2981 7.83378 24.2981 10.282Z" fill="#FBD178"></path>
                                        <path d="M11.8203 2.82951C11.5544 2.24588 11.7077 1.52522 12.1081 1.02418C12.5085 0.523141 13.1204 0.223857 13.7485 0.0943348C14.3767 -0.0351871 15.026 -0.00952096 15.6652 0.0426361C16.7195 0.128526 17.7679 0.284539 18.8015 0.5093C19.8516 0.737544 20.8945 1.04004 21.8446 1.54199C22.7947 2.04395 23.6527 2.757 24.204 3.67933C24.8901 4.82715 25.0583 6.21688 25.0013 7.55289C24.9162 9.54741 24.3168 11.477 23.3438 13.2201C23.1684 11.66 22.993 10.1 22.8176 8.53984C22.7547 7.98078 22.6837 7.39816 22.3735 6.92874C22.0195 6.39306 21.3976 6.08433 20.7683 5.95655C20.139 5.82877 19.4902 5.85856 18.8481 5.86104C17.5724 5.86599 16.2963 5.76048 15.0387 5.54663C14.1513 5.39575 12.9515 4.95209 12.1968 5.69897C11.8563 6.03602 11.7518 6.53761 11.6631 7.0084C11.2751 9.06691 10.887 11.1255 10.4989 13.184C9.41941 10.9645 8.92534 8.48851 9.11334 6.0275C9.17246 5.25339 9.30437 4.46105 9.71035 3.79932C10.1162 3.1375 11.0457 2.77607 11.8203 2.82951Z" fill="#545554"></path>
                                        <path d="M9.8125 10.8354C9.83413 11.2516 9.87052 11.6635 9.93634 12.0616C10.6148 16.0946 13.5375 19.1263 17.0437 19.1263C20.55 19.1263 23.4727 16.0946 24.1512 12.0616C24.217 11.6635 24.2534 11.2516 24.2749 10.8354H9.8125Z" fill="#FBD178"></path><path d="M23.9505 12.7159C24.7731 12.7159 25.44 11.8549 25.44 10.7927C25.44 9.73064 24.7731 8.86963 23.9505 8.86963C23.1278 8.86963 22.4609 9.73064 22.4609 10.7927C22.4609 11.8549 23.1278 12.7159 23.9505 12.7159Z" fill="#FBD178"></path>
                                        <path d="M10.1419 12.7159C10.9645 12.7159 11.6314 11.8549 11.6314 10.7927C11.6314 9.73064 10.9645 8.86963 10.1419 8.86963C9.31924 8.86963 8.65234 9.73064 8.65234 10.7927C8.65234 11.8549 9.31924 12.7159 10.1419 12.7159Z" fill="#FBD178"></path><path d="M32.0204 44.0002H2.0681L0.0975857 41.5512C-0.133042 41.2645 0.0710028 40.8384 0.438944 40.8384H33.6495C34.0175 40.8384 34.2215 41.2645 33.9909 41.5512L32.0204 44.0002Z" fill="#919191"></path><path d="M31.2625 25.3613H2.89281C2.45585 25.3613 2.10156 25.7155 2.10156 26.1526V43.9996H32.0537V26.1526C32.0537 25.7155 31.6995 25.3613 31.2625 25.3613Z" fill="#CCCBCB"></path><path d="M17.0713 32.1045C15.6643 32.1045 14.5 33.2689 14.5 34.6758C14.5 36.0924 15.6643 37.2568 17.0713 37.2568C18.488 37.2568 19.6523 36.0924 19.6523 34.6758C19.6524 33.2688 18.488 32.1045 17.0713 32.1045Z" fill="#919191"></path></svg>

                                    <h5 className=' mt-3 graphicsdesigner'>Graphics Designer </h5>
                                    <p className=' mt-3 graphicexp'>Experience 0-5 years (02 Positions)</p>

                                    <div className='crr-jobs-box-btm mt-auto'>
                                        <button type='button' className='btn btn-primary primary-btn' style={{ borderRadius: "10px" }} onClick={() => this.openModal(this.state.graphics)}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-2 mt-2 ">
                                <div className="crr-jobs-box-main">
                                    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0956 26.2288C25.2669 26.2288 27.0271 24.4686 27.0271 22.2973C27.0271 20.1259 25.2669 18.3657 23.0956 18.3657C20.9243 18.3657 19.1641 20.1259 19.1641 22.2973C19.1641 24.4686 20.9243 26.2288 23.0956 26.2288Z" fill="#61DAFB"></path><path d="M23.096 30.3519C34.747 30.3519 44.1921 26.7456 44.1921 22.297C44.1921 17.8485 34.747 14.2422 23.096 14.2422C11.445 14.2422 2 17.8485 2 22.297C2 26.7456 11.445 30.3519 23.096 30.3519Z" stroke="#61DAFB" stroke-width="2.22971"></path><path d="M16.12 26.3245C21.9456 36.4146 29.7912 42.7911 33.6438 40.5668C37.4963 38.3425 35.897 28.3598 30.0715 18.2697C24.2459 8.17962 16.4003 1.80314 12.5477 4.02742C8.69516 6.25171 10.2945 16.2345 16.12 26.3245Z" stroke="#61DAFB" stroke-width="2.22971"></path><path d="M16.1207 18.2695C10.2952 28.3596 8.69582 38.3424 12.5484 40.5667C16.401 42.7909 24.2466 36.4145 30.0721 26.3244C35.8976 16.2343 37.497 6.25155 33.6444 4.02726C29.7918 1.80298 21.9462 8.17946 16.1207 18.2695Z" stroke="#61DAFB" stroke-width="2.22971"></path></svg>
                                    <h5 className=' mt-3 graphicsdesigner'>Fullstack Developer </h5>
                                    <p className=' mt-3 graphicexp'>Experience 0-5 years (02 Positions)</p>
                                    <div className='crr-jobs-box-btm mt-auto'>
                                        <button type='button' className='btn btn-primary primary-btn' style={{ borderRadius: "10px" }} onClick={() => this.openModal(this.state.fullstack)}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 mb-2 mt-2 ">
                                <div className="crr-jobs-box-main">
                                    <svg width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85157 24.85L0 18.9984L18.9999 0H30.7015L5.85157 24.85ZM30.7015 17.5317H18.9999L14.6166 21.915L20.4682 27.7665" fill="#42A5F5" fill-opacity="0.8"></path><path d="M14.6162 33.6166L18.9995 37.9999H30.7011L20.4678 27.7666" fill="#0D47A1"></path><path d="M8.7793 27.7697L14.6216 21.9258L20.464 27.7681L14.6216 33.612L8.7793 27.7697Z" fill="#42A5F5"></path><path d="M14.6221 33.6119L20.4644 27.7695L21.28 28.5851L15.4376 34.4274L14.6221 33.6119Z" fill="url(#paint0_linear_830_1828)"></path><path d="M14.6162 33.6162L23.2983 30.6167L20.4678 27.7646" fill="url(#paint1_linear_830_1828)"></path><defs><linearGradient id="paint0_linear_830_1828" x1="17.5444" y1="30.6896" x2="18.3599" y2="31.5052" gradientUnits="userSpaceOnUse"><stop offset="0.2" stop-opacity="0.15"></stop><stop offset="0.85" stop-color="#616161" stop-opacity="0.01"></stop></linearGradient><linearGradient id="paint1_linear_830_1828" x1="14.6183" y1="30.6906" x2="23.3003" y2="30.6906" gradientUnits="userSpaceOnUse"><stop offset="0.2" stop-opacity="0.55"></stop><stop offset="0.85" stop-color="#616161" stop-opacity="0.01"></stop></linearGradient></defs></svg>
                                    <h5 className=' mt-3 graphicsdesigner'>Flutter Developer </h5>
                                    <p className=' mt-3 graphicexp'>Experience 0-5 years (02 Positions)</p>

                                    <div className='crr-jobs-box-btm mt-auto'>
                                        <button type='button' className='btn btn-primary primary-btn' style={{ borderRadius: "10px" }} onClick={() => this.openModal(this.state.flutter)}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                                <Modal.Header >
                                    <Modal.Title>Apply Now</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Formik
                                        innerRef={this.myRef}
                                        initialValues={{ email: "", name: " ", file: "" }}
                                        onSubmit={async values => {
                                            this.handlesave(values)
                                        }}
                                        validateOnChange={false}
                                        validateOnBlur={false}
                                        validationSchema={Yup.object().shape({
                                            email: Yup.string().required("Required"),
                                            name: Yup.string().required("Required"),
                                            file: Yup.string().required("Required"),
                                        })}
                                    >
                                        {props => {
                                            props.submitCount > 0 && (props.validateOnChange = true);
                                            const {
                                                values,
                                                touched,
                                                errors,
                                                dirty,
                                                isSubmitting,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                handleReset
                                            } = props;
                                            return (
                                                <form onSubmit={handleSubmit}>


                                                    <label htmlFor="name" className="lbl-comn-info">
                                                        name
                                                    </label>
                                                    <input
                                                        id="name"
                                                        placeholder="Enter your name"
                                                        type="text"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.name && touched.name
                                                                ? "form-control input-style error"
                                                                : "form-control input-style"
                                                        }
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="input-feedback">{errors.name}</div>
                                                    )}


                                                    <label htmlFor="email" className="lbl-comn-info" >
                                                        Email
                                                    </label>
                                                    <input
                                                        id="email"
                                                        placeholder="Enter your email"
                                                        type="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.email && touched.email
                                                                ? "form-control input-style error"
                                                                : "form-control input-style"
                                                        }
                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="input-feedback">{errors.email}</div>
                                                    )}

                                                    <label className="lbl-comn-info " > Upload your CV:</label>
                                                    <input
                                                        type="file"
                                                        name="file-input"
                                                        id="file-input"
                                                        className={
                                                            errors.file && touched.file
                                                                ? "d-none form-control input-style error"
                                                                : "d-none form-control input-style"
                                                        }
                                                        onChange={this.handleFileChange}
                                                        onBlur={handleBlur}
                                                    />
                                                    {errors.file && touched.file && (
                                                        <div className="input-feedback">{errors.file}</div>
                                                    )}
                                                    <label className="file-input__label" for="file-input">
                                                        <svg
                                                            aria-hidden="true"
                                                            focusable="false"
                                                            data-prefix="fas"
                                                            data-icon="upload"
                                                            className="svg-inline--fa fa-upload fa-w-16"
                                                            role="img"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path
                                                                fill="currentColor"
                                                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                                            ></path>
                                                        </svg>
                                                        <span>Upload file</span></label>

                                                    <br />

                                                    {/* br

                                                    <label htmlFor="file" className="lbl-comn-info">
                                                        file
                                                    </label>
                                                    <input
                                                        id="file"
                                                        placeholder="Enter your CV"
                                                        type="file"
                                                        
                                                        
                                                    /> */}




                                                    <button type="submit" className='btn btn-primary primary-btn mt-3' disabled={isSubmitting}>
                                                        Submit
                                                    </button>

                                                    <button className="btn btn-danger mt-3 ms-3" onClick={this.closeModal}>
                                                        Close
                                                    </button>

                                                </form>
                                            );
                                        }}
                                    </Formik>
                                </Modal.Body>

                            </Modal>






                        </div>
                    </div >
                </div >
                <ToastContainer />

            </Layout >
        )
    }
}
