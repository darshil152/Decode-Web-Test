import React, { Component } from 'react'
import firebaseApp from './firebase/firebase'
import { Modal, Button } from "react-bootstrap";
import StudentLayout from './studentlayout/studentlayout';

import AdminLayout from './adminlayout/adminlayout'
import Card from 'react-bootstrap/Card';

export default class Myprojects extends Component {
    state = {
        isOpen: false,
        name: "",
        profile: "",
        url: "",
        allprojects: [],
        id: "",
        stid: "",
        stgithub: [],
        mylink: [],
        currentdata: {},
        sc: localStorage.getItem('sc'),
        analyticsAdded: false

    };

    componentDidMount() {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id }, () => {
            this.getalldata()
        })

    }

    getalldata = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())
                this.setState({ allprojects: entry, currentdata: doc.data(), stid: doc.data().er_num, stgithub: doc.data().githubs ? doc.data().githubs : [] }, () => {
                    if (!this.state.analyticsAdded) {
                        this.addAnalyticsInDatabase();
                    }

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
                    page: 'my project',
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


    handlefile = (e) => {
        this.UploadImageTOFirebase(e.target.files[0])
    }
    handlename = (event) => {
        this.setState({ name: event.target.value })
    }
    handleurl = (event) => {
        this.setState({ url: event.target.value })
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
            const uploadTask = storageRef.child('decode').child('github').child(myGuid).put(file)
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
                        .child('github')
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
        }).catch(err => {
            console.log('error caught', err)
        })
    }




    savedata = () => {
        let alreadyAdded = false

        let obj = {
            name: this.state.name,
            profile: this.state.profile,
            url: this.state.url,
            id: Date.now()
        }
        for (let i = 0; i < this.state.allprojects.length; i++) {

            if (Number(this.state.stid) == Number(this.state.id)) {
                this.state.mylink = this.state.stgithub
                this.state.mylink.push(obj);
            }
        }

        const db = firebaseApp.firestore();
        db.collection('Students').where('er_num', '==', Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    githubs: this.state.mylink

                })
                    .then(() => {
                        this.closeModal();
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

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    render() {
        return (
            <StudentLayout>
                <div className="content-main-section">
                    <div className='container'>
                        <button className='btn btn-primary primary-btn m-4' onClick={this.openModal}>Add New Project</button>
                        <div className='row'>
                            {
                                this.state.stgithub && this.state.stgithub.length > 0 && this.state.stgithub.map((items) => {
                                    return (
                                        <div className='col-lg-3 col-md-4 mb-3 mt-3 '>
                                            <a target='_blank' href={items.url} >
                                                <div className="card">
                                                    <img className="img-fluid project-img" src={items.profile} alt="Project Image" />
                                                    <div className="card-body">
                                                        <b className="card-text">{items.name}</b>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                        <Modal.Header >
                            <Modal.Title>Add Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <label className='lablepeoject' for="name">Project Name:</label>
                            <input type="text" onChange={this.handlename} className='form-control input-style' required />

                            {/* <label className='lablepeoject' for="file">Projec Image:</label>
                            <input type="file" onChange={this.handlefile} className='form-control' required /> */}

                            <label className='lablepeoject' for="file">Projec Image:</label>
                            <label className="mt-3 input-file">
                                <b className="btn btn-primary primary-btn">
                                    <i className="material-icons"></i> Choose a File</b>
                                <input type="file" className="fileInput" onChange={this.handlefile} multiple />
                            </label>






                            <label className='lablepeoject' for="url">Project Url:</label>
                            <input type="url" onChange={this.handleurl} className='form-control input-style' required />




                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.savedata}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </StudentLayout >

        )
    }
}
