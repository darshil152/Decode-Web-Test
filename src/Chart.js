

import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';
import { number } from 'yup';
// import { initializeApp } from 'firebase/app';
// import firebaseApp from "./firebase/firebase";
// const admin = require('firebase-admin');



export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            cars: "",
            startdate: "",
            enddate: "",
            date1: "",
            date2: "",
            days: "",
            totalday: "",
            item: "",
        }
    }


    handleselect = (event) => {
        this.setState({ cars: Number(event.target.value) })
    }

    handlestart = (event) => {
        this.setState({ startdate: event.target.value }, () => {
            this.setState({ date1: new Date(this.state.startdate) })
        })
    }


    getdays = () => {
        let time_difference = this.state.date2.getTime() - this.state.date1.getTime();
        let result = time_difference / (1000 * 60 * 60 * 24);
        this.setState({ days: Number(result) })
    }

    handleend = (event) => {

        this.setState({ enddate: event.target.value }, () => {
            this.setState({ date2: new Date(this.state.enddate) }, () => {
                this.getdays();

            })
        })
    }

    handleitem = (event) => {
        this.setState({ item: Number(event.target.value) })
    }


    finalprice = () => {
        let data = Number(this.state.cars) * Number(this.state.days) * Number(this.state.item)
    }


    getprice = () => {
        // this.finalprice()
        window.location.href = "./about.js"
    }

    render() {
        return (

            <>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-12'>


                            <input type="number" onChange={this.handleitem} />
                            <label for="date">Starting Date:</label>
                            <input type="date" onChange={this.handlestart} />


                            <label for="date">Starting Date:</label>
                            <input type="date" onChange={this.handleend} />



                            <label for="cars">Choose a car:</label>
                            <select name="cars" id="cars" onClick={this.handleselect}>
                                <option value="0.80">tata</option>
                                <option value="0.80">supr</option>
                                <option value="0.80">Mercedes</option>
                                <option value="0.80">Audi</option>
                            </select>


                            <button className='btn btn-primary primary-btn' onClick={this.getprice}> Get Price</button>
                        </div>
                    </div>
                </div>



            </>



        );
    }
}
