
import firebaseApp from './firebase/firebase'
import Studentlayout from "./studentlayout/studentlayout"
import { Modal, Button } from "react-bootstrap";
import React, { Component } from 'react'
import Rules from "./Rules"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "./contexts/HeaderContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const profilepicture = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fprofilepicture.jpg?alt=media&token=c41319a6-a394-400b-bbe5-5fba754bee20&_gl=1*1ctvrx8*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTk3NzcuMC4wLjA."

export default class Profile extends Component {


    constructor() {
        super();
        this.state = {
            profile: '',
            id: "",
            currentdata: '',
            referencedata: '',
            sc: localStorage.getItem('sc'),
            isOpen: false,
            defaultcheked: false,
            language: true,
            isOpen1: false,
            isOpen2: false,
            email: "",
            dob: "",
            line_1: "",
            line_2: "",
            city: "",
            feesmonth: "",
            todaymonth: "",
            birthdaydata: [],
            allStudentsData: [],
            doj: '',
            feespr: "",
            todaydate: new Date().toJSON().slice(0, 10),
            sod: "",
            analyticsAdded: false
        }
    }

    componentDidMount() {
        this.getAllData();
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id }, () => {
            this.getCurrentStudentdata();
        })
    }


    getAllData = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Students').where("status", "==", 1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())

            });
            this.setState({ allStudentsData: entry }, () => {
                this.getBirthdayData()
            })
        }).catch(err => {
            console.error(err)
        });
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

    addAnalyticsInDatabase = () => {
        this.setState({ analyticsAdded: true })
        let url = window.location.href;
        if (url.includes('localhost') || url.includes('decodesoft.web.app' || this.state.currentdata.er_num == 23000001)) {
            console.log('not added')
        } else {
            let analyticsQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("DecodeAnalytics").add({
                    er_num: this.state.currentdata.er_num,
                    f_name: this.state.currentdata.f_name,
                    l_name: this.state.currentdata.l_name,
                    page: 'profile',
                    start_time: Date.now(),

                    date: new Date(),
                    id: this.makeid(6)

                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        resolve(docRef.id);
                        this.setState({ analyticsRef: docRef.id })


                    })
                    .catch((error) => {
                        console.error("Please check form again ", error);
                        reject(error);

                    });
            });
            analyticsQuery.then(result => {
                console.warn('analytics added')
                // toast.success("Thank you for reaching out. We will contact you soon.")
            }).catch(error => {
                console.error(error)
            })
        }

    }






    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });



    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false });



    openModal2 = () => this.setState({ isOpen2: true });
    closeModal2 = () => this.setState({ isOpen2: false });


    feesstatus = (status) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    feesstatus: status
                })
                    .then(() => {
                        console.log("Document successfully updated!");

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



    getCurrentStudentdata = () => {

        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                this.setState({ feespr: doc.data().feesPr, currentdata: doc.data(), email: doc.data().email, dob: doc.data().dob, doj: doc.data().doj, profile: doc.data().profile_img ? doc.data().profile_img : '', line_1: doc.data().line_1, line_2: doc.data().line_2, city: doc.data().city }, () => {
                    document.getElementById('profile-btn').click()
                    if (!this.state.analyticsAdded) {
                        this.addAnalyticsInDatabase();
                    }

                    if (this.state.profile == "") {
                        toast.error('Please upload your profile image', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }

                    if (doc.data().fees.length > 0) {
                        var last = doc.data().fees[doc.data().fees.length - 1]
                        let feesdate = new Date(last.date);
                        let feemonth = String(feesdate.getMonth() + 1).padStart(2, '0');
                        this.setState({ feesmonth: feemonth }, () => {
                            let currentDate = new Date().toJSON().slice(0, 10);
                            let currdate = new Date(currentDate);
                            let currmonths = String(currdate.getMonth() + 1).padStart(2, '0');
                            this.setState({ todaymonth: currmonths }, () => {
                                if (Number(this.state.feesmonth) < Number(this.state.todaymonth) && this.state.feespr < Number(100)) {
                                    this.feesstatus('pending')
                                    toast.error("Your this month's fees installment is pending ", {
                                        position: toast.POSITION.TOP_RIGHT
                                    });
                                } else {
                                    this.feesstatus('paid')
                                }
                            })
                        })
                    } else {
                        this.feesstatus('pending')
                        toast.error("Your this month's fees installment is pending ", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }


                    if (Number(localStorage.getItem('userrole')) !== 2) {
                        if (this.state.sc !== this.state.currentdata.password) {
                            window.location.href = '/'
                        }
                        if (!this.state.currentdata.terms) {
                            this.openModal()
                        } else {
                            this.closeModal();
                        }
                    }

                    this.getrefdata();

                })

            });
        }).catch(err => {
            console.error(err)
        });
    }


    getrefdata = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("id", "==", this.state.currentdata.reference.refId).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ referencedata: doc.data() })
            });
        }).catch(err => {
            console.error(err)
        });
    }


    handleChange = (event) => {
        if (event.target.checked) {
            this.setState({ defaultcheked: true })
        }
        else {
            this.setState({ defaultcheked: false })
        }
    }

    getBirthdayData = () => {


        for (let i = 0; i < this.state.allStudentsData.length; i++) {
            if (this.state.allStudentsData[i].dob.split('-')[1] == this.state.todaydate.split('-')[1] && this.state.allStudentsData[i].dob.split('-')[2] == this.state.todaydate.split('-')[2]) {
                toast("Today is " + this.state.allStudentsData[i].f_name + ' ' + this.state.allStudentsData[i].l_name + "'s Birthday", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

        }

    }


    submitform = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    terms: true
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        this.closeModal()

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


    clicks = () => {
        this.submitform();
        // this.closeModal();
    }

    chagees = () => {
        this.setState({ language: !this.state.language })
    }

    handleemail = (event) => {
        this.setState({ email: event.target.value })
    }
    handledob = (event) => {
        this.setState({ dob: event.target.value })
    }
    handleline1 = (event) => {
        this.setState({ line_1: event.target.value })
    }
    handleline2 = (event) => {
        this.setState({ line_2: event.target.value })
    }
    handlecity = (event) => {
        this.setState({ city: event.target.value })

    }

    editform1 = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);


                return updateCollection.update({
                    email: this.state.email,
                    dob: this.state.dob,
                    profile_img: this.state.profile
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        this.getCurrentStudentdata();
                        this.closeModal1();

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

    updateadd = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);


                return updateCollection.update({
                    line_1: this.state.line_1,
                    line_2: this.state.line_2,
                    city: this.state.city
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        this.getCurrentStudentdata();
                        this.closeModal2();

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

    handlesave = () => {
        this.editform1();
    }
    handlesaveaddress = () => {
        this.updateadd();
    }

    UploadImageTOFirebase = (file) => {
        const guid = () => {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return String(this.state.id + '-' + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4());
        }


        let myPromise = new Promise((resolve, reject) => {

            const myGuid = guid();
            const storageUrl = firebaseApp.storage('gs://hey1-portfolio.appspot.com/')
            const storageRef = storageUrl.ref();
            const uploadTask = storageRef.child('decode').child('profile').child(myGuid).put(file)
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
                        .child('profile')
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
            this.setState({ profile: url })
            // sendMessage(data)
        }).catch(err => {
            console.log('error caught', err)
        })
    }


    handleFileChange = (e) => {

        if (e.target.files[0].size > 10e6) {
            toast.error('Please select image 1mb or below 1mb!', {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            this.UploadImageTOFirebase(e.target.files[0])
        }
    }


    render() {
        return (
            <Context.Consumer>
                {value => <>

                    <Studentlayout>
                        {this.state.currentdata !== '' && <>
                            <div className="content-main-section left">
                                <div className='container showdiv mt-5 studentdetail' >
                                    <div className="row ">
                                        <div className="col-10 text-sm-center mt-3 mb-3">
                                            <h1 className="text-left ml-3">Personal Detail</h1>
                                        </div>
                                        <div className="col-2 text-sm-center text-lg-right mt-3" >
                                            <button className="buttonedit btn btn-primary btn-lg" onClick={this.openModal1}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-11 text-center mt-4'>
                                            <img src={this.state.profile !== '' ? this.state.profile : profilepicture} className="profilepicture" />
                                        </div>

                                    </div>

                                    <div className='row ml-4'>
                                        <div className='col-lg-6'>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className='mt-lg-5 mt-5 d-flex text-left text-left'>
                                                        {/* <i className="fa fa-id-card usernames"></i> */}
                                                        <label className="labelDatas ml-3 mb-2">Er_No:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <label className="labelData mt-lg-5 ml-3 mb-2">{this.state.currentdata.er_num}</label>
                                                </div>



                                                <div className="col-lg-4">
                                                    <div className=' d-flex mt-4 text-left'>
                                                        <label className="labelDatas mt-lg-4 ml-3 mb-2">Mobile No:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <label className="labelData mt-lg-5 ml-3">{this.state.currentdata.phone}</label>
                                                </div>


                                                <div className="col-lg-4">
                                                    <div className=' d-flex  mt-4 text-left'>
                                                        <label className="labelDatas ml-3 mb-2">Course:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <label className="labelData   ml-3">{this.state.currentdata.courses == 1 ? <label className="labelData">Master In Webdesign</label> : this.state.currentdata.courses == 2 ? <label className="labelData">Master In Frontend Development</label> : this.state.currentdata.courses == 3 ? <label className="labelData">Master In backend Development </label> : this.state.currentdata.courses == 4 ? <label className="labelData">firebase </label> : this.state.currentdata.courses == 5 ? <label className="labelData">Master in 360 & 3D Website</label> : this.state.currentdata.courses == 6 ? <label className="labelData">Master In Fullstack Development</label> : this.state.currentdata.courses == 7 ? <label className="labelData">Master In MERN-stack Development</label> : <div className='rendercon'></div>}</label>
                                                </div>

                                                <div className="col-lg-4">


                                                    <div className=' d-flex mt-4  text-left'>
                                                        <label className="labelDatas  ml-3 mb-2">Joining Date:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <label className="labelData mt-lg-5  ml-3">{this.state.doj}</label>
                                                </div>



                                            </div>
                                        </div>



                                        <div className='col-lg-6 '>
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <div className='mt-lg-5 d-flex mt-4 text-left'>
                                                        <label className="labelDatas ml-3 mb-2">Name:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <label className="labelData  mt-lg-5  ml-3">{this.state.currentdata.f_name}  {this.state.currentdata.l_name}</label>
                                                </div>


                                                <div className="col-lg-3">
                                                    <div className='mt-lg-5 d-flex mt-4 text-left'>
                                                        <label className="labelDatas  ml-3 mb-2">Email:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <label className="labelData mt-lg-5 ml-3" style={{ wordBreak: "break-all" }}>{this.state.currentdata.email}</label>
                                                </div>


                                                <div className="col-lg-3">
                                                    <div className=' mt-lg-5 d-flex mt-4 text-left '>
                                                        <label className="labelDatas ml-3 mb-2">BirthDate:</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <label className="labelData mt-lg-5 ml-3">{this.state.currentdata.dob}</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <>
                                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5312577942968237"
                                        crossorigin="anonymous"></script>
                                    <ins className="adsbygoogle"
                                        style={{ display: 'block' }}
                                        data-ad-format="autorelaxed"
                                        data-ad-client="ca-pub-5312577942968237"
                                        data-ad-slot="6654266316"></ins>
                                    <script>
                                        (adsbygoogle = window.adsbygoogle || []).push({ });
                                    </script>
                                </>
                                <div className='container mt-5 parentdetails '>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className="col-lg-12">
                                                <div className='mt-4'>
                                                    <h1 className="text-left mb-5">Parent's Detail</h1>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>

                                                <div className="row">
                                                    <div className="col-lg-4">

                                                        <div className='mt-lg-4  d-flex mt-sm-4 ml-lg-4 text-left'>
                                                            <label className="labelDatas ml-3 mb-2">Father Name:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData mt-lg-4 ml-3">{this.state.currentdata.f_f_name}</label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className='mt-lg-4  d-flex mt-sm-4 ml-lg-4 text-left'>
                                                            <label className="labelDatas ml-3 mb-2">Occupation:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData ml-3 mt-lg-4">{this.state.currentdata.occupation}</label>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className='mt-lg-4  d-flex mt-sm-4 ml-lg-4 mb-sm-4 text-left'>
                                                            <label className="labelDatas ml-3 mb-2">Phone_no:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData mt-lg-4 ml-3">{this.state.currentdata.f_phone}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container mt-5 residentalDetail '>
                                    <div className='container'>
                                        <div className="showdiv mt-3">

                                            <div className="row">
                                                <div className="col-10 text-sm-center mt-3 mb-3">
                                                    <h1 className="text-left">
                                                        Residental Detail</h1>
                                                </div>
                                                <div className="col-2 text-sm-center text-lg-right mt-3" >
                                                    <button className="buttonedit btn btn-primary btn-lg" onClick={this.openModal2}>
                                                        <i className="fa fa-pencil" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>

                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className='mt-lg-4  d-flex mt-sm-4 ml-lg-4 text-left'>
                                                            <label className="labelDatas  mb-2">Address line1:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData mt-lg-3 ">{this.state.currentdata.line_1}</label>
                                                    </div>


                                                    <div className="col-lg-4">
                                                        <div className='mt-lg-4 d-flex mt-sm-4 ml-lg-4 text-left'>
                                                            <label className="labelDatas  mb-2">Address line2:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData mt-lg-3 ">{this.state.currentdata.line_2}</label>
                                                    </div>


                                                    <div className="col-lg-4">
                                                        <div className='mt-lg-4 d-flex mt-sm-4 ml-lg-4 mb-sm-4 text-left'>
                                                            <label className="labelDatas   mb-2">City:</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8">
                                                        <label className="labelData  mt-lg-3">{this.state.currentdata.city}</label>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                        }

                        {/* rules & Regulations POPUP */}

                        <Modal show={this.state.isOpen} scrollable={true} >
                            <Modal.Header  >
                                <Modal.Title>
                                    <Navbar collapseOnSelect expand="lg" >
                                        <Container>
                                            <Navbar.Brand >Rules & Regulations</Navbar.Brand>
                                            <Navbar.Brand ><button className="btn btn-primary" onClick={this.chagees}>{this.state.language == true ? 'English' : 'Gujarati'}</button></Navbar.Brand>

                                            <Navbar aria-controls="responsive-navbar-nav" />
                                            <Nav>
                                                <Nav.Link eventKey={2} >
                                                </Nav.Link>
                                            </Nav>
                                        </Container>
                                    </Navbar>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >

                                <Rules language={this.state.language} />
                            </Modal.Body>

                            <Modal.Body >

                                <div className="condition d-flex">
                                    <input
                                        type="checkbox"
                                        name="agreement"
                                        onChange={this.handleChange}
                                    />
                                    <label for="js" className="ml-3 mt-2" > I agree with all the terms and condition </label>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className="btn btn-primary" disabled={!this.state.defaultcheked} onClick={this.clicks}>Continue</button>
                            </Modal.Footer>
                        </Modal>


                        {/* Update Personal Details POPUP */}

                        <Modal show={this.state.isOpen1} centered onHide={this.closeModal1} >
                            <Modal.Header>
                                <Modal.Title>Update Personal Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 rounded ">
                                            <img src={this.state.profile !== '' ? this.state.profile : profilepicture} className="rounded mx-auto d-block" style={{ width: "100px" }} />
                                        </div>
                                        <div className="file-input">

                                            <lable className="lbl-comn-info " > Change your Profile:</lable>
                                            <input
                                                type="file"
                                                name="file-input"
                                                id="file-input"
                                                className="file-input__input"
                                                onChange={this.handleFileChange}
                                            />
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
                                        </div>
                                    </div>
                                </div>

                                {/* <lable className="lbl-comn-info " > Change your Profile:</lable> */}

                                {/* <input type='file' className="emailstyle" onChange={this.handleFileChange} />  */}

                                <lable className="lbl-comn-info mt-2">Email</lable>
                                <input type="email" name="email" value={this.state.email} className="emailstyle" onChange={this.handleemail} />

                                <lable className="lbl-comn-info mt-2">birthdate:</lable>
                                <input type="date" value={this.state.dob} className="emailstyle" onChange={this.handledob} />

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal1}>
                                    Close
                                </Button>
                                <Button className="btn btn-priamry mt-3gi" onClick={this.handlesave} >
                                    Save Changes
                                </Button>
                            </Modal.Footer>

                        </Modal>

                        {/* Update Residental Details POPUP */}
                        <Modal show={this.state.isOpen2} centered onHide={this.closeModal2} >
                            <Modal.Header >
                                <Modal.Title>Update Residental Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                                {/* Change your Profile: <input type='file' className="emailstyle" onChange={this.handleFileChange} /> */}



                                <lable className="lbl-comn-info">Address 1:</lable>
                                <input type="text" name="line_1" value={this.state.line_1} className="emailstyle" onChange={this.handleline1} />

                                <lable className="lbl-comn-info mt-3">Address 2:</lable>
                                <input type="text" name="line_2" value={this.state.line_2} className="emailstyle" onChange={this.handleline2} />

                                <lable className="lbl-comn-info mt-3">City: </lable>
                                <input type="text" name="city" value={this.state.city} className="emailstyle" onChange={this.handlecity} />



                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal2}>
                                    Close
                                </Button>
                                <Button className="btn btn-priamry mt-3gi" onClick={this.handlesaveaddress} >
                                    Save Changes
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </Studentlayout>
                    <button className='d-none' id="profile-btn" onClick={() => { value.setCurrentData(this.state.currentdata); }}>click me</button>
                    {/* <button className='d-none' id="get-all-data" onClick={() => { this.getCurrentStudentData(value) }}>click me</button> */}
                    <ToastContainer />
                </>}

            </Context.Consumer>

        )
    }
}




