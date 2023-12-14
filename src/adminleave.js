import React, { Component } from 'react'
import AdminLayout from './adminlayout/adminlayout'
import firebaseApp from './firebase/firebase'
import MUIDataTable from "mui-datatables";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fees from './Fees';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select, MenuItem } from "@material-ui/core";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Modal, Button } from "react-bootstrap";


export default class Adminleave extends Component {

    constructor() {
        super()
        this.state = {
            setpdf: "",
            leavesent: [],
            leaveapprej: [],
            id: "",
            cols: "",
            selectedFilter: "All",
            erNum: "",
            getalldataa: [],
            columns: [

                {
                    name: "createdAt",
                    label: "Sending Date",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    <span className='muiradio'>{moment(value).format("DD-MM-YYYY hh:mma")}</span>
                                </>
                            );
                        },
                    },

                },
                {
                    name: "date",
                    label: "Leave Date",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "erNum",
                    label: "Enrollment Number",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "f_name",
                    label: "First Name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "l_name",
                    label: "Last Name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                // {
                //     name: "proof",
                //     label: "proof   ",
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
                    label: "Status",
                    options: {
                        filterList: []
                    },
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>

                                    {value == 0 ?

                                        <div onChange={(e) => this.onChangeValue(e, tableMeta)} >
                                            <div className='leavecheckl'>
                                                <span className='muiradio'>  Approved:</span><input type="radio" name="leave" value="1" /><br></br>
                                            </div>
                                            <div className='leavecheckl'>
                                                <span className='muiradio'>Rejected:</span><input type="radio" name="leave" value="2" /><br></br>
                                            </div>
                                        </div>


                                        : value == 1 ? <h6 style={{ color: "black", backgroundColor: "green", borderRadius: "15px", height: "20px" }} className="text-center">  Approved</h6> : <h6 style={{ color: "white", backgroundColor: "#C70039", borderRadius: "15px", height: "20px" }} className="text-center"> Rejected</h6>}

                                </>
                            );
                        },
                    },
                },


                {
                    name: "proof",
                    label: "Proof",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    <button className='btn btn-primary primary-btn' onClick={() => this.view(value)} type='submit'>View Proof</button>

                                </>
                            );
                        },
                    }
                },


                {
                    name: "id",
                    label: "Submit",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    <button className='btn btn-primary primary-btn' onClick={() => this.submitleave(value, tableMeta)} type='submit'>Submit</button>

                                </>
                            );
                        },
                    }
                },

            ],
            columns1: [

                {
                    name: "createdAt",
                    label: "Sending Date",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    <span className='muiradio'>{moment(value).format("DD-MM-YYYY hh:mma")}</span>
                                </>
                            );
                        },
                    },

                },
                {
                    name: "date",
                    label: "Leave Date",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "erNum",
                    label: "Enrollment Number",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "f_name",
                    label: "First Name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "l_name",
                    label: "Last Name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },


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
                    label: "Status",
                    options: {
                        filterList: []
                    },
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>

                                    {value == 0 ?

                                        <div onChange={(e) => this.onChangeValue(e, tableMeta)} >
                                            <div className='leavecheckl'>
                                                <span className='muiradio'>  Approved:</span><input type="radio" name="leave" value="1" /><br></br>
                                            </div>
                                            <div className='leavecheckl'>
                                                <span className='muiradio'>Rejected:</span><input type="radio" name="leave" value="2" /><br></br>
                                            </div>
                                        </div>


                                        : value == 1 ? <h6 style={{ color: "black", backgroundColor: "green", borderRadius: "15px", height: "20px", padding: "14px", paddingBottom: "30px" }} className="text-center">  Approved</h6> : <h6 style={{ color: "white", backgroundColor: "#C70039", borderRadius: "15px", height: "20px", padding: "14px", paddingBottom: "30px" }} className="text-center"> Rejected</h6>}

                                </>
                            );
                        },
                    },
                },


            ],
            studentLeaves: [],
            options: {
                pagination: false,
                sortOrder: {
                    name: 'date',
                    direction: 'des'
                },
                selectableRowsHideCheckboxes: true,
            }
        }
    }

    componentDidMount() {
        this.getrefdata()
    }

    onChangeValue = (event, data) => {


        this.setState({ leave: event.target.value })
    }

    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    view = (data) => {
        this.openModal(data)
    }

    openModal = (data) => this.setState({ isOpen: true, setpdf: data });
    closeModal = () => this.setState({ isOpen: false });


    onFilter = ({ target: { value } }) => {
        this.setState({ selectedFilter: value })
        let filteredCols = this.state.cols;
        let filterList = [];
        if (value !== "All") {
            filterList = [value];
        }
        // Target the column to filter on.
        filteredCols[0].options.filterList = filterList;
        this.setState({ setCols: filteredCols })
    };

    options = {
        filter: false
    };
    submitleave = (id, id2) => {
        this.changetogglestatus(id, id2.rowData[2])
    }




    changetogglestatus = (id, ernumber) => {

        const db = firebaseApp.firestore();
        db.collection('Leave').where("id", "==", id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Leave").doc(doc.ref.id);

                return updateCollection.update({
                    status: this.state.leave
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                        toast.success("Leave application changed successfully", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.updateleave(id, ernumber)
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




    updateleave = (id, ernumber) => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(ernumber)).get().then((querySnapshot) => {

            querySnapshot.forEach((doc) => {
                this.setState({ studentLeaves: doc.data().leave ? doc.data().leave : [] }, () => {
                    for (let i = 0; i < this.state.studentLeaves.length; i++) {
                        if (this.state.studentLeaves[i].id == id) {
                            this.state.studentLeaves[i].status = this.state.leave
                        }
                    }
                    var updateCollection = db.collection("Students").doc(doc.ref.id);
                    return updateCollection.update({
                        leave: this.state.studentLeaves

                    })
                        .then(() => {
                            console.log("Document successfully updateds!");
                            this.getrefdata()
                        })
                        .catch((error) => {
                            // The document probably doesn't exist.
                            console.error("Error updating document: ", error);
                        });
                })


            })
        }).catch(err => {
            console.error(err)
        });



    }


    getrefdata = () => {
        let entry = [];
        let sentleave = [];
        let apprej = [];
        const db = firebaseApp.firestore();
        db.collection('Leave').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())
                if (doc.data().status == 0) {
                    sentleave.push(doc.data())
                } else {
                    apprej.push(doc.data())
                }
            });
            this.setState({ getalldataa: entry, leavesent: sentleave, leaveapprej: apprej })
        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (
            <>
                <AdminLayout>



                    <div className="content-main-section">
                        <div className='container-fluid'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <h5 className='diffstatus text-center'>Requested Leave</h5>
                                    <CacheProvider value={this.muiCache}>
                                        <ThemeProvider theme={createTheme()}>
                                            <div className='table-height'>
                                                <MUIDataTable
                                                    title={"Your leave List"}
                                                    data={this.state.leavesent}
                                                    columns={this.state.columns}
                                                    options={this.state.options}
                                                />
                                            </div>
                                        </ThemeProvider>
                                    </CacheProvider>
                                </div>
                                <div className='col-lg-6'>
                                    <h5 className='diffstatus text-center'>Approved and Rejected</h5>

                                    <CacheProvider value={this.muiCache}>
                                        <ThemeProvider theme={createTheme()}>
                                            <div className='table-height'>
                                                <MUIDataTable
                                                    title={"Your leave List"}
                                                    data={this.state.leaveapprej}
                                                    columns={this.state.columns1}
                                                    options={this.state.options}
                                                />
                                            </div>
                                        </ThemeProvider>
                                    </CacheProvider>
                                </div>
                            </div>
                        </div>

                        <Modal className='abcdef' show={this.state.isOpen} centered onHide={this.closeModal}>
                            <Modal.Header >
                                <Modal.Title>Proofs Detail</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe src={this.state.setpdf} width="100%" height="700" ></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                    <ToastContainer />
                </AdminLayout>
            </>
        )
    }
}
