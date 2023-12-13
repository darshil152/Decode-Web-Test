import React, { Component } from 'react'
import firebaseApp from './firebase/firebase'
import AdminLayout from './adminlayout/adminlayout'
import MUIDataTable from 'mui-datatables'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


export default class Newstudentss extends Component {
    constructor(props) {
        super(props)

        this.state = {
            alldatas: [],
            columns: [
                {
                    name: "name",
                    label: "name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                // {
                //     name: "email",
                //     label: "email",
                //     options: {
                //         filter: true,
                //         sort: false,
                //     }
                // },
                {
                    name: "phone",
                    label: "phone",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                // {
                //     name: "message",
                //     label: "message",
                //     options: {
                //         filter: true,
                //         sort: false,
                //     }
                // },
                {
                    name: "subject",
                    label: "subject",
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
                selectableRowsHideCheckboxes: true,
                pagination: false,
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
        db.collection('ContactUsPortfolio').where("project", "==", "decode-new").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data())

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
