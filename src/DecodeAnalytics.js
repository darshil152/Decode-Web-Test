import React, { Component } from 'react'
import firebaseApp from './firebase/firebase';
import AdminLayout from './adminlayout/adminlayout';
import MUIDataTable from 'mui-datatables'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import moment from 'moment';
export default class DecodeAnalytics extends Component {
    state = {
        lastVisible: '',
        analyticsData: [],
        columns: [
            {
                name: "start_time",
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
                name: "er_num",
                label: "Enrollment Number",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "f_name",
                label: "First Name",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "l_name",
                label: "Last Name",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "page",
                label: "Page",
                options: {
                    filter: true,
                    sort: false,
                }
            },


        ],
        options: {
            sortOrder: {
                name: 'start_time',
                direction: 'des'
            },
            pagination: false,
            selectableRowsHideCheckboxes: true,
        }
    }

    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })

    componentDidMount() {
        this.getAnalyticsData()
    }

    // handleNext = () => {
    //     if (this.state.lastVisible != '') {
    //         console.log(this.state.lastVisible.ref.id)
    //         let entry = []
    //         const db = firebaseApp.firestore();
    //         db.collection('DecodeAnalytics').orderBy("start_time").startAfter(this.state.lastVisible).limit(25).then((documentSnapshots) => {
    //             documentSnapshots.docs.forEach((item) => {
    //                 entry.push(item.data())
    //             })
    //             this.setState({ analyticsData: entry })
    //             // Get the last visible document

    //         }).catch(err => {
    //             console.error(err)
    //         });
    //     }


    // }

    getAnalyticsData = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('DecodeAnalytics').orderBy("start_time").get().then((documentSnapshots) => {
            documentSnapshots.docs.forEach((item) => {
                entry.push(item.data())
            })
            // Get the last visible document
            var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
            this.setState({ analyticsData: entry, lastVisible: lastVisible })
            console.log("last", lastVisible);
        }).catch(err => {
            console.error(err)
        });
    }
    render() {
        return (
            <AdminLayout >

                <div className="content-main-section">
                    <CacheProvider value={this.muiCache}>
                        <ThemeProvider theme={createTheme()}>
                            <MUIDataTable
                                title={"Analytics Data"}
                                data={this.state.analyticsData}
                                columns={this.state.columns}
                                options={this.state.options}
                            />
                        </ThemeProvider>
                    </CacheProvider>
                </div>
            </AdminLayout>
        )
    }
}
