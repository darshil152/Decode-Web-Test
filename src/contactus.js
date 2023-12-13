import React, { Component } from 'react'
import firebaseApp from './firebase/firebase'
import AdminLayout from './adminlayout/adminlayout'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import moment from 'moment';

export default class Contactus extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alldatas: [],
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
                    }
                },
                {
                    name: "name",
                    label: "Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "email",
                    label: "Email",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "phone",
                    label: "Contact Number",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "message",
                    label: "Message",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "subject",
                    label: "Subject",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                // {
                //     name: "project",
                //     label: "project",
                //     options: {
                //         filter: true,
                //         sort: false,
                //     }
                // },
            ],
            options: {
                sortOrder: {
                    name: 'createdAt',
                    direction: 'des'
                },
                pagination: false,
                selectableRowsHideCheckboxes: true,
            }
        }
    }

    componentDidMount() {
        this.getalldatas()
    }

    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })

    getalldatas = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('ContactUsPortfolio').where("project", "==", "decode-contact").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                entry.push(doc.data())
                entry.sort((a, b) => b.createdAt - a.createdAt)
            });
            this.setState({ alldatas: entry }, () => {
            })

        }).catch(err => {
            console.error(err)
        });
    }


    render() {
        return (
            <>
                <AdminLayout >
                    <div className="content-main-section">
                        <CacheProvider value={this.muiCache}>
                            <ThemeProvider theme={createTheme()}>
                                <MUIDataTable
                                    title={"Student List"}
                                    data={this.state.alldatas}
                                    columns={this.state.columns}
                                    options={this.state.options}
                                />
                            </ThemeProvider>
                        </CacheProvider>
                    </div>
                </AdminLayout>
            </>
        )
    }
}
