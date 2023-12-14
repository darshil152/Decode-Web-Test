import React, { Component } from 'react'
import AdminLayout from './adminlayout/adminlayout'
import firebaseApp from './firebase/firebase'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import MUIDataTable from "mui-datatables";
import { Modal, Button } from "react-bootstrap";
import moment from 'moment';


export default class Recruitment extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
            setpdf: "",
            alldata: [],
            columns: [
                {
                    name: "createdAt",
                    label: "Date",
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
                    name: "name",
                    label: "name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },


                {
                    name: "email",
                    label: "email",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },




                {
                    name: "for",
                    label: "Designation",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "cv",
                    label: "Resume",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    <button className='btn btn-primary primary-btn' onClick={() => this.view(value)}>View</button>
                                </>
                            );
                        },

                    },
                },
            ],
            options: {
                selectableRowsHideCheckboxes: true,
                sortOrder: {
                    name: 'createdAt',
                    direction: 'des'
                },
                pagination: false,
            }
        }

    }



    componentDidMount() {
        this.getdata()
    }

    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    openModal = (data) => this.setState({ isOpen: true, setpdf: data });
    closeModal = () => this.setState({ isOpen: false });

    view = (data) => {
        this.openModal(data)
    }

    getdata = () => {
        let entry = [];

        const db = firebaseApp.firestore();
        db.collection('career').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())

                this.setState({ alldata: entry })

            });

        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (
            <AdminLayout>
                <div className="content-main-section">
                    <div className='container-fluid'>
                        <div className='row mt-5'>
                            <div className='col-lg-12'>
                                <CacheProvider value={this.muiCache}>
                                    <ThemeProvider theme={createTheme()}>
                                        <MUIDataTable
                                            title={"Resume List"}
                                            data={this.state.alldata}
                                            columns={this.state.columns}
                                            options={this.state.options}
                                        />
                                    </ThemeProvider>
                                </CacheProvider>
                            </div>
                        </div>
                        <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                            <Modal.Header >
                                <Modal.Title>Resume</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe src={this.state.setpdf} width="100%" height="550" ></iframe>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>

                </div>


            </AdminLayout >
        )
    }
}
