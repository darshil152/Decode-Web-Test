import React, { Component } from 'react'
import firebaseApp from './firebase/firebase'
import AdminLayout from './adminlayout/adminlayout'
import { ToastContainer, toast } from 'react-toastify';
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";
// import { getDatabase, ref, onValue } from "firebase/database";
// import { getDatabase, ref,  } from "firebase/database";


export default class Performance extends Component {
    constructor() {
        super()

        this.state = {
            message: "",
            status: 0,
        }
    }

    componentDidMount() {
        // this.getdata()
        this.handleGetData()
    }


    handlemessage = (event) => {
        this.setState({ message: event.target.value })
    }

    changetoggle = (e) => {
        if (e.target.checked) {
            this.setState({ status: 1 })
            const db = getDatabase();
            set(ref(db), {
                msg: this.state.message,
                marque: 1

            }).then(() => {
                console.log("Document successfully updated!");

            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });;
        } else {
            this.setState({ status: 0 })
            const db = getDatabase();
            set(ref(db), {
                msg: '',
                marque: 0

            }).then(() => {
                console.log("Document successfully updated!");

            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });;
        }

    }




    getdata = () => {

        const db = firebaseApp.firestore();
        db.collection('Marquee').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState({ message: doc.data().message, status: doc.data().status })
            });
        }).catch(err => {
            console.error(err)
        });
    }


    handleGetData = () => {


        const db = getDatabase();
        const starCountRef = ref(db);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            this.setState({ message: data.msg, status: data.marque })
        });
    }


    handlesave = () => {



        const db = getDatabase();
        set(ref(db), {
            msg: this.state.message,
            marque: 1

        }).then(() => {
            console.log("Document successfully updated!");

        }).catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });;

    }




    render() {


        return (
            <AdminLayout>
                <div className="content-main-section">

                    {this.state.status == 1 && <marquee className="blinks" width="100%" id="myDIV" behavior="scroll" s scrollamount="12" direction="left" height="50px" >

                        {this.state.message}

                    </marquee>}



                    Status :<label className="switch">
                        <input type="checkbox" className="toggle" checked={this.state.status} onChange={this.changetoggle} />
                        <span className="slider round"></span>
                    </label>

                    <h1 className='text-center mt-5'> Performance</h1>


                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>




                                <div className="file-input">
                                    <lable className="lbl-comn-info  mt-3">Student of the day:</lable>
                                    <input type="text" value={this.state.message} className=" emailstyle" onChange={this.handlemessage} />

                                </div>
                            </div>
                            <div className='col-lg-6 '>
                                <button type='submit' className='btn btn-primary mt-5 text-center' onClick={this.handlesave}>Submit</button>

                            </div>
                        </div>
                    </div>

                </div >
                <ToastContainer />
            </AdminLayout >
        )
    }
}
