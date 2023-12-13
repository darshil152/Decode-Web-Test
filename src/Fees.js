import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import firebaseApp from './firebase/firebase'
import MUIDataTable from 'mui-datatables'
import { number } from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayout from './adminlayout/adminlayout';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { type } from '@testing-library/user-event/dist/type';
import { Modal, Button } from "react-bootstrap";




let myfees = [];

export default function Fees() {

    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    const [stdata, setStdata] = useState([]);
    const [amount, setAmount] = useState()
    const [payment, setpayment] = useState(0)
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
    const [showModal, setShow] = useState(false);
    const [data, setDataa1] = useState("");
    const [data2, setDataa2] = useState("")
    const [fees, setFees] = useState([]);



    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    };

    useEffect(() => {
        getdata()
    }, [])

    const gettodate = (date) => {
        setDate(date);
    }

    const handleChange = event => {
        setpayment(event.target.value);
    };


    const makeid = (length) => {
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



    const submitform = (data, data2) => {
        handleShow();
        setDataa1(data)
        setDataa2(data2)
    }

    const sendWhatsappMessage = (data) => {
        let num = data.f_phone;

        let msg = 'Hello, ' + data.f_f_name + '. ' + data.f_name + "'s fees installment total ₹" + amount + " is paid on " + date + '.   -Decode Softtech';


        var win = window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
        win.focus();
    }

    const onsavedata = () => {

        let alreadyAdded = false
        let totalAmount = 0
        let courseFee = 0
        let ActiveRef = 0
        let totalRefAmount = 0
        let total = 0
        let myRef = []
        let obj = {
            date: date,
            amount: amount,
            payment: payment,
            id: makeid(8),
        };

        for (let i = 0; i < stdata.length; i++) {
            if (stdata[i].id == data) {
                myfees = stdata[i].fees
                myRef = stdata[i].myref
                ActiveRef = stdata[i].other_ref.refAmount
                courseFee = stdata[i].course_fees
                alreadyAdded = true
            }
        }


        if (alreadyAdded) {
            myfees.push(obj);
            toast.success(data2.rowData[1] + ' Payment done', {
                position: toast.POSITION.TOP_RIGHT
            });






            for (let j = 0; j < myRef.length; j++) {
                if (myRef[j].feesPr > 70) {
                    totalRefAmount = Number(totalRefAmount) + Number(myRef[j].ref_amount)
                }

            }
            for (let i = 0; i < myfees.length; i++) {
                total = Number(total) + Number(myfees[i].amount)
            }
            totalAmount = Number(total) + totalRefAmount + ActiveRef
            let abce = Number(totalAmount) * 100 / Number(courseFee)
            let ac = Number(abce).toFixed(2);

            const db = firebaseApp.firestore();
            db.collection('Students').where('id', '==', data).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    var updateCollection = db.collection("Students").doc(doc.ref.id);

                    return updateCollection.update({
                        fees: myfees,
                        feesPr: Number(ac),
                        feesstatus: "paid"
                    })
                        .then(() => {
                            console.log("Document successfully updated!");
                            sendWhatsappMessage(doc.data())
                            addIncome(data2)
                            handleClose()
                            getdata()
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
    }




    const addIncome = (data2) => {

        let leaveId = makeid(8)
        const db = firebaseApp.firestore();
        let registerQuery = new Promise((resolve, reject) => {

            db.collection("Expenses").add({
                date: date,
                detail: data2.rowData[0] + ' , ' + data2.rowData[1] + ' - fees',
                amount: amount,
                type: payment,
                status: 1,
                id: leaveId
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    toast.success(' income added successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });

                })
                .catch(function (error) {
                    console.error("Please check form again ", error);
                    reject(error);

                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
        }).catch(error => {
            console.error(error)
        })
    }

    const showform = (data) => {
        window.location.href = "./paymentdetail/" + data
    }



    const getdata = () => {
        let entry = []
        let feesstatus = []
        const db = firebaseApp.firestore();

        db.collection('Students').where("status", "==", 1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                feesstatus.push(doc.data().fees)
                entry.push(doc.data())
            })
            entry.sort((a, b) => a.er_num - b.er_num)
            setStdata(entry)
            setFees(feesstatus)
        }).catch(err => {
            console.error(err)
        });
    }



    const columns = [
        {
            name: "er_num",
            label: "Enrollment",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "f_name",
            label: "Student name",
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
        //     name: "password",
        //     label: "password",
        //     options: {
        //         filter: true,
        //         sort: true,
        //     },
        // },
        {
            name: "feesPr",
            label: "fees percentage",
            options: {
                filter: true,
                sort: true,
            },
        },

        {
            name: "createdAt",
            label: "Date & Time",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div>
                            <input type="date" className='form-control' value={date} onChange={e => gettodate(e.target.value)} />
                        </div>
                    );
                },
            },
        },
        {
            name: "createdAt",
            label: "Amount",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className='tabledat' onChange={e => setAmount(e.target.value)} >
                            <input type="number" id="fname" className='form-control' name="fname" required />
                        </div>
                    );
                },
            },
        },
        {
            name: "createdAt",
            label: "Method",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className='payment' required>
                            <select className='form-control' onChange={handleChange}>
                                <option value="0" selected>Cash</option>
                                <option value="1">Google Pay</option>
                                <option value="2">Banktransfer</option>
                                <option value="3">Cheque</option>
                            </select>
                        </div>
                    );
                },
            },
        },
        {
            name: "id",
            label: "Action",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div >
                            <button className='btn btn-primary ' onClick={() => submitform(value, tableMeta)}>Submit</button>
                        </div>
                    );
                },
            },
        },
        {
            name: "er_num",
            label: "View",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div >
                            <button className='btn btn-primary ' onClick={() => showform(value)}>View</button>
                        </div>
                    );
                },
            },
        },

    ];




    const options = {
        // selectableRows: "multiple",
        selectableRowsHideCheckboxes: true,
        pagination: false,

        // selectableRowsOnClick: true,
    };

    return (
        <AdminLayout>

            <div className="content-main-section">
                <CacheProvider value={muiCache}>
                    <ThemeProvider theme={createTheme()}>
                        <MUIDataTable
                            title={"Student List"}
                            data={stdata}
                            columns={columns}
                            options={options}

                        />

                    </ThemeProvider>
                </CacheProvider>
                <ToastContainer />
            </div>


            <Modal show={showModal} centered onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>ARE YOU SURE?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to submit fees?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onsavedata}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </AdminLayout>

    )
}



