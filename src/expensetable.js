import React, { Component } from 'react'
import AdminLayout from './adminlayout/adminlayout'
import firebaseApp from './firebase/firebase';
import MUIDataTable from "mui-datatables";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { Modal, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';


export default class Expensetable extends Component {

    constructor() {
        super()

        this.state = {
            date: "",
            detail: "",
            amount: "",
            type: "",
            Schema: Yup.object().shape({
                amount: Yup.string().required("Amounts is required"),
                detail: Yup.string().required("Detail is required"),
                type: Yup.string().required("Payment type is required"),
            }),
            allexpenses: [],
            allincome: [],
            startDate: "",
            endDate: "",
            total_expense_amount: [],
            final_expense_data: [],
            final_income_data: [],
            isOpen: false,
            isOpen1: false,
            total_income_amount: [],
            lastsevenday: "",
            todaydate: "",
            lastmonth: "",
            lastthree: "",

            seventotal: [],
            seventotal_expense_amount: [],



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
                    name: "amount",
                    label: "amount",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },

                {
                    name: "detail",
                    label: "detail",
                    options: {
                        filter: true,
                        sort: true,
                    },

                },



                {
                    name: "type",
                    label: "type",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    {value == 0 ? <div className='paymenttype'><h6 className='paymenttype'>Cash</h6></div> : value == 1 ? <div className='paymenttype'><h6 className='paymenttype'>Google Pay</h6></div> : value == 2 ? <div className='paymenttype'><h6 className='paymenttype'>Bank Transfer</h6></div> : value == 3 ? <div className='paymenttype'><h6 className='paymenttype'>Cheque</h6></div> : <div className='paymenttype'><h6 className='paymenttype'>Cash</h6></div>}

                                </>
                            );
                        },


                    },

                },

            ],

            options: {
                selectableRowsHideCheckboxes: true,
                pagination: false,
                sortOrder: {
                    name: 'date',
                    direction: 'des'
                }
            }


        }
    }
    componentDidMount() {
        this.getdata();
    }


    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false });


    makeid = (length) => {
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

    getdata = () => {
        let incomedata = []
        let expenseData = []

        const db = firebaseApp.firestore();
        db.collection('Expenses').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().status == 0) {
                    expenseData.push(doc.data())
                } else {
                    incomedata.push(doc.data())
                }

            });
            this.setState({ allexpenses: expenseData, final_expense_data: expenseData, final_income_data: incomedata, allincome: incomedata }, () => {
                this.getThisMonthExpense();
            })

        }).catch(err => {
            console.error(err)
        });
    }

    getThisMonthExpense = () => {
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        // we will display the date as DD-MM-YYYY 

        let currentDate = currentYear + '-' + currentMonth + '-' + currentDay;

        let startDate = currentYear + '-' + currentMonth + '-01';
        let endDate = currentDate
        this.setState({ startDate, endDate }, () => {
            this.getFinalExpenseData()
        })

    }





    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    changedate = (e) => {
        this.setState({ startDate: e.target.value })

    }

    changedate2 = (e) => {
        this.setState({ endDate: e.target.value })
    }


    getFinalExpenseData = () => {
        let totalIncomeData = []
        let totalExpenseData = []


        for (let i = 0; i < this.state.allexpenses.length; i++) {
            if (this.state.allexpenses[i].date <= this.state.endDate && this.state.allexpenses[i].date >= this.state.startDate)
                totalExpenseData.push(this.state.allexpenses[i])
            this.setState({ final_expense_data: totalExpenseData }, () => {


            })
        }
        for (let j = 0; j < this.state.allincome.length; j++) {
            if (this.state.allincome[j].date <= this.state.endDate && this.state.allincome[j].date >= this.state.startDate)
                totalIncomeData.push(this.state.allincome[j])
            this.setState({ final_income_data: totalIncomeData })
        }
        setTimeout(() => {
            this.getFinalIncomeAmount()
        }, 500);
    }

    getFinalIncomeAmount = () => {
        let totalIncome = 0;
        let totalExpense = 0;
        for (let i = 0; i < this.state.final_income_data.length; i++) {

            totalIncome = Number(totalIncome) + Number(this.state.final_income_data[i].amount)

            this.setState({ total_income_amount: totalIncome })
        }


        for (let i = 0; i < this.state.final_expense_data.length; i++) {

            totalExpense = Number(totalExpense) + Number(this.state.final_expense_data[i].amount)

            this.setState({ total_expense_amount: totalExpense })
        }

    }







    reset = () => {
        this.setState({ final_expense_data: this.state.allexpenses, final_income_data: this.state.allincome }, () => {
            this.getFinalIncomeAmount();
        })

    }



    Expensedata = (formData) => {
        let leaveId = this.makeid(8)
        const db = firebaseApp.firestore();
        let registerQuery = new Promise((resolve, reject) => {

            db.collection("Expenses").add({
                date: formData.date,
                detail: formData.detail,
                amount: formData.amount,
                type: formData.type,
                status: 0,
                id: leaveId
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    toast.success(' Expenses added successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.getdata()
                    // navigate('/dashboard')

                })
                .catch(function (error) {
                    console.error("Please check form again ", error);
                    reject(error);
                    // toast.error('Attendance is already added', {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
            // toast.success("Thank you for reaching out. We will contact you soon.")
        }).catch(error => {
            console.error(error)
        })

    }

    incomedata1 = (formData) => {
        let leaveId = this.makeid(8)
        const db = firebaseApp.firestore();
        let registerQuery = new Promise((resolve, reject) => {

            db.collection("Expenses").add({
                date: formData.date,
                detail: formData.detail,
                amount: formData.amount,
                type: formData.type,
                status: 1,
                id: leaveId
            })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    resolve(docRef.id);
                    toast.success(' Expenses added successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    }, () => {
                        this.getdata()
                    });

                })
                .catch(function (error) {
                    console.error("Please check form again ", error);
                    reject(error);
                    // toast.error('Attendance is already added', {
                    //     position: toast.POSITION.TOP_RIGHT
                    // });
                });
        });
        registerQuery.then(result => {
            console.warn('register successful')
            // toast.success("Thank you for reaching out. We will contact you soon.")
        }).catch(error => {
            console.error(error)
        })

    }








    render() {
        return (
            <AdminLayout >

                <div className="content-main-section">
                    <div className='container-fluid mt-5'>
                        <h1 className={(this.state.total_income_amount - this.state.total_expense_amount) >= 300000 ? 'text-center display-4 text-success' : (this.state.total_income_amount - this.state.total_expense_amount) < 0 ? 'text-center display-4 text-danger' : 'text-center display-4'}>Total : {this.state.total_income_amount - this.state.total_expense_amount}</h1>

                        <div className='row text-center'>
                            <div className='col-md-4 ' >
                                <label className='filterdate'>Start Date</label>
                                <input type="date" className='form-control m-auto w-50' value={this.state.startDate} onChange={(e) => this.changedate(e)} />
                            </div>
                            <div className='col-md-4'>
                                <label className='filterdate'>End Date</label>
                                <input type="date" className='form-control m-auto w-50' value={this.state.endDate} onChange={(e) => this.changedate2(e)} />
                            </div>
                            <div className='col-md-4 mt-3 m-lg-0'>
                                <button onClick={this.getFinalExpenseData} className="btn btn-primary primary-btn ms-5" >Submit</button>
                                <button onClick={this.reset} className="btn btn-primary primary-btn ms-5" >Reset</button>

                            </div>

                        </div>

                        <div className='row mt-5'>
                            <div className="col-lg-6">

                                <h1 className='text-center mb-5 mt-5'>Total income</h1>
                                <CacheProvider value={this.muiCache}>
                                    <ThemeProvider theme={createTheme()}>
                                        <h4 className='text-center mt-5'> Total Amount : ₹ {this.state.total_income_amount} </h4>
                                        <div className="text-left mb-4">
                                            <button className='btn btn-primary primary-btn text-center ' onClick={this.openModal1}>Add income</button>
                                        </div>
                                        <div className='table-height'>
                                            <MUIDataTable
                                                title={"Your Income List"}
                                                data={this.state.final_income_data}
                                                columns={this.state.columns}
                                                options={this.state.options}
                                            />
                                        </div>

                                    </ThemeProvider>
                                </CacheProvider>
                            </div>





                            <div className='col-lg-6'>

                                <h1 className='text-center mb-5 mt-5'>Total Expenses</h1>
                                <CacheProvider value={this.muiCache}>
                                    <ThemeProvider theme={createTheme()}>
                                        <h4 className='text-center mt-5'> Total Amount : ₹ {this.state.total_expense_amount} </h4>
                                        <div className="text-left mb-4">
                                            <button className='btn btn-primary primary-btn' onClick={this.openModal}>Add Expenses</button>
                                        </div>
                                        <div className='table-height'>
                                            <MUIDataTable
                                                title={"Your Expenses List"}
                                                data={this.state.final_expense_data}
                                                columns={this.state.columns}
                                                options={this.state.options}
                                            />
                                        </div>
                                    </ThemeProvider>
                                </CacheProvider>

                            </div>




                            <Modal show={this.state.isOpen} centered onHide={this.closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Expenses</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Formik
                                        initialValues={{
                                            date: new Date().toJSON().slice(0, 10),
                                            detail: "",
                                            amount: "",
                                            type: "",
                                        }}
                                        validationSchema={this.state.Schema}
                                        onSubmit={(values) => {
                                            this.Expensedata(values)

                                        }}
                                    >
                                        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                            return (
                                                <form onSubmit={handleSubmit}>
                                                    <h1 className='text-center'>Expenses</h1>
                                                    <div className="inputDiv">
                                                        <label for="date" className="inputLabels">date:</label>
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className="form-control input-style"
                                                            value={values.date}
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.date}
                                                        </span>
                                                    </div>

                                                    <div className="inputDiv">
                                                        <label for="passowrd" className="inputLabels"> Detail:</label>
                                                        <input
                                                            type="text"
                                                            name="detail"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.detail}
                                                            className="form-control input-style"
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.detail}
                                                        </span>
                                                    </div>

                                                    <div className="inputDiv">
                                                        <label for="amount" className="inputLabels" >amount</label>
                                                        <input
                                                            type="number"
                                                            name="amount"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className="form-control input-style"
                                                            value={values.amount}
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.amount}
                                                        </span>
                                                    </div>
                                                    <div className=" mt-3 inputDiv">
                                                        <label className="selectcourse">Select type: <span className="text-danger">*</span></label>
                                                        <select className="form-control input-style"
                                                            name="type"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.type}

                                                        >
                                                            <option value="" label="Select a Type    ">
                                                                Select a Type{" "}
                                                            </option>
                                                            <option value="0" label="Cash ">
                                                                {" "}
                                                                Cash
                                                            </option>
                                                            <option value="2" label="Bank Transfer">
                                                                Bank Transfer
                                                            </option>

                                                        </select>


                                                    </div>


                                                    <div className="buttonWrapper">
                                                        <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary" onClick={this.closeModal}>
                                                            <span>submit</span>
                                                        </button>
                                                    </div>
                                                </form>

                                            );
                                        }}
                                    </Formik>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.closeModal}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>




                            <Modal show={this.state.isOpen1} centered onHide={this.closeModal1}>

                                <Modal.Body>
                                    <Formik
                                        initialValues={{
                                            date: new Date().toJSON().slice(0, 10),
                                            detail: "",
                                            amount: "",
                                            type: "",
                                        }}
                                        validationSchema={this.state.Schema}
                                        onSubmit={(values) => {
                                            this.incomedata1(values)

                                        }}
                                    >
                                        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                                            return (
                                                <form onSubmit={handleSubmit}>
                                                    <h1 className='text-center'>Income</h1>
                                                    <div className="inputDiv">
                                                        <label for="date" className="inputLabels">date:</label>
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className="form-control input-style"
                                                            value={values.date}
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.date}
                                                        </span>
                                                    </div>

                                                    <div className="inputDiv">
                                                        <label for="passowrd" className="inputLabels"> Detail:</label>
                                                        <input
                                                            type="text"
                                                            name="detail"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            value={values.detail}
                                                            className="form-control input-style"
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.detail}
                                                        </span>
                                                    </div>

                                                    <div className="inputDiv">
                                                        <label for="amount" className="inputLabels" >amount</label>
                                                        <input
                                                            type="number"
                                                            name="amount"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            className="form-control input-style"
                                                            value={values.amount}
                                                        />
                                                        <span className="error" style={{ color: "red" }}>
                                                            {errors.amount}
                                                        </span>
                                                    </div>
                                                    <div className=" mt-3 inputDiv">
                                                        <label className="selectcourse">Select type: <span className="text-danger">*</span></label>
                                                        <select className="form-control input-style"
                                                            name="type"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.type}

                                                        >
                                                            <option value="" label="Select a Type    ">
                                                                Select a Type{" "}
                                                            </option>
                                                            <option value="1" label="Cash ">
                                                                {" "}
                                                                Cash
                                                            </option>
                                                            <option value="2" label="Bank Transfer">
                                                                Bank Transfer
                                                            </option>

                                                        </select>


                                                    </div>


                                                    <div className="buttonWrapper">
                                                        <button type="submit" id="submitButton" className="submitButton pure-button pure-button-primary" onClick={this.closeModal1}>
                                                            <span>submit</span>
                                                        </button>
                                                    </div>
                                                </form>

                                            );
                                        }}
                                    </Formik>
                                </Modal.Body>

                            </Modal>
                        </div>
                    </div>

                </div>
                <ToastContainer />

            </AdminLayout >
        )
    }
}
