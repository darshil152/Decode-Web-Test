import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import firebaseApp from './firebase/firebase';
import moment from "moment";
import Studentlayout from "./studentlayout/studentlayout"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
export default class Timetable extends Component {
    constructor(props) {
        super();
        this.state = {
            id: "",
            currentuser: "",
            sc: localStorage.getItem('sc'),
            eventsData: [
                {
                    id: 0,
                    title: "Chirstmas Day",
                    allDay: true,
                    start: new Date(2023, 11, 25),
                    end: new Date(2023, 11, 26)
                },
                {
                    id: 0,
                    title: "Makarsankranti",
                    allDay: true,
                    start: new Date(2024, 0, 15),
                    end: new Date(2024, 0, 16)
                },
                {
                    id: 1,
                    title: "Dhuleti",
                    start: new Date(2024, 2, 25),
                    end: new Date(2024, 2, 26)
                },

                {
                    id: 2,
                    title: "Rakshabandhan",
                    start: new Date(2024, 7, 19),
                    end: new Date(2024, 7, 20)
                },

                {
                    id: 3,
                    title: "Janmastami",
                    start: new Date(2024, 7, 26),
                    end: new Date(2024, 7, 28)
                },

                {
                    id: 4,
                    title: "Ganapati Visharjan",
                    start: new Date(2024, 8, 17),
                    end: new Date(2024, 8, 18)
                },
                {
                    id: 5,
                    title: "Diwali",
                    start: new Date(2024, 9, 28),
                    end: new Date(2024, 10, 11),
                    desc: "Diwali Vacation"
                }]

        }
    }

    componentDidMount() {
        const url = window.location.href;
        var ids = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id: ids }, () => {
            this.getuserrole();
        })
    }


    getuserrole = () => {
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                this.setState({ currentuser: doc.data().password, currentdata: doc.data(), email: doc.data().email, dob: doc.data().dob, profile: doc.data().profile_img ? doc.data().profile_img : '', line_1: doc.data().line_1, line_2: doc.data().line_2, city: doc.data().city }, () => {
                    if (Number(localStorage.getItem('userrole')) !== 2) {
                        if (this.state.sc !== this.state.currentuser) {
                            window.location.href = '/'
                        }
                    }
                })
            });
        }).catch(err => {
            console.error(err)
        });
    }
    render() {
        return (
            <>
                <Studentlayout>
                    <div className='content-main-section left mt-5'>
                        <div className='container'>

                            <Calendar

                                // selectable
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={this.state.eventsData}

                                className='Calender'

                            />



                        </div>

                    </div>
                </Studentlayout>
            </>
        )
    }
}
