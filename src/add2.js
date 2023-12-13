import React, { Component } from 'react'
import AdminLayout from "./adminlayout/adminlayout"
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebaseApp from "./firebase/firebase";
import { Button, Modal } from "react-bootstrap";



export default class Add2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

            allcourses: [{
                webdesign: [{
                    language: 0,  //0 - HTML
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 0
                    },
                    {
                        n: 1, // 1 - heading
                        s: 0
                    },
                    {
                        n: 2, // 2-list
                        s: 0
                    },
                    {
                        n: 3, //3-anchor
                        s: 0
                    },
                    {
                        n: 4,  //4 -audio & video
                        s: 0
                    },

                    {
                        n: 5, //5 - table
                        s: 0
                    },
                    {
                        n: 6, // 6-Image
                        s: 0
                    },
                    {
                        n: 7, // 7 -form
                        s: 0
                    },

                    ]
                }, {
                    language: 1,  //1- css
                    topic: [{
                        n: 0,  // 0 -Introduction
                        s: 1
                    },
                    {
                        n: 1, //1 - The CSS Box Model
                        s: 1
                    },
                    {
                        n: 2, // 2- Margins, padding, and borders
                        s: 1
                    },

                    {
                        n: 3, //3 -Display
                        s: 1
                    },
                    {
                        n: 4, //4 - Float
                        s: 1
                    },
                    {
                        n: 5, // 5- Positioning
                        s: 1
                    },

                    {
                        n: 6, // 6 -Media queries in CSS
                        s: 1
                    },
                    {
                        n: 7, // 7-CSS Grid systems
                        s: 1
                    },

                    ]
                }, {
                    language: 2,  // 2- media-query
                    topic: [{
                        n: 0,           // 0- Introduction
                        s: 2
                    }, {
                        n: 1,         //  1- Anatomy of a Media Query
                        s: 2
                    }


                    ]
                }, {
                    language: 3, //  3- bootstrap
                    topic: [{
                        n: 0,  // 0-Introduction
                        s: 3
                    },
                    {
                        n: 1, // 1 - breakpoints
                        s: 3
                    },
                    {
                        n: 2, // 2- container
                        s: 3
                    },

                    {
                        n: 3, // 3- grid
                        s: 3
                    },
                    ]
                },
                {
                    language: 4, //  4- saas
                    topic: [{
                        n: 0,  // 0-Introduction
                        s: 4
                    },
                    {
                        n: 1, // 1-syntex
                        s: 4
                    },

                    {
                        n: 2, // 2 -variable
                        s: 4
                    },
                    {
                        n: 3, // 3-At rules
                        s: 4
                    },
                    {
                        n: 4, // 4- values
                        s: 4
                    },
                    {
                        n: 5, // 5 -Operations
                        s: 4
                    },
                    {
                        n: 6, // 6-Built in modules
                        s: 4
                    },
                    {
                        n: 7, // 7 - Breaking changes
                        s: 4
                    },
                    {
                        n: 8, // 8 -  Command line
                        s: 4
                    },
                    ]
                },
                ],
                webdevelopment: [{
                    language: 0,  //0 - C
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 0
                    },
                    {
                        n: 1, // 1 - syntex
                        s: 0
                    },
                    {
                        n: 2, // 2-output
                        s: 0
                    },
                    {
                        n: 3, //3-variabble
                        s: 0
                    },
                    {
                        n: 4,  //4 -Data type
                        s: 0
                    },

                    {
                        n: 5, //5 - opetatoes
                        s: 0
                    },
                    {
                        n: 6, // 6-loops
                        s: 0
                    },
                    {
                        n: 7, // 7 -array
                        s: 0
                    },
                    {
                        n: 8, // 8 -srtings
                        s: 0
                    },
                    {
                        n: 9, // 9 -pointer
                        s: 0
                    },
                    {
                        n: 10, // 10 -Function
                        s: 0
                    },
                    {
                        n: 11, // 11 -Recursion
                        s: 0
                    }],

                }, {
                    language: 1,  //1 - C++
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 1
                    },
                    {
                        n: 1, // 1 - syntex
                        s: 1
                    },
                    {
                        n: 2, // 2-output
                        s: 1
                    },
                    {
                        n: 3, //3-variabble
                        s: 1
                    },
                    {
                        n: 4,  //4 -Data type
                        s: 1
                    },

                    {
                        n: 5, //5 - opetatoes
                        s: 1
                    },
                    {
                        n: 6, // 6-loops
                        s: 1
                    },
                    {
                        n: 7, // 7 -array
                        s: 1
                    },
                    {
                        n: 8, // 8 -srtings
                        s: 1
                    },
                    {
                        n: 9, // 9 -pointer
                        s: 1
                    },
                    {
                        n: 10, // 10 -Function
                        s: 1
                    },
                    {
                        n: 9, // 11 -Recursion
                        s: 1
                    }],
                }, {
                    language: 2,  //2 - js
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 2
                    },
                    {
                        n: 1, // 1 - Dom
                        s: 2
                    },
                    {
                        n: 2, // 2-Element access method
                        s: 2
                    },
                    {
                        n: 3, //3-Create and remove method
                        s: 2
                    },
                    {
                        n: 4,  //4 -Set attribute
                    },

                    {
                        n: 5, //5 - Event Listner
                        s: 2
                    },
                    {
                        n: 6, // 6-Variables & Data type
                        s: 2
                    },
                    {
                        n: 7, // 7 -Loops & if else condition
                        s: 2
                    },
                    {
                        n: 8, // 8 -localstorage and session storage
                        s: 2
                    }],
                }, {
                    language: 3,  //3- Reactjs
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 3
                    },
                    {
                        n: 1, // 1 - Introducing JSX
                        s: 3
                    },
                    {
                        n: 2, // 2-Rendering Elements
                        s: 3
                    },
                    {
                        n: 3, //3-Components and Props
                        s: 3
                    },
                    {
                        n: 4,  //4 -State and Lifecycle
                        s: 3
                    },

                    {
                        n: 5, //5 -Handling Events
                        s: 3
                    },
                    {
                        n: 6, // 6-Conditional Rendering
                        s: 3
                    },
                    {
                        n: 7, // 7 -Lists and Keys
                        s: 3
                    },
                    {
                        n: 8, // 8 -Forms
                        s: 3
                    }, {
                        n: 9, // 9 -Lifting State Up
                        s: 3
                    },
                    {
                        n: 10, // 10 -Composition vs Inheritance
                        s: 3
                    }, {
                        n: 11, // 11 -Context
                        s: 3
                    },],
                }, {
                    language: 4,  //4- nextjs
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 4
                    },
                    {
                        n: 1, // 1 - CREATE YOUR FIRST APP
                        s: 4
                    },
                    {
                        n: 2, // 2-Create a Next.js App
                        s: 4
                    },
                    {
                        n: 3, //3-Navigate Between Pages

                        s: 4
                    },
                    {
                        n: 4,  //4 -Assets, Metadata, and CSS

                        s: 4
                    },

                    {
                        n: 5, //5 - Pre-rendering and Data Fetching

                        s: 4
                    },
                    {
                        n: 6, // 6-Dynamic Routes
                        s: 4
                    },
                    {
                        n: 7, // 7 -API Routes

                        s: 4
                    },
                    {
                        n: 8, // 8 -Deploying Your Next.js App
                        s: 4
                    },
                    {
                        n: 9, // 9 -TypeScript
                        s: 4
                    },
                    ],
                }, {
                    language: 5,  //5- Redux
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 5
                    },
                    {
                        n: 1, // 1 - Introducing JSX
                        s: 5
                    },
                    {
                        n: 2, // 2-Rendering Elements
                        s: 5
                    },
                    {
                        n: 3, //3-Components and Props
                        s: 5
                    },
                    {
                        n: 4,  //4 -State and Lifecycle
                        s: 5
                    },],
                }],

                backend: [{
                    language: 0, //0-NodeJs
                    topic: [{
                        n: 0, //0 -INTRODUCTIOn
                        s: 0
                    },
                    {
                        n: 1, // 1 - Node.js Modules
                        s: 0
                    },
                    {
                        n: 2, // 2-HTTP Module
                        s: 0
                    },
                    {
                        n: 3, //3-File System Module
                        s: 0
                    },
                    {
                        n: 4,  //4 URL Module
                        s: 0
                    }, {
                        n: 5,  //5 NPM
                        s: 0
                    }, {
                        n: 6,  //6  Events
                        s: 0
                    }, {
                        n: 7,  //7  Upload Files

                        s: 0
                    }, {
                        n: 8,  //8 Send an Email

                        s: 0
                    },],

                    language: 1,//1-express
                    topic: [{
                        n: 0, // 0-introduction
                        s: 1
                    },
                    {
                        n: 1, // 1-Installing
                        s: 1
                    }, {
                        n: 2, // 2-Hello world example      
                        s: 1
                    }, {
                        n: 3, // 3-Express application generator
                        s: 1
                    }, {
                        n: 4, // 4-Basic routing    
                        s: 1
                    }, {
                        n: 5, // 5-Serving static files in Express
                        s: 1
                    }, {
                        n: 6, // 6-Express examples
                        s: 1
                    }],

                    language: 2, //2-mongo
                    top: [{
                        n: 0, // 0-Use MongoDB
                        s: 2
                    }, {
                        n: 1,// 1-Deploy with MongoDB Atlas
                        s: 2
                    }, {
                        n: 5,// 2-Deploy with MongoDB Atlas
                        s: 2
                    }, {
                        n: 3,// 3-Explore your data
                        s: 2
                    }, {
                        n: 4,// 4 - Build data visualizations
                        s: 2
                    }, {
                        n: 5,// 5-Build apps on MongoDB Atlas
                        s: 2
                    },]

                }],
            }],



            id: "",
            ernum: 23000001,
            fetchdata: [],
            refe: "",
            refamount: "",
            otherRefName: "",
            otherRefAmount: "",
            show: false,
            refData: {
                refId: 'decode',
                refAmount: 0
            },
            otherRef: {
                refName: '',
                refAmount: 0
            },
            checked: false,
            otherRefCheck: false,
            otherRefModalShow: false,
            currentid: "",
            acticestatus: "",
            f_name: "",
            l_name: "",
            dob: "",
            phone: "",
            profile_img: "",
            email: "",
            eme_phone: "",
            courses: "",
            course_fees: "",
            f_f_name: "",
            f_l_name: "",
            occupation: "",
            qualification: "",
            f_phone: "",
            line_1: "",
            line_2: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            myref: [],
            other_ref: [],
            reference: [],
        }
        this.formAttr = (form, field) => ({
            onBlur: form.handleBlur,
            onChange: form.handleChange,
            value: form.values[field],
        });

    }

    componentDidMount() {
        var url = window.location.href
        var ids = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id: ids }, () => {

            this.getdata();
        })
    }
    handleShow = () => {
        this.setState({ show: true })
        // setShow(true);
    }

    errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };


    handleClose = () => {

        this.setState({ checked: false })
        this.setState({ show: false })

    }

    handleOtherRefModalShow = () => {
        this.setState({ otherRefModalShow: true })

    }

    handleOtherRefModalClose = () => {
        this.setState({ otherRefCheck: false })
        this.setState({ otherRefModalShow: false })
    }


    submitStudentData = (formData, resetForm) => {

        if (localStorage.getItem('mmatchid') == Number(this.state.id)) {
            this.updatedatas(formData);
        } else {
            this.abc(formData);
        }
    };


    handlesave = (event) => {
        this.setState({ show: false })
        this.setState({
            refData: {
                refId: this.state.refe,
                refAmount: this.state.refamount
            }
        })

    }

    handleOtherRefSave = () => {
        this.setState({ otherRefModalShow: false })
        this.setState({
            otherRef: {
                refName: this.state.otherRefName,
                refAmount: this.state.otherRefAmount
            }
        })
    }

    abc = (formData) => {
        let idtoupdate = ''
        let updatedData = []
        for (let i = 0; i < this.state.fetchdata.length; i++) {
            if (this.state.fetchdata[i].id == this.state.refData.refId) {
                this.state.fetchdata[i].myref.push(this.state.currentid)
                if (this.state.fetchdata[i].myref.length > 0) {
                    updatedData = this.state.fetchdata[i].myref
                }
                idtoupdate = this.state.fetchdata[i].id
            }

        }
        if (idtoupdate !== '') {

            const db = firebaseApp.firestore();
            db.collection('Students').where('id', '==', idtoupdate).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var updateCollection = db.collection("Students").doc(doc.ref.id);
                    return updateCollection.update({
                        myref: updatedData
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                            this.sendMessage(formData)
                            // window.location.href = '/table'

                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                })

            }).catch(err => {
                console.error(err)
            });
        } else {
            this.sendMessage(formData)
        }
    }


    handleref = (event) => {
        this.setState({ refe: event.target.value })
    }

    handlerefamount = (event) => {
        this.setState({ refAmount: event.target.value })
    }

    handleOtherrefamount = (event) => {
        this.setState({ otherRefAmount: event.target.value })

    }
    handleOtherrefName = (event) => {
        this.setState({ otherRefName: event.target.value })

    }

    errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };




    getdata = async () => {
        // setCurrentid(makeid(16))
        this.setState({ currentid: this.makeid(16) })
        let entry = []
        let activeStudents = []
        const db = firebaseApp.firestore();
        db.collection('Students').where("status", "==", 1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())
                // temp.push(doc.data())
            })
            if (entry.length > 0) {
                entry.sort(this.compare);
                let lastErNum = entry[entry.length - 1].er_num;


                if (localStorage.getItem('mmatchid') == Number(this.state.id)) {
                    this.setState({ ernum: this.state.id })
                } else {
                    this.setState({ ernum: 1 + lastErNum })
                }

                // setErnum(ernum => 1 + lastErNum)
                this.setState({ fetchdata: entry }, () => {
                    for (let i = 0; i < this.state.fetchdata.length; i++) {
                        if (this.state.fetchdata[i].er_num == this.state.id) {
                            this.setState({ f_name: this.state.fetchdata[i].f_name }, () => {
                                console.log(this.state.f_name)
                            });
                            this.setState({ l_name: this.state.fetchdata[i].l_name });
                            this.setState({ dob: this.state.fetchdata[i].dob });;
                            this.setState({ phone: this.state.fetchdata[i].phone });
                            this.setState({ profile_img: this.state.fetchdata[i].profile_img });
                            this.setState({ email: this.state.fetchdata[i].email });
                            this.setState({ eme_phone: this.state.fetchdata[i].eme_phone });
                            this.setState({ courses: this.state.fetchdata[i].courses });
                            this.setState({ course_fees: this.state.fetchdata[i].course_fees });
                            this.setState({ f_f_name: this.state.fetchdata[i].f_f_name });
                            this.setState({ f_l_name: this.state.fetchdata[i].f_l_name });
                            this.setState({ occupation: this.state.fetchdata[i].occupation });
                            this.setState({ qualification: this.state.fetchdata[i].qualification });
                            this.setState({ f_phone: this.state.fetchdata[i].f_phone });
                            this.setState({ line_1: this.state.fetchdata[i].line_2 });
                            this.setState({ city: this.state.fetchdata[i].city });
                            this.setState({ state: this.state.fetchdata[i].state });
                            this.setState({ country: this.state.fetchdata[i].country });
                            this.setState({ zipcode: this.state.fetchdata[i].zipcode });
                            this.setState({ myref: this.state.fetchdata[i].myref });
                            this.setState({ other_ref: this.state.fetchdata[i].other_ref });
                            this.setState({ reference: this.state.fetchdata[i].reference });

                        }
                    }
                })



                for (let i = 0; i < entry.length; i++) {
                    if (entry[i].status == 1) {
                        activeStudents.push(entry[i])
                    }
                }
                this.setState({ acticestatus: activeStudents })
            }


        }).catch(err => {
            console.error(err)
        });
    }


    compare = (a, b) => {
        if (a.er_num < b.er_num) {
            return -1;
        }
        if (a.er_num > b.er_num) {
            return 1;
        }
        return 0;
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


    makepass = (length) => {
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

    updatedatas = (data) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Students").doc(doc.ref.id);
                return updateCollection.update({
                    f_name: data.f_name,
                    l_name: data.l_name,
                    dob: data.dob,
                    phone: data.phone,
                    email: data.email,
                    eme_phone: data.eme_phone,
                    courses: data.courses,
                    course_fees: data.course_fees,
                    f_f_name: data.f_f_name,
                    f_l_name: data.f_l_name,
                    occupation: data.occupation,
                    qualification: data.qualification,
                    f_phone: data.f_phone,
                    line_1: data.line_1,
                    line_2: data.line_2,
                    city: data.city,
                    state: data.state,
                    country: data.country,
                    zipcode: data.zipcode,
                    reference: this.state.refData,
                    other_ref: this.state.otherRef,
                    updatedAt: new Date().getTime(),

                }).then(function (docRef) {
                    toast.success('Form upadated successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    window.location.href = "./dashboard"
                })
            })
        }).catch(err => {
            console.error(err)
        });
    }

    sendMessage = (data) => {
        let array = [];
        // let array1 = [];
        // let array2 = [];
        // let array3 = []
        // let array4 = []



        if (data.courses == 1) {
            array.push(this.state.allcourses[0].webdesign[0].topic)
        }

        // let registerQuery = new Promise((resolve, reject) => {
        //     let db = firebaseApp.firestore();


        //     db.collection("Students").add({
        //         er_num: Number(this.state.ernum),
        //         f_name: data.f_name,
        //         l_name: data.l_name,
        //         dob: data.dob,
        //         phone: data.phone,
        //         profile_img: '',
        //         email: data.email,
        //         eme_phone: data.eme_phone,
        //         courses: data.courses,
        //         course_fees: data.course_fees,
        //         f_f_name: data.f_f_name,
        //         f_l_name: data.f_l_name,
        //         occupation: data.occupation,
        //         qualification: data.qualification,
        //         f_phone: data.f_phone,
        //         line_1: data.line_1,
        //         line_2: data.line_2,
        //         city: data.city,
        //         state: data.state,
        //         country: data.country,
        //         zipcode: data.zipcode,
        //         reference: this.state.refData,
        //         other_ref: this.state.otherRef,
        //         createdAt: new Date().getTime(),
        //         id: this.state.currentid,
        //         password: this.makepass(8),
        //         project: "Decode",
        //         userRole: 1,
        //         status: 1,
        //         myref: [],
        //         myAttend: [],
        //         fees: [],
        //         feesPr: 0,
        //         terms: false,
        //     })
        //         .then(function (docRef) {
        //             console.log("Document written with ID: ", docRef.id);
        //             resolve(docRef.id);
        //             toast.success('Form submitted successfully', {
        //                 position: toast.POSITION.TOP_RIGHT
        //             });
        //             window.location.href = "./dashboard"

        //         })
        //         .catch(function (error) {
        //             console.error("Please check form again ", error);
        //             reject(error);
        //             toast.error('Attendance is already added', {
        //                 position: toast.POSITION.TOP_RIGHT
        //             });
        //         });
        // });
        // registerQuery.then(result => {
        //     console.warn('register successful')
        //     // toast.success("Thank you for reaching out. We will contact you soon.")
        // }).catch(error => {
        //     console.error(error)
        // })
    }




    render() {
        return (
            <AdminLayout >
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="comn-title-info">
                                    <h1>Student Details</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="white-box-main">
                                    <Formik
                                        enableReinitialize
                                        initialValues={{
                                            er_num: this.state.ernum,
                                            file: this.state.f_name,
                                            f_name: this.state.f_name,
                                            l_name: this.state.l_name,
                                            dob: this.state.dob,
                                            email: this.state.email,
                                            phone: this.state.phone,
                                            eme_phone: this.state.eme_phone,
                                            courses: this.state.courses,
                                            course_fees: this.state.course_fees,
                                            f_f_name: this.state.f_f_name,
                                            f_l_name: this.state.f_l_name,
                                            occupation: this.state.occupation,
                                            qualification: this.state.qualification,
                                            f_phone: this.state.f_phone,
                                            line_1: this.state.line_1,
                                            line_2: this.state.line_2,
                                            city: this.state.city,
                                            state: this.state.state,
                                            country: 'India',
                                            zipcode: this.state.zipcode,
                                            reference: {},
                                            amount: "",
                                        }}

                                        validationSchema={Yup.object({
                                            f_name: Yup.string().required("First name is required."),
                                            // l_name: Yup.string().required("Last name is required."),
                                            // email: Yup.string().required("email is required."),
                                            courses: Yup.string().required("please choose your course."),
                                            // course_fees: Yup.string().required("please Enter Fees of Course."),
                                            // phone: Yup.string().required("phone is required."),
                                            // dob: Yup.string().required("Date Of Birth is required."),
                                            // eme_phone: Yup.string().required("Emergency Contact number is required."),
                                            // f_f_name: Yup.string().required("First name is required."),
                                            // f_l_name: Yup.string().required("Last name is required."),
                                            // f_phone: Yup.string().required("Contact number is required."),
                                            // line_1: Yup.string().required("Address is required."),
                                            // city: Yup.string().required("city is required."),
                                            // state: Yup.string().required("state is required."),
                                            // zipcode: Yup.string().required("Zipcode is required"),
                                        })}
                                        onSubmit={(formData, { resetForm }) => {
                                            this.submitStudentData(formData, resetForm);

                                        }}
                                    >{
                                            ({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                                isSubmitting,
                                            }) => (
                                                <form className="row" onSubmit={handleSubmit}>
                                                    {/* <div className="col-12 stsg-box-list d-flex align-items-center stsg-box-list-text mb-4">
                                                <span className="d-block">
                                                    <img src={imageAsUrl} alt="profile" />
                                                </span>
                                                <div className="stsg-box-list-text ps-3">
                                                    <bdi className="d-block">Upload your profile</bdi>
                                                    <p className="mb-0">You can upload image of max size of 5mb. Image will be cropped to 256*256px.</p>
                                                    <div className="upload-btn-wrapper mt-3">
                                                        <button className="btn">
                                                            <img src={Upload} className="pe-2" alt="profile" />
                                                            Upload Image
                                                        </button>
                                                        <input type="file" name="myfile"  onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div> */}

                                                    <div className="col-12 mb-3">
                                                        <label className="lbl-comn-info">Enrollment Number</label>
                                                        <input type="text" name="er_num" value={this.state.ernum} className="form-control input-style" placeholder="" onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">First Name <span className="text-danger">*</span></label>
                                                        <input type="text" name="f_name" value={values.f_name} className="form-control input-style" placeholder="Enter your first name" onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Last Name <span className="text-danger">*</span></label>
                                                        <input type="text" name="l_name" value={values.l_name} className="form-control input-style" placeholder="Enter your last name" onChange={handleChange}
                                                            onBlur={handleBlur} />

                                                    </div>


                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Select courses: <span className="text-danger">*</span></label>
                                                        <select className="selectcourse"
                                                            name="courses"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.courses}


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
                                                            <option value="7" label="Master In MERN-stack Development">
                                                                Master In MERN-stack Development
                                                            </option>
                                                        </select>


                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Course Fees <span className="text-danger">*</span></label>
                                                        <input type="text" name="course_fees" className="form-control input-style" placeholder="Enter your course fees" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.course_fees} />

                                                    </div>


                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Date Of Birth <span className="text-danger">*</span></label>
                                                        <input type="date" name="dob" className="form-control input-style" placeholder="Enter your birthdate" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.dob} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Email Address <span className="text-danger">*</span></label>
                                                        <input type="email" name="email" className="form-control input-style" placeholder="Enter your email " onChange={handleChange}
                                                            onBlur={handleBlur} value={values.email} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Contact Number <span className="text-danger">*</span></label>
                                                        <div className="phone-cust-input">
                                                            <input type="tel" name="phone" className="form-control input-style" maxLength='10' placeholder="Enter your number" onChange={handleChange}
                                                                onBlur={handleBlur} value={values.phone} />

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Emergency Contact Number <span className="text-danger">*</span></label>
                                                        <div className="phone-cust-input">
                                                            <input type="tel" name="eme_phone" className="form-control input-style" maxLength='10' placeholder="Enter your emergency number" onChange={handleChange}
                                                                onBlur={handleBlur} value={values.eme_phone} />

                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="comn-title-info">
                                                            <h1>Parent's Details</h1>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Father's First Name <span className="text-danger">*</span></label>
                                                        <input type="text" name="f_f_name" className="form-control input-style" placeholder="Enter your father's first name" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.f_f_name} />

                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Father's Last Name <span className="text-danger">*</span></label>
                                                        <input type="text" name="f_l_name" className="form-control input-style" placeholder="Enter your father's last name" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.f_l_name} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Father's Occupation</label>
                                                        <input type="text" name="occupation" className="form-control input-style" placeholder="Enter your father's Occupation" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.occupation} />
                                                    </div>
                                                    {/* <div className="col-md-6 mb-3">
                                                <label className="lbl-comn-info">Father's Qualification</label>
                                                <input type="qualification" name="qualification"  className="form-control input-style" placeholder="" />
                                            </div> */}
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Father's Contact Number <span className="text-danger">*</span></label>
                                                        <div className="phone-cust-input">
                                                            <input type="tel" name="f_phone" className="form-control input-style" maxLength='10' placeholder="Enter your father's contact number" onChange={handleChange}
                                                                onBlur={handleBlur} value={values.f_phone} />

                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="comn-title-info">
                                                            <h1>Address Details</h1>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Line 1 <span className="text-danger">*</span></label>
                                                        <input type="text" name="line_1" className="form-control input-style" placeholder="Enter your address 1" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.line_1} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Line 2</label>
                                                        <input type="text" name="line_2" className="form-control input-style" placeholder="Enter your address 2" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.line_2} />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">City <span className="text-danger">*</span></label>
                                                        <input type="text" name="city" className="form-control input-style" placeholder="Enter your city" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.city} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">State <span className="text-danger">*</span></label>
                                                        <input type="text" name="state" className="form-control input-style" placeholder="Enter your state" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.state} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Country <span className="text-danger">*</span></label>
                                                        <input type="text" name="country" className="form-control input-style" placeholder="Enter your countyr" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.country} />

                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <label className="lbl-comn-info">Zipcode <span className="text-danger">*</span></label>
                                                        <input type="tel" name="zipcode" className="form-control input-style" placeholder="Enter your zipcode" onChange={handleChange}
                                                            onBlur={handleBlur} value={values.zipcode} />

                                                    </div>

                                                    <div className="col-md-6 mb-3">
                                                        <div className="comn-title-info">
                                                            <h1>Reference By Old Student</h1>
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" onClick={this.handleShow} checked={this.state.checked} onChange={() => this.setState({ checked: !this.state.checkbox })}
                                                            />
                                                            <label className="lbl-comn-info" style={{ display: "inline", marginLeft: 20 }}>Reference</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="comn-title-info">
                                                            <h1>Reference By Other</h1>
                                                        </div>
                                                        <div>
                                                            <input type="checkbox" onClick={this.handleOtherRefModalShow} checked={this.state.otherRefCheck} onChange={() => this.setState({ otherRefCheck: !this.state.otherRefCheck })}
                                                            />
                                                            <label className="lbl-comn-info" style={{ display: "inline", marginLeft: 20 }}>Reference</label>
                                                        </div>
                                                    </div>




                                                    <div className="col-12 pt-4 text-md-end text-center">
                                                        <button type="submit" className="btn-comn-all" style={{ marginRight: 15 }}>
                                                            Save
                                                        </button>
                                                        <button type="button" className="btn-comn-all3 ms-3">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>
                                            )
                                        }

                                    </Formik>

                                    <Modal show={this.state.show && this.state.checked} centered onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Reference By Old Student</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <select className="form-control input-style" name="reference" onChange={this.handleref} value={this.state.refe} >
                                                <option value="⬇️ Select a fruit ⬇️" > -- Select a reference -- </option>
                                                {this.state.acticestatus.length && this.state.acticestatus.map((items) => (
                                                    <option value={items.id}>{items.f_name} {items.l_name}</option>
                                                ))}
                                            </select>
                                            <label className="lbl-comn-info"  >Number of Amount :</label>

                                            <input className="form-control input-style" id="amount" value={this.state.refamount} name="amount" onChange={this.handlerefamount}
                                            />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={this.handlesave}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>


                                    <Modal show={this.state.otherRefModalShow && this.state.otherRefCheck} centered onHide={this.handleOtherRefModalClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Reference By Other</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <label className="lbl-comn-info"  > Refered By:</label>

                                            <input className="form-control input-style" id="referedBy" name="referedBy" onChange={this.handleOtherrefName} />
                                            <label className="lbl-comn-info"  >Number of Amount :</label>

                                            <input className="form-control input-style" id="otherRefAmount" name="otherRefAmount" onChange={this.handleOtherrefamount}
                                            />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleOtherRefModalClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={this.handleOtherRefSave}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </AdminLayout >

        )
    }
}
