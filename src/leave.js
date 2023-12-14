




import React, { Component } from 'react'
import firebaseApp from './firebase/firebase'
import { Formik } from 'formik'
import * as Yup from "yup";
import { Context } from './contexts/HeaderContext';
import MUIDataTable from "mui-datatables";
import { Modal, Button } from "react-bootstrap";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import StudentLayout from './studentlayout/studentlayout';
import { number } from 'yup/lib/locale';
import { ref } from 'firebase/database';

export default class leave extends Component {
    constructor() {
        super()

        this.state = {
            analyticsAdded: false,
            profile: '',
            rolls: "",
            userData: "",
            id: "",
            rndata: [],
            finaldata: {},
            leave: "",
            allstudent: [],
            personal: [],
            allleave: [],
            studentallleave: [],
            isOpen: false,
            sc: localStorage.getItem('sc'),
            finalstatus: "",
            isOpen1: false,
            value: "",
            tableMeta: "",
            idToRemove: '',

            columns: [
                {
                    name: "date",
                    label: "Date",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "erNum",
                    label: "ErNum",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "f_name",
                    label: "F_name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },



                // {
                //     name: "Uid",
                //     label: "Uid",
                //     options: {
                //         filter: true,
                //         sort: true,
                //     },

                // },
                // {
                //     name: "id",
                //     label: "id",
                //     options: {
                //         filter: true,
                //         sort: true,
                //     },

                // },

                {
                    name: "reason",
                    label: "Reason",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "status",
                    label: "status",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    {value == 0 ? <h6 style={{ color: "black", backgroundColor: "#FFBF00", borderRadius: "15px" }} className="text-center p-3"> sent</h6> : value == 1 ? <h6 style={{ color: "black", backgroundColor: "green", borderRadius: "15px" }} className="text-center p-3">  Approved</h6> : <h6 style={{ color: "white", backgroundColor: "#C70039", borderRadius: "15px" }} className="text-center p-3"> Rejected</h6>}
                                </>
                            );
                        },

                    },

                },
                {
                    name: "id",
                    label: "Action",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    {tableMeta.rowData[4] == 0 ? < button className='btn btn-primary primary-btn' onClick={() => this.removeleave(value, tableMeta)} style={{ padding: "10px", width: "90px", borderRadius: "15px" }}>Remove</button > : < button disabled title="Can't Delete this leave application" className='btn btn-primary primary-btn' style={{ padding: "10px", width: "90px", borderRadius: "15px" }}>Remove</button >}
                                </>
                            );
                        },

                    },

                },
            ],
            options: {
                selectableRowsHideCheckboxes: true,
                pagination: false,
            }

        }
    }


    componentDidMount() {
        // document.getElementById('get-all-data').click()
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id }, () => {
            this.getAllData();
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

    addAnalyticsInDatabase = () => {
        this.setState({ analyticsAdded: true })
        let url = window.location.href;
        if (url.includes('localhost') || url.includes('decodesoft.web.app' || this.state.currentdata.er_num == 23000001)) {
            console.log('not added')
        } else {
            let analyticsQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("DecodeAnalytics").add({
                    er_num: this.state.allstudent.er_num,
                    f_name: this.state.allstudent.f_name,
                    l_name: this.state.allstudent.l_name,
                    page: 'leave',
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



    removeleave = (value, tableMeta) => {

        this.setState({ value, tableMeta, idToRemove: value }, () => {
            this.openModal1();
        })
    }

    removefinalleave = () => {
        let allleave = this.state.allleave
        allleave = allleave.filter((item) => item.id !== this.state.idToRemove)
        this.setState({ allleave }, () => {

            if (this.state.idToRemove == this.state.tableMeta.rowData[5]) {

                const db = firebaseApp.firestore();

                db.collection('Leave').where("id", "==", this.state.idToRemove).get().then((querySnapshot) => {

                    querySnapshot.forEach((doc) => {

                        db.collection("Leave").doc(doc.ref.id).delete().then(() => {
                            console.log("Document successfully deleted!");
                            this.updateleave();
                            this.closeModal1();
                        }).catch((error) => {
                            console.error("Error removing document: ", error);
                        });
                    })
                }).catch(err => {
                    console.error(err)
                });
            }
        })

    }



    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    handleFileChange = (e) => {
        this.UploadImageTOFirebase(e.target.files[0])
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
                console.log(this.state.profile)
            })
        }).catch(err => {
            console.log('error caught', err)
        })
    }

    getAllData = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ allstudent: doc.data(), studentallleave: doc.data().leave }, () => {
                    if (!this.state.analyticsAdded) {
                        this.addAnalyticsInDatabase();
                    }

                    this.setState({ personal: this.state.allstudent, allleave: this.state.allstudent.leave ? this.state.allstudent.leave : [] })
                })
                if (Number(localStorage.getItem('userrole')) !== 2) {
                    if (this.state.sc !== doc.data().password) {
                        window.location.href = '/'
                    }
                }

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


    savedata = (formData) => {

        let leaveId = this.makeid(8)
        const db = firebaseApp.firestore();
        let registerQuery = new Promise((resolve, reject) => {

            db.collection("Leave").add({
                date: formData.date,
                reason: formData.reason,
                status: 0,
                proof: this.state.profile,
                erNum: this.state.personal.er_num,
                Uid: this.state.personal.id,
                f_name: this.state.personal.f_name,
                l_name: this.state.personal.l_name,
                createdAt: formData.createdAt,
                id: leaveId,

            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    // this.allleave();
                    let templeave = this.state.allleave

                    let obj = {
                        date: formData.date,
                        reason: formData.reason,
                        status: 0,
                        erNum: this.state.personal.er_num,
                        id: leaveId,
                        proof: this.state.profile,
                        Uid: this.state.personal.id,
                        f_name: this.state.personal.f_name,
                        l_name: this.state.personal.l_name,
                        createdAt: formData.createdAt,
                    }
                    templeave.push(obj)
                    this.setState({ allleave: templeave }, () => {
                        this.updateleave();
                        toast.success("Leave application submitted successfully", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.closeModal();
                    })
                })
                .catch(function (error) {
                    console.error("Please check form again ", error);
                    reject(error);
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
        }).catch(error => {
            console.error(error)
        })
    }



    updateleave = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    leave: this.state.allleave,

                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        this.getAllData()
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




    render() {
        return (
            <Context.Consumer>
                {
                    value => <>
                        <StudentLayout>
                            <div className="content-main-section">

                                <div className='container'>
                                    <div className='row mt-5' >
                                        <button className='btn btn-primary primary-btn' style={{ width: 'auto' }} onClick={this.openModal}>
                                            Apply for leave application
                                        </button>


                                    </div>

                                    <div className='row'>
                                        <div className='col-lg-12 mt-5'>
                                            <CacheProvider value={this.muiCache}>
                                                <ThemeProvider theme={createTheme()}>
                                                    <MUIDataTable
                                                        title={"Your leave List"}
                                                        data={this.state.studentallleave}
                                                        columns={this.state.columns}
                                                        options={this.state.options}
                                                    />
                                                </ThemeProvider>
                                            </CacheProvider>
                                        </div>
                                    </div>


                                    <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                                        <Modal.Header >
                                            <Modal.Title>Leave application</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body cla>

                                            <Formik
                                                initialValues={{
                                                    createdAt: Date.now(),

                                                    date: new Date().toJSON().slice(0, 10),
                                                    reason: "",

                                                }}

                                                validationSchema={Yup.object().shape({
                                                    reason: Yup.string()
                                                        .required("Reason is Required")
                                                })}
                                                onSubmit={(values) => {
                                                    this.savedata(values)

                                                }}
                                            >
                                                {({ values, errors, handleSubmit, handleChange, handleBlur, setFieldValue }) => {
                                                    return (
                                                        <div className="container">
                                                            <div className='row'>
                                                                <div className='col-lg-12'>

                                                                    <form onSubmit={handleSubmit}>

                                                                        <div className="inputDivs">
                                                                            <label for="date" className="inputLabels">Date:</label>
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

                                                                        <div className="inputDivs">
                                                                            <label for="reason" className="inputLabels"> Reason:</label>
                                                                            <input
                                                                                type="text"
                                                                                name="reason"
                                                                                onBlur={handleBlur}
                                                                                onChange={handleChange}
                                                                                value={values.reason}
                                                                                className="form-control input-style"
                                                                            />
                                                                            <span className="error" style={{ color: "red" }}>
                                                                                {errors.reason}
                                                                            </span>
                                                                        </div>


                                                                        <div className="inputDivs">
                                                                            <label className='lablepeoject' for="file">leave Proofs:</label>
                                                                            <label className="input-file">
                                                                                <b className="btn btn-primary primary-btn">
                                                                                    <i className="material-icons"></i> Choose a File</b>
                                                                                <input type="file" className="fileInput" onChange={this.handleFileChange} multiple />
                                                                            </label>
                                                                        </div>

                                                                        {/* <label for="file" className="input  Labels"> Reason:</label>
                                                                        <input id="file" name="file" type="file" />
                                                                        <span className="error" style={{ color: "red" }}>
                                                                            {errors.file}
                                                                        </span> */}



                                                                        <div className="buttonWrapper mb-5">
                                                                            <button type="submit" id="submitButton" className=" submitButton pure-button pure-button-primary">
                                                                                <span>Submit</span>
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    );
                                                }}
                                            </Formik>



                                        </Modal.Body>

                                    </Modal>


                                    <Modal show={this.state.isOpen1} centered onHide={this.closeModal1}>
                                        <Modal.Header >
                                            <Modal.Title style={{ fontFamily: "'Jost', sans-serif" }} className='text-center'>Confirm Of Leave</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h3 style={{ fontFamily: "'Jost', sans-serif" }}>Are you sure you want to delete leave.</h3>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.closeModal1}>
                                                Close
                                            </Button>
                                            <Button variant="btn btn-primary primary-btn" onClick={this.removefinalleave}>
                                                Confirm
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>


                                </div>
                            </div>
                            <ToastContainer />
                        </StudentLayout>
                        {/* <button className='d-none' id="get-all-data" onClick={() => { this.getAllData(value) }}>click me</button> */}
                    </>
                }
            </Context.Consumer>
        )
    }
}
