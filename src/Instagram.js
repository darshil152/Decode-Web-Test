import React, { useEffect, useRef, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useFormik } from 'formik';
import likes from '../src/Image/237892-P3CZOX-185-removebg-preview.png'
import './Instagram.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import StudentSidebar from "./studentlayout/studentsidebar";
import StudentHeader from "./studentlayout/studentheader";
import AdminSidebar from "./adminlayout/adminsidebar";
import AdminHeader from "./adminlayout/adminheader";
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';
import StudentLayout from './studentlayout/studentlayout';
import firebaseApp from './firebase/firebase';
import { toast } from 'react-toastify';
import { all } from 'axios';
import Post from './Post';
import { Portal } from '@material-ui/core';
import Profile from './Profile';

export default function Instagram() {
    const Navigate = useNavigate()
    const disabledref = useRef(null)
    const [alldata, setAlldata] = useState([])
    const [urlId, setUrlId] = useState("")
    const [caption, setCaption] = useState([])
    const [selectedImages, setSelectedImages] = useState('');
    const [show2, setShow2] = useState(false);
    const [profile, setProfile] = useState([])
    const [analyticsAdded, setanalyticsAdded] = useState(false)



    const [prview, setPrview] = useState('')
    const [Param, setParam] = useState('')
    const [show, setShow] = useState(false);
    const [lastPostId, setlastPostId] = useState()
    const currentDateTime = moment();

    // Formatting the date and time using Moment.js

    useEffect(() => {
        getdata()
        getprofile()
        let url = window.location.href
        let Id = url.substring(url.lastIndexOf('/') + 1)
        setUrlId(Id)
        getProfileByID(Id)

        var result = window.location.href.split('/');
        var Param = result[result.length - 2];
        setParam(Param)
    }, [])


    const getProfileByID = (id) => {
        let db = firebaseApp.firestore();
        let data = []
        db.collection("Students").where('er_num', '==', Number(id))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    if (Number(localStorage.getItem('userrole')) !== 2) {
                        if (doc.data().password != localStorage.getItem('sc')) {
                            window.location.href = '/'
                        } else {
                            if (!analyticsAdded) {
                                addAnalyticsInDatabase(doc)
                            }
                        }
                    }

                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const makeid = (length) => {
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

    const removeLayer = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");

    };

    const addAnalyticsInDatabase = (doc) => {

        setanalyticsAdded(true)
        let url = window.location.href;
        if (url.includes('localhost') || url.includes('decodesoft.web.app' || doc.data().er_num == 23000001)) {
            console.log('not added')
        } else {
            let analyticsQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("DecodeAnalytics").add({
                    er_num: doc.data().er_num,
                    f_name: doc.data().f_name,
                    l_name: doc.data().l_name,
                    page: 'diaries',
                    start_time: Date.now(),

                    date: new Date(),
                    id: makeid(6)

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

    const handleClose2 = () => {
        setShow2(false);
        setPrview('')
        setCaption('')
    }
    const handleShow2 = () => setShow2(true);

    const UploadImage = (file) => {
        for (let i = 0; i < file.length; i++) {
            if (file[i].size <= 2 * 1024 * 1024) {
                const reader = new FileReader();

                reader.onload = function () {
                    const base64String = reader.result;
                    setPrview(base64String)
                    // Now you can use base64String or call your Firebase upload function.

                };
                UploadImageTOFirebase(file[i])

                reader.readAsDataURL(file[i]);
            } else {
                toast.error('File size exceeds 2 MB. Please choose a smaller file.');
            }
        }
    };

    const UploadImageTOFirebase = (file) => {
        const guid = () => {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return String(s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4());
        }


        let myPromise = new Promise((resolve, reject) => {

            const myGuid = guid();
            const storageUrl = firebaseApp.storage('gs://hey1-portfolio.appspot.com/')
            const storageRef = storageUrl.ref();
            const uploadTask = storageRef.child('decode').child('socialMeadia').child(myGuid).put(file)
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
                        .child('socialMeadia')
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
            setSelectedImages(url)

        }).catch(err => {
            console.log('error caught', err)
        })
    }

    const getdata = () => {
        let db = firebaseApp.firestore();
        let data = [];

        db.collection("SocialMedia")
            .orderBy("createdAT", "desc")
            .limit(50)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]

                    data.push(doc.data())
                    setAlldata(data)
                    // setlastPostId(lastVisible)

                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }

    // const handleNextData = () => {

    //     let db = firebaseApp.firestore();

    //     db.collection("SocialMedia")
    //         .orderBy("createdAT", "desc")
    //         .startAfter(lastPostId)
    //         .limit(2)
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {

    //                 var lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1]
    //                 data.push(doc.data())
    //                 setAlldata(data)

    //                 setlastPostId(lastVisible)
    //                 console.log(alldata, "Nextpost")

    //             });
    //         })
    //         .catch((error) => {
    //             console.log("Error getting documents: ", error);
    //         });
    // }



    const UpdateData = (likeArray, Id, count) => {

        const db = firebaseApp.firestore();
        db.collection('SocialMedia').where("postId", "==", Number(Id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("SocialMedia").doc(doc.id);
                return updateCollection.update({
                    like: likeArray,
                    likeCount: count
                })
                    .then(() => {
                        disabledref.current.handleDisabled();
                        console.log("Document successfully updated!");
                        getdata();

                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });
            });
        }).catch(err => {
            console.error(err);
        });
    };

    const UpdateCommentData = (Id, allcomment) => {

        const db = firebaseApp.firestore();
        db.collection('SocialMedia').where("postId", "==", Number(Id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("SocialMedia").doc(doc.id);
                return updateCollection.update({
                    comment: allcomment
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        getdata();
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });
            });
        }).catch(err => {
            console.error(err);
        });
    };
    const getprofile = () => {
        let db = firebaseApp.firestore();
        let data = []
        db.collection("Students")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {



                    data.push({ profile_img: doc.data().profile_img, f_name: doc.data().f_name, er_num: doc.data().er_num })
                    setProfile([...profile, data])

                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }



    const handleSubmit = () => {
        let findUser = profile[0].findIndex((i) => i.er_num == urlId);

        console.log("Index of user:", findUser);
        let instagrmaprofile = profile[0][findUser]
        console.log(instagrmaprofile)
        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("SocialMedia").add({
                img: selectedImages,
                caption: caption,
                postId: Date.now(),
                like: [],
                createdAT: Date.now(),
                likeCount: 0,
                userId: urlId,
                profile_img: instagrmaprofile.profile_img,
                f_name: instagrmaprofile.f_name,
                comment: []
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);

                    resolve(docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                    reject(error);
                });
        });
        registerQuery.then(result => {
            toast.success("Add New Post")
            handleClose2()
            getdata()
        }).catch(error => {
            console.error(error)
        })

    }




    return (
        <>
            {urlId == 'heaven' ? <>
                <AdminHeader />
                <AdminSidebar />
            </> : <>
                <StudentHeader />
                <StudentSidebar />
            </>}

            <div className="container-fluid pt-5 pb-5 ps-0 pe-0 overflow-hidden">

                {Param === "socialmedia" ? (<><button id='addPost' className='btn btn-primary add-post' onClick={handleShow2}> New Post</button></>) : (<></>)}

                <div className="row d-flex justify-content-center pt-5 m-0 p-0">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6 m-0 p-0">
                        {alldata.map((i, index) => {

                            return (
                                <Post alldata={i} ref={disabledref} index={index} UpdateCommentData={UpdateCommentData} UpdateData={UpdateData} textarea={i.caption} postId={i.postId} count={i.likeCount} mainimg={i.img} like={i.like} />
                            )
                        })}

                    </div>
                    <div className="col-lg-6"></div>
                </div>

                <ToastContainer style={{ fontSize: "14px", zIndex: "99999999999999999999" }} />


            </div >



            <Modal show={show2} onHide={handleClose2} centered>
                <Modal.Header >
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>





                    <div className="file-input">

                        <lable className="lbl-comn-info " > Select Files:</lable>
                        <input
                            type="file"
                            name="file-input"
                            id="file-input"
                            className="file-input__input"
                            onChange={(e) => {
                                UploadImage(e.target.files);
                                // formik.setFieldValue('image', e.target.files[0]);
                            }}
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
                            <span>Upload Image</span></label>


                    </div>
                    {prview ? (

                        <img src={prview} width={150} height={150} alt='!..' />
                    ) : (<>
                    </>)}

                    <br />


                    <div>
                        <lable className="lbl-comn-info " > Caption:</lable>
                        <input
                            type='text'
                            name="textarea"
                            className="emailstyle"

                            placeholder='Caption'
                            onChange={(e) => setCaption(e.target.value)}
                        />

                    </div>






                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
        </>
    )
}










