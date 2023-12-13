import React from 'react'
import AdminLayout from './adminlayout/adminlayout'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from "react";
import firebaseApp from './firebase/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import { useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';



export default function Placement() {

    const [file, setFile] = useState('')
    const [id, setId] = useState('',)
    const [preview, setPreview] = useState('')
    const [cmpname, setCmpname] = useState("");
    const [cmpwebsite, setCmpwebsite] = useState("");
    const [cmpjob, setCmpjob] = useState("");
    const [cmplogo, setCmplogo] = useState("");
    const [cmpdescription, setCmpdescription] = useState("");
    const [showModal, setShow] = useState(false);
    const [data, setData] = useState([])
    const [applied, setApplied] = useState([])
    const [showModal1, setShow1] = useState(false);


    const [value, setValue] = useState("")
    const [meta, setMeta] = useState('')



    const [showModal6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);

    const handleShow6 = (value, tableMeta) => {
        setShow6(true);
        setValue(value)
        setMeta(tableMeta)
    }


    const handleClose1 = () => {
        setShow1(false);
    }


    const handleShow = () => setShow(true);

    const handleClose = () => {
        UploadImageTOFirebase()
        setShow(false);
    }


    const Close = () => {
        setShow(false);
    }


    const handleShow1 = (data) => {
        setShow1(true);
        setApplied(data)
    }


    useEffect(() => {
        getAllData()
    }, [])



    const deletecompanuy = () => {

        let x = data.filter((item) => item.id !== value)
        setData(x)
        const db = firebaseApp.firestore();
        if (value == meta.rowData[6]) {
            const db = firebaseApp.firestore();
            db.collection('Placement').where("id", "==", meta.rowData[6]).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    db.collection("Placement").doc(doc.ref.id).delete().then(() => {
                        handleClose6()
                        getAllData()
                        toast.info('Deleted successfullyy', {
                            position: toast.POSITION.TOP_RIGHT
                        })
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                })
            }).catch(err => {
                console.error(err)
            });
        }

    }


    const getAllData = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Placement').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())
                setData(entry)
            });
        }).catch(err => {
            console.error(err)
        });
    }

    const changetoggle = (event, data) => {
        changetogglestatus(event, data.rowData[6])
    }


    const changetogglestatus = (e, id) => {
        let status = e.target.checked == true ? 1 : 0
        const db = firebaseApp.firestore();
        db.collection('Placement').where("id", "==", id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Placement").doc(doc.ref.id);

                return updateCollection.update({
                    status: Number(status)

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



    const columns = [

        {
            name: "logo",
            label: "logo",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>

                            <img src={value} width={150} />
                        </>
                    );

                },
            }
        },

        {
            name: "applyby",
            label: "applyby",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            {

                                <h3>{value.length}</h3>
                            }
                        </>
                    );

                },
            }
        },
        {
            name: "companyname",
            label: "companyname",
            options: {
                filter: true,
                sort: false,
            }
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
                            <label className="switch">
                                <input type="checkbox" className="toggle" checked={value} onChange={(e) => changetoggle(e, tableMeta)} />
                                <span className="slider round"></span>
                            </label>
                        </>
                    );
                },
            },
        },
        {
            name: "website",
            label: "website",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "applyby",
            label: "View",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>

                            <button onClick={() => handleShow1(value, tableMeta)} className='btn btn-primary'>View</button>
                        </>
                    );

                },
            }
        },
        {
            name: "id",
            label: "delete",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <button className='btn btn-danger' onClick={() => handleShow6(value, tableMeta)}>Delete</button>
                        </>
                    );
                },
            },
        },
    ];


    const options = {
        filterType: 'checkbox',
    };

    const handleFileChange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        setFile(file)
        reader.onloadend = () => {
            setPreview(reader.result)

        }
        reader.readAsDataURL(file);
    }


    const companyname = (e) => {
        setCmpname(e.target.value)
    }

    const companywebsite = (e) => {
        setCmpwebsite(e.target.value)
    }
    const Job = (e) => {
        setCmpjob(e.target.value)
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
            finaldata(url)

        }).catch(err => {
            console.log('error caught', err)
        })
    }




    const finaldata = (url) => {
        let obj = {
            logo: url,
            companyname: cmpname,
            website: cmpwebsite,
            jobrole: cmpjob,
            description: cmpdescription,
            id: makeid(8),
            applyby: [],
        }


        let registerQuery = new Promise((resolve, reject) => {
            let db = firebaseApp.firestore();
            db.collection("Placement").add({
                logo: url,
                companyname: cmpname,
                website: cmpwebsite,
                jobrole: cmpjob,
                description: cmpdescription,
                id: makeid(8),
                applyby: [],
                status: Number(0),

            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    getAllData()
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                    reject(error);
                });
        });
        registerQuery.then(result => {
            toast.success("Thank you for reaching out. We will contact you soon.")
            this.setState({
                cmpdescription: '',
                preview: '',
                cmpjob: '',
                cmpdescription: '',
                cmpname: '',
                cmpwebsite: "",

            })

        }).catch(error => {
            console.error(error)
        })



    }

    return (
        <AdminLayout>
            <div className="content-main-section">
                <button className='btn btn-primary' onClick={handleShow}>+</button>
                <h1 className='text-center'>Placement Cell</h1>


                <Modal show={showModal} centered onHide={Close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 " >

                                    <div className="col-12 rounded ">
                                        {/* <img src={this.state.profile !== '' ? this.state.profile : profilepicture} className="rounded mx-auto d-block" style={{ width: "100px" }} /> */}
                                    </div>
                                    <div className="file-input">
                                        <lable className="lbl-comn-info mt-2">Upload Company Image</lable>
                                        <input type="file" className="file-input__label" multiple onChange={handleFileChange} />

                                        <img src={preview} className='img-fluid' width={450} />
                                    </div>




                                    <lable className="lbl-comn-info mt-2">company name</lable>
                                    <input type="text" name="companyname" className="selectcourse" onChange={companyname} />

                                    <lable className="lbl-comn-info mt-2">Company website</lable>
                                    <input type="uel" name="Company website" className="selectcourse" onChange={companywebsite} />


                                    <label className="lbl-comn-info">Job Roles: <span className="text-danger">*</span></label>
                                    <select className="selectcourse"
                                        name="courses" onChange={Job}>
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
                                        <option value="7" label="Master In MERN-stack Development">
                                            Master In MERN-stack Development
                                        </option>
                                    </select>
                                    <lable className="lbl-comn-info mt-2">Description </lable>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data="<p>Hello from Decodeofttech</p>"
                                        onReady={editor => {
                                            // You can store the "editor" and use when it is needed.
                                        }}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setCmpdescription(data)
                                            {
                                            }
                                        }}
                                        onBlur={(event, editor) => {
                                        }}
                                        onFocus={(event, editor) => {
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={Close}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show={showModal1} centered onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Applid by:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th className='headingstable'>date</Th>
                                    <Th className='headingstable'>Roll_num</Th>
                                </Tr>
                            </Thead>
                            {applied.map((item, i) => {
                                return (
                                    <Tbody>
                                        <Tr key={i}>
                                            <Td className='detailtable' >{item.date}</Td>
                                            <Td className='detailtable'>{item.Roll_num}</Td>
                                        </Tr>
                                    </Tbody>
                                )
                            })}
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose1}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>



                <Modal show={showModal6} centered onHide={handleClose6}>
                    <Modal.Header >
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose6}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={deletecompanuy}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <MUIDataTable
                    title={"Employee List"}
                    data={data}
                    columns={columns}
                    options={options}
                />



                <ToastContainer />
            </div>
        </AdminLayout>
    )
}



// 
