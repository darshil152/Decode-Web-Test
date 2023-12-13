import React from 'react'
import StudentLayout from './studentlayout/studentlayout'
import firebaseApp from './firebase/firebase'
import { useState, useEffect } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import img from "./Yellow Modern Warning with Sun Rays Instagram Story.png"
import not from "./newdesignillustrations190211443.jpg"

import 'react-toastify/dist/ReactToastify.css';
let myplacement = []
let appliedByMe = []
export default function Studeneplacement() {



    useEffect(() => {
        const url = window.location.href;
        var ids = url.substring(url.lastIndexOf('/') + 1);
        setIds(ids)
        getacheck(ids)
        getallstudent()
        getAllData()

    }, [])


    const [showModal4, setShow4] = useState(false);




    const closemodel = () => {
        setShow4(false);
    }

    const handleClose4 = () => {
        savedata()
        setShow4(false);
    }


    const handleShow4 = () => {
        setShow4(true);
    }



    const [showModal10, setShow10] = useState(false);






    const [data, setData] = useState([])
    const [allCompany, setallCompany] = useState([])
    const [token, setToken] = useState(localStorage.getItem('sc'))
    const [data1, setData1] = useState([])
    const [particular, setParticular] = useState([])
    const [remove, setRemove] = useState([])
    const [file, setFile] = useState('')
    const [student, setStudent] = useState([])
    const [pass, setPass] = useState("")
    const [showdata, setShowdata] = useState('')
    const [showModal, setShow] = useState(false);
    const [description, setDescriptiion] = useState('')
    const [id, setId] = useState('')
    const [Uids, setIds] = useState([])
    const [alreadyApplied, setAlreadyApplied] = useState(false)
    const [cantapply, setCannot] = useState(false)
    const [applybyStudent, setapplybyStudent] = useState([])
    const [showModal1, setShow1] = useState(false);
    const [preview, setPreview] = useState('')
    const [check, setCheck] = ("1")
    const [pstatus, setPstaus] = useState('')
    const [currentCompany, setCurrentCompany] = useState('')
    const [appliedCompany, setappliedCompany] = useState([])

    const [feespe, setFeespr] = useState('')
    const [me, setMe] = useState([])

    const [resume, setResume] = useState('')
    const [placed, setPlaced] = useState('')


    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => {
        let companyData = []

        for (let i = 0; i < allCompany.length; i++) {
            for (let j = 0; j < applybyStudent.length; j++) {
                if (applybyStudent[j] == allCompany[i].id) {
                    companyData.push(allCompany[i])
                }
            }

        }
        setappliedCompany(companyData)
        setShow10(true);
    }

    const handleFileChange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        setFile(file)
        reader.onloadend = () => {
            setPreview(reader.result)
        }
        reader.readAsDataURL(file);
    }


    const UploadImageTOFirebase = () => {
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
            const uploadTask = storageRef.child('decode').child('placement').child(myGuid).put(file)
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
                        .child('placement')
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
            setPreview(url)
            upadateresume(url)

        }).catch(err => {
            console.log('error caught', err)
        })
    }


    const savedata = () => {
        UploadImageTOFirebase()
    }


    const upadateresume = (url) => {

        if (url) {
            const db = firebaseApp.firestore();
            db.collection('Students').where("er_num", "==", Number(Uids)).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    var updateCollection = db.collection("Students").doc(doc.ref.id);

                    return updateCollection.update({
                        resume: url,
                    })
                        .then(() => {
                            toast.success("Your Resume upload successfully.")

                            console.log("Document successfully updated!");

                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });
                })
            }).catch(err => {
                console.error(err)
            });
        }


    }




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


    const handleDelete = (data) => {
        const filteredPeople = particular.filter((item) => item.Roll_num !== Number(Uids));
        myplacement = filteredPeople
        updatestudets(filteredPeople)

        appliedByMe = applybyStudent.filter((item) => item !== data.id);
        setapplybyStudent(appliedByMe)
        updateDatabaseForAppliedByMe(appliedByMe)

        // const abc = x.filter((item) => item.id !== cmpid);

    };


    const handleClose = () => {
        setShow(false);
    }



    const changebutton = (dataa) => {
        for (let i = 0; i < dataa.length; i++) {
            if (dataa[i].Roll_num == Number(Uids)) {
            }
        }


    }




    const handleShow = (data) => {


        if (feespe > 99 && resume !== "" && placed == Number(0)) {
            setCannot(true)

        } else {
            setCannot(false)
        }


        setParticular(data.applyby)
        changebutton(data.applyby)
        myplacement = data.applyby


        let applied = false
        for (let i = 0; i < myplacement.length; i++) {
            if (myplacement[i].Roll_num == Number(Uids)) {
                applied = true
            }
        }

        if (applied) {
            setAlreadyApplied(true)
        } else {
            setAlreadyApplied(false)
        }

        setId(data.id)
        setShow(true)
        setShowdata(data)
    }




    const handleClose1 = (items) => {

        let obj = {
            date: new Date().toJSON().slice(0, 10),
            Roll_num: Number(Uids),
            uID: makeid(8),
        };

        let appliedSuccess = false

        for (let i = 0; i < myplacement.length; i++) {
            if (myplacement[i].Roll_num == Number(Uids)) {
                appliedSuccess = true
            }

        }


        if (appliedSuccess) {
            toast.warn('Your Application Already Added!!')
        } else {
            myplacement.push(obj)
            appliedByMe.push(currentCompany)
            setapplybyStudent(appliedByMe)
            updateDatabaseForAppliedByMe(appliedByMe)
            updatestudet()
        }
        setShow1(false);

    }




    const handleShow1 = (data) => {
        setCurrentCompany(data.id)
        if (pstatus == Number(check)) {
            toast.error("You cannot apply.")
        } else {
            setShow(false)
            setShow1(true);
        }

    }


    const updateDatabaseForAppliedByMe = (appliedByMe) => {

        const db = firebaseApp.firestore();
        db.collection('Students').where('er_num', '==', Number(Uids)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    applybyme: appliedByMe
                })
                    .then(() => {
                        let companyData = []

                        for (let i = 0; i < allCompany.length; i++) {
                            for (let j = 0; j < appliedByMe.length; j++) {
                                if (appliedByMe[j] == allCompany[i].id) {
                                    companyData.push(allCompany[i])
                                }
                            }

                        }
                        setappliedCompany(companyData)

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


    const updatestudets = (people) => {
        const db = firebaseApp.firestore();
        db.collection('Placement').where('id', '==', id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Placement").doc(doc.ref.id);

                return updateCollection.update({
                    applyby: people
                })
                    .then(() => {
                        toast.warn("Your application withdraw successfully.")
                        setShow(false)
                        getAllData()
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


    const updatestudet = () => {

        const db = firebaseApp.firestore();
        db.collection('Placement').where('id', '==', id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var updateCollection = db.collection("Placement").doc(doc.ref.id);

                return updateCollection.update({
                    applyby: myplacement
                })
                    .then(() => {
                        getAllData()

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

    const getallstudent = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Students').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data().er_num)
                setStudent(entry)
            });

        }).catch(err => {
            console.error(err)
        });
    }

    const getacheck = (ids) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(ids)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {


                appliedByMe = doc.data().applybyme ? doc.data().applybyme : []
                setapplybyStudent(appliedByMe)
                setFeespr(doc.data().feesPr)
                setResume(doc.data().resume)
                setPlaced(doc.data().Placementstatus)

                setPstaus(doc.data().Placementstatus)
                if (Number(localStorage.getItem('userrole')) !== 2) {
                    if (token !== doc.data().password) {
                        window.location.href = '/'
                    }
                }
            });

        }).catch(err => {
            console.error(err)
        });
    }





    const getAllData = () => {
        let alldata = []
        let activeData = []
        let inactiveData = []
        const db = firebaseApp.firestore();
        db.collection('Placement').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                alldata.push(doc.data())
                if (doc.data().status == 1) {
                    activeData.push(doc.data())
                } else {
                    inactiveData.push(doc.data())
                }

                setallCompany(alldata)
                setData(activeData)
                setData1(inactiveData)

            });
        }).catch(err => {
            console.error(err)
        });
    }




    return (
        <>

            <StudentLayout>
                <div className="content-main-section left">
                    <div className="container">
                        <button className='btn btn-primary ml-5' style={{ marginTop: "55px" }} onClick={handleShow10}>Companies which applied by me</button>

                        <button className='btn btn-primary ml-5' style={{ marginTop: "55px" }} onClick={handleShow4}>Upload Your resume Here  +</button>
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className='text-center mt-5 mb-3' >Terms and condition for placement.</h1>
                                <h5 > 1)  If you want to place in the company so,  You have to pay your full fees.</h5>
                                <h5 > 2)  You must have to upload your resume, otherwise you are not eligible for placement.</h5>
                                <h5 > 3)  Once you placed in one company after you are not eligible for apply another company.</h5>
                            </div>
                        </div>
                    </div>






                    <h1 className='text-center mt-5' >Companies which are open for recruitment</h1>
                    <div className='container mt-5'>
                        <div className='row '>
                            {
                                data.length == 0 ? <img src={not} /> :

                                    data && data.length > 0 && data.map((i) => {
                                        return (

                                            <div className="wrapper col-lg-4 col-sm-6 mb-4">
                                                <div className="card">
                                                    <img src={i.logo} className='plogo' />
                                                    <div className="mr-5 info aaaa">
                                                        <h1 style={{ color: "#96bfe6", fontSize: "30px" }}>{i.companyname}</h1 >
                                                        <h1 style={{ color: "#96bfe6", fontSize: "40px" }}>{i.jobrole == 1 ? <label className="labelDatass" style={{ color: "white" }}>Master In Webdesign</label> : i.jobrole == 2 ? <label className="labelDatass" style={{ color: "white" }}>Master In Frontend Development</label> : i.jobrole == 3 ? <label className="labelDatass" style={{ color: "white" }}>Master In backend Development </label> : i.jobrole == 4 ? <label className="labelDatass" style={{ color: "white" }}>firebase </label> : i.jobrole == 5 ? <label className="labelDatass" style={{ color: "white" }}>Master in 360 & 3D Website</label> : i.jobrole == 6 ? <label className="labelDatass" style={{ color: "white" }}>Master In Fullstack Development</label> : i.jobrole == 7 ? <label className="labelDatass" style={{ color: "white" }}>Master In MERN-stack Development</label> : <div className='rendercon'></div>}</h1>



                                                        <div className='d-flex align-items-center abcde'>
                                                            <div className="a">
                                                                <label className="labelDatass" style={{ color: "white" }}>Apply by:</label>
                                                            </div>
                                                            <div className="b">
                                                                <h5 style={{ color: "#96bfe6", fontSize: "20px" }} className='ml-2'> &nbsp;{i.applyby.length}</h5>
                                                            </div>
                                                        </div>

                                                        <button className='btn btn-primary sss' onClick={() => handleShow(i)}>Show detail</button>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                            }


                            <div className="container">
                                <h1 className='text-center mt-5'>Inactive Company</h1>
                                <div className="row">
                                    {
                                        data1.length == 0 ? <img src={not} /> :
                                            data1 && data1.length > 0 && data1.map((i) => {
                                                return (

                                                    <div className="wrappers" >
                                                        <div className="card">
                                                            <img src={i.logo} className='plogo' />
                                                            <div className="mr-5 info aaaa">
                                                                <h1 style={{ color: "#96bfe6", fontSize: "30px" }}>{i.companyname}</h1 >
                                                                <h1 style={{ color: "#96bfe6", fontSize: "40px" }}>{i.jobrole == 1 ? <label className="labelDatass" style={{ color: "white" }}>Master In Webdesign</label> : i.jobrole == 2 ? <label className="labelDatass" style={{ color: "white" }}>Master In Frontend Development</label> : i.jobrole == 3 ? <label className="labelDatass" style={{ color: "white" }}>Master In backend Development </label> : i.jobrole == 4 ? <label className="labelDatass" style={{ color: "white" }}>firebase </label> : i.jobrole == 5 ? <label className="labelDatass" style={{ color: "white" }}>Master in 360 & 3D Website</label> : i.jobrole == 6 ? <label className="labelDatass" style={{ color: "white" }}>Master In Fullstack Development</label> : i.jobrole == 7 ? <label className="labelDatass" style={{ color: "white" }}>Master In MERN-stack Development</label> : <div className='rendercon'></div>}</h1>




                                                                <div className='d-flex align-items-center abcde'>
                                                                    <div className="a">
                                                                        <label className="labelDatass" style={{ color: "white" }}>Apply by:</label>
                                                                    </div>
                                                                    <div className="b">
                                                                        <h5 style={{ color: "#96bfe6", fontSize: "20px" }} className='ml-2'> &nbsp;{i.applyby.length}</h5>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                    }
                                </div>
                            </div>

                            {
                                data && data.length > 0 && data.map((items) => {
                                    return (
                                        <>
                                            {
                                                cantapply ? <Modal show={showModal} centered onHide={handleClose}>
                                                    <Modal.Header >
                                                        <Modal.Title>{showdata.companyname}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>

                                                        <div className="asd" >
                                                            <div className='text-center'>
                                                                <img className="plogos" src={showdata.logo} alt="Card image cap" />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col lg-6 ml-3  mt-4">
                                                                    <label className="labelDatass">Company Name:</label>
                                                                </div>
                                                                <div className="col-lg-6 text-left mt-4" >
                                                                    <h5 className="card-title">{showdata.companyname}</h5>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col lg-6 ml-3  mt-4">
                                                                    <label className="labelDatass">Company website:</label>
                                                                </div>
                                                                <div className="col-lg-6 text-left mt-4" >
                                                                    <a href="#" className='card-title linksss'>{showdata.website}</a>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col lg-6 ml-3 mt-4">
                                                                    <label className="labelDatass">Job role:</label>
                                                                </div>
                                                                <div className="col-lg-6 text-left mt-4" >
                                                                    <h5 className="card-title"> {items.jobrole == 1 ? <label className="labelDatass">Master In Webdesign</label> : items.jobrole == 2 ? <label className="labelDatass">Master In Frontend Development</label> : items.jobrole == 3 ? <label className="labelDatass">Master In backend Development </label> : items.jobrole == 4 ? <label className="labelDatass">firebase </label> : items.jobrole == 5 ? <label className="labelDatass">Master in 360 & 3D Website</label> : items.jobrole == 6 ? <label className="labelDatass">Master In Fullstack Development</label> : items.jobrole == 7 ? <label className="labelDatass">Master In MERN-stack Development</label> : <div className='rendercon'></div>}
                                                                    </h5>
                                                                </div>
                                                            </div>


                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col lg-6  mt-4">
                                                                        <label className="labelDatass">Status:</label>
                                                                    </div>
                                                                    <div className="col-lg-6 text-left mt-4" >
                                                                        <h5 className="card-title"> {items.status == 1 ? <label className="labelDatass">Active</label> : <label className="labelDatass">Inactive</label>}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col lg-6  mt-4">
                                                                        <label className="labelDatass">Description:</label>
                                                                    </div>
                                                                    <div className="col-lg-6 text-left mt-4" >
                                                                        <h5 className="card-title">{ReactHtmlParser(showdata.description)}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        {alreadyApplied ? <Button variant="btn btn-danger" id="del" onClick={() => handleDelete(showdata)}>
                                                            Withdraw your application
                                                        </Button> :
                                                            <Button variant="btn btn-primary" onClick={() => handleShow1(showdata)}>
                                                                Apply Now
                                                            </Button>}


                                                    </Modal.Footer>
                                                </Modal> :

                                                    <Modal show={showModal} centered onHide={handleClose}>
                                                        <Modal.Header >


                                                            <div className="all">
                                                                <div className="cmps">
                                                                    <h2> {showdata.companyname} </h2>
                                                                </div>
                                                                <div className="not">
                                                                    <h5 style={{ backgroundColor: "red", borderRadius: "15px", color: "white", padding: "7px" }}> You are not eligible</h5>
                                                                </div>
                                                            </div>

                                                        </Modal.Header>
                                                        <Modal.Body>

                                                            <div className="asd" >
                                                                <div className='text-center'>
                                                                    <img className="plogos" src={showdata.logo} alt="Card image cap" />
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col lg-6 ml-3  mt-4">
                                                                        <label className="labelDatass">Cmp Name:</label>
                                                                    </div>
                                                                    <div className="col-lg-6 text-left mt-4" >
                                                                        <h5 className="card-title">{showdata.companyname}</h5>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col lg-6 ml-3  mt-4">
                                                                        <label className="labelDatass">Cmp website:</label>
                                                                    </div>
                                                                    <div className="col-lg-6 text-left mt-4" >
                                                                        <a href="#" className='card-title linksss'>{showdata.website}</a>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col lg-6 ml-3 mt-4">
                                                                        <label className="labelDatass">Job role:</label>
                                                                    </div>
                                                                    <div className="col-lg-6 text-left mt-4" >
                                                                        <h5 className="card-title"> {items.jobrole == 1 ? <label className="labelDatass">Master In Webdesign</label> : items.jobrole == 2 ? <label className="labelDatass">Master In Frontend Development</label> : items.jobrole == 3 ? <label className="labelDatass">Master In backend Development </label> : items.jobrole == 4 ? <label className="labelDatass">firebase </label> : items.jobrole == 5 ? <label className="labelDatass">Master in 360 & 3D Website</label> : items.jobrole == 6 ? <label className="labelDatass">Master In Fullstack Development</label> : items.jobrole == 7 ? <label className="labelDatass">Master In MERN-stack Development</label> : <div className='rendercon'></div>}
                                                                        </h5>
                                                                    </div>
                                                                </div>


                                                                <div className="card-body">
                                                                    <div className="row">
                                                                        <div className="col lg-6  mt-4">
                                                                            <label className="labelDatass">Status:</label>
                                                                        </div>
                                                                        <div className="col-lg-6 text-left mt-4" >
                                                                            <h5 className="card-title"> {items.status == 1 ? <label className="labelDatass">Active</label> : <label className="labelDatass">Inactive</label>}
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="card-body">
                                                                    <div className="row">
                                                                        <div className="col lg-6  mt-4">
                                                                            <label className="labelDatass">Description:</label>
                                                                        </div>
                                                                        <div className="col-lg-6 text-left mt-4" >
                                                                            <h5 className="card-title">{ReactHtmlParser(showdata.description)}
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </Modal.Body>

                                                    </Modal >

                                            }

                                            <Modal show={showModal1} centered >
                                                <Modal.Header >
                                                    <Modal.Title>Warning</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>

                                                    <label htmlFor="labelDatass" className='labelDatass'> Are you sure you want to apply for job!!</label>
                                                </Modal.Body>
                                                <Modal.Footer>



                                                    <Button variant="secondary" onClick={() => setShow1(false)}>
                                                        No
                                                    </Button>
                                                    <Button variant="primary" onClick={() => handleClose1(items)}>
                                                        Yes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal >


                                        </>
                                    )
                                })
                            }



                            <Modal show={showModal4} centered >
                                <Modal.Header >
                                    <Modal.Title>Upload resume</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <div className="a">
                                        <lable className="lbl-comn-info mt-2">Upload Resume </lable>
                                        <input type="file" className="file-input__label" multiple onChange={handleFileChange} />
                                    </div>
                                    <div className="b">

                                        {
                                            preview ? <iframe src={preview} width={600} height={450} /> : resume ? <iframe src={resume} width={600} height={450} /> : <img src={img} style={{ width: "350px", height: "512px " }} />
                                        }
                                    </div>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closemodel}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose4}>
                                        Submit
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                            <Modal show={showModal10} centered onHide={handleClose10}>
                                <Modal.Header >
                                    <Modal.Title>Companies Which Applied By Me</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    {
                                        appliedCompany.length > 0 && appliedCompany.map((item, i) => {
                                            return (
                                                <div className="wrapper">
                                                    <div className="card mb-4"  >
                                                        <img src={item.logo} className='plogo' />
                                                        <div className="mr-5 info aaaa">
                                                            <h1 style={{ color: "#96bfe6", fontSize: "30px" }}>{item.companyname}</h1 >
                                                            <h1 style={{ color: "#96bfe6", fontSize: "40px" }}>{item.jobrole == 1 ? <label className="labelDatass" style={{ color: "white" }}>Master In Webdesign</label> : item.jobrole == 2 ? <label className="labelDatass" style={{ color: "white" }}>Master In Frontend Development</label> : item.jobrole == 3 ? <label className="labelDatass" style={{ color: "white" }}>Master In backend Development </label> : item.jobrole == 4 ? <label className="labelDatass" style={{ color: "white" }}>firebase </label> : item.jobrole == 5 ? <label className="labelDatass" style={{ color: "white" }}>Master in 360 & 3D Website</label> : item.jobrole == 6 ? <label className="labelDatass" style={{ color: "white" }}>Master In Fullstack Development</label> : item.jobrole == 7 ? <label className="labelDatass" style={{ color: "white" }}>Master In MERN-stack Development</label> : <div className='rendercon'></div>}</h1>




                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }


                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose10}>
                                        Close
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                    <ToastContainer />
                </div >

            </StudentLayout >

        </>
    )
}


