import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import AdminLayout from '../adminlayout/adminlayout';
import firebaseApp from '../firebase/firebase';

export default class Approve extends Component {
    constructor() {
        super()

        this.state = {
            columns: [
                {
                    name: "date",
                    label: "date",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "erNum",
                    label: "erNum",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "f_name",
                    label: "f_name",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "id",
                    label: "Uid",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "reason",
                    label: "reason",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
                {
                    name: "status",
                    label: "status",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },
            ],
            studentallleave: []
        }
    }

    componentDidMount = () => {
        this.getAllData()
    }


    getAllData = () => {
        let entry = []
        const db = firebaseApp.firestore();
        db.collection('Students').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                entry.push(doc.data().leave)
                this.setState({ studentallleave: entry })

                for (let i = 0; i < this.state.studentallleave.length; i++) {
                    if (this.state.studentallleave[i].status == "1") {
                        // const element = array[i];
                    }

                }
            })

        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (
            <AdminLayout>
                <div className="content-main-section">

                    <MUIDataTable
                        title={"Your leave List"}
                        data={this.state.studentallleave}
                        columns={this.state.columns}
                        options={this.state.options}
                    />
                </div>
            </AdminLayout>
        )
    }
}
