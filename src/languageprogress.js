import React, { Component } from 'react'
import { Modal, Button } from "react-bootstrap";
import AdminLayout from './adminlayout/adminlayout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import firebaseApp from './firebase/firebase';

let courseCompleted = []

export default class Languageprogresss extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
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

                language: 1,
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

                language: 2,
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

            currentitems: [],
            isOpen: false,
        }
    }

    componentDidMount() {
        var url = window.location.href
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id }, () => {
            this.getdata()
        })
    }

    openModal = (data) => {
        let abc = data.topic

        this.setState({ currentitems: abc, isOpen: true })
    }
    closeModal = () => this.setState({
        isOpen: false
    });

    changetoggle = (data) => {
        let course = data.value + '.' + data.name
        courseCompleted.push(course)
        this.updatedatas(courseCompleted)
    }

    savecourse = () => {
        this.changetoggle();
        this.closeModal()
    }




    updatedatas = (courseCompleted) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Students").doc(doc.ref.id);
                return updateCollection.update({

                    courseprogress: courseCompleted
                }).then(function (docRef) {
                    // toast.success('Form upadated successfully', {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                    // navigate('/dashboard')

                })
            })
        }).catch(err => {
            console.error(err)
        });
    }
    getdata = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            })
        }).catch(err => {
            console.error(err)
        });
    }


    render() {
        return (
            <AdminLayout>
                <div className='content-main-section left'>
                    <h1 className='text-center mb-5'>Course Roadmap</h1>
                    <div className='container'>
                        <div className='row'>
                            {
                                this.state.langauages.map((item) => {
                                    return (
                                        <div onClick={() => this.openModal(item)} className='col-lg-12  htmcard ml-'>
                                            <h1 className='mt-3 text-left text-center textcolots' >Course: {item.language}</h1>

                                            {/* <label className="lablelanguage">Progress: </label>
                                            <progress id="file" value="10" max="100"> 32% </progress> */}
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>


                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th className='headingstable'>Topic</Th>
                                        <Th className='headingstable'>Status</Th>
                                        <Th className='headingstable'>Done / Not Done</Th>


                                    </Tr>
                                </Thead>
                                {this.state.currentitems.map((itm, i) => {
                                    return (
                                        <Tbody>
                                            <Tr key={i}>
                                                <Td className='detailtable'>{itm.value}</Td>
                                                <Td className='detailtable'>{itm.name}</Td>

                                                <Td>

                                                    <label className=" detailtable switch"></label>
                                                    <input type="checkbox" onClick={() => this.changetoggle(itm)} />
                                                </Td>
                                            </Tr>

                                        </Tbody>
                                    )
                                })}
                            </Table>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Close
                            </Button>
                            <Button variant="secondary" onClick={this.savecourse}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </AdminLayout>
        )
    }
}
