
import firebaseApp from './firebase/firebase'
import React, { Component } from 'react'

export default class ReferenceDetails extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            currentdata: '',
            referencedata: '',
        }
    }

    componentDidMount() {
        const url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id }, () => {
            this.getalldata();
        })

    }

    getalldata = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ currentdata: doc.data() }, () => {
                    this.getrefdata();
                })
            });
        }).catch(err => {
            console.error(err)
        });
    }


    getrefdata = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("id", "==", this.state.currentdata.reference.refId).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ referencedata: doc.data() })
            });
        }).catch(err => {
            console.error(err)
        });
    }

    render() {
        return (
            <>
                {this.state.currentdata !== '' && <>




                    <div className='container mt-5 residentalDetail '>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='mt-4'>
                                        <h1>reference Details</h1>
                                    </div>
                                    <div className='mt-lg-4 mt-sm-4 ms-lg-4 text-left'>
                                        <i className="fa fa-link usernames" aria-hidden="true"></i>
                                        <label className="labelData ms-3">{this.state.referencedata.f_name}</label>
                                    </div>
                                    <div className='mt-lg-4 mt-sm-4 ms-lg-4 mb-4 text-left'>
                                        <i className="fa fa-inr usernames" aria-hidden="true"></i>
                                        <label className="labelData ms-3  ">2000</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </>
                }
            </>
        )
    }
}




