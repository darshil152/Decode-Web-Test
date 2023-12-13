import React, { Component } from 'react'
import firebaseApp from './firebase/firebase';
import MUIDataTable from "mui-datatables";

import Loginheader from './Loginheader';
import ReactApexChart from 'react-apexcharts';
import StudentLayout from './studentlayout/studentlayout';
import { data } from 'jquery';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


const checked = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fchecked.png?alt=media&token=2ce815c3-51cc-4d52-872c-9e6349c10063&_gl=1*1gvzw6q*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcwNzYuMC4wLjA."
const cancel = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcancel.png?alt=media&token=7413dc0f-276a-4202-880c-a1d91985382f&_gl=1*1ovv5yz*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTYxMjIuMC4wLjA."
const grey = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fgrey.png?alt=media&token=d406b5b9-9d0d-441b-a1c0-453d5baf08c0&_gl=1*11pj3pj*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcwOTguMC4wLjA.";


export default class Attandancesheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            analyticsAdded: false,
            sc: localStorage.getItem('sc'),
            id: "",
            finalpercent: '',
            currentpass: "",
            countData: [],
            currentdata: [],
            oneandzero: [],
            presentdata: [],
            series: [0, 0],
            optionsa: {
                chart: {
                    width: 300,
                    type: 'pie',
                },
                fill: {
                    colors: ["#28a745", "#d1403f",]
                },
                labels: ['Present', 'Absent',],
                colors: ["#28a745", "#d1403f",], //Add this line
                responsive: [{
                    breakpoint: 498,
                    options: {
                        chart: {
                            width: 400,
                        },
                        legend: {
                            position: 'bottom',
                        },

                    }
                }]
            },


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
                    name: "date",
                    label: "Day",
                    options: {
                        filter: false,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    {
                                        <div className='datetoday'>{new Date(value).toLocaleDateString('en-us', { weekday: "long" })}</div>

                                    }
                                </>
                            );

                        },
                    },
                    sortOrder: {
                        name: 'name',
                        direction: 'desc'
                    }

                },
                {
                    name: "attandance",
                    label: "attandance",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return (
                                <>
                                    {value == 0 ? <div className='rendercon'><img src={cancel} className="renderimage" /></div> : value == 1 ? <div className='rendercon'><img src={checked} className="renderimage" /></div> : <div className='rendercon'><img src={grey} className="renderimage" /></div>}
                                </>
                            );

                        },
                    },

                },
            ],
            options: {
                selectableRowsHideCheckboxes: true,
                filterType: "dropdown",
                responsive: "scroll",
                direction: 'desc',
                sortOrder: {
                    name: 'date',
                    direction: 'des'
                },
                pagination: false,
            },

        };
    }

    componentDidMount() {
        const url = window.location.href;
        var ids = url.substring(url.lastIndexOf('/') + 1);
        this.setState({ id: ids }, () => {
            this.getdata();
        })
    }

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

    addAnalyticsInDatabase = () => {
        this.setState({ analyticsAdded: true })
        let url = window.location.href;
        if (url.includes('localhost') || url.includes('decodesoft.web.app' || this.state.currentdata.er_num == 23000001)) {
            console.log('not added')
        } else {
            let analyticsQuery = new Promise((resolve, reject) => {
                let db = firebaseApp.firestore();
                db.collection("DecodeAnalytics").add({
                    er_num: this.state.currentdata.er_num,
                    f_name: this.state.currentdata.f_name,
                    l_name: this.state.currentdata.l_name,
                    page: 'attendance',
                    start_time: Date.now(),

                    date: new Date(),
                    id: this.makeid(6)

                })
                    .then((docRef) => {
                        console.log("Document written with ID: ", docRef.id);
                        resolve(docRef.id);



                    })
                    .catch((error) => {
                        console.error("Please check form again ", error);
                        reject(error);

                    });
            });
            analyticsQuery.then(result => {
                console.warn('analytics added')
                // toast.success("Thank you for reaching out. We will contact you soon.")
            }).catch(error => {
                console.error(error)
            })
        }
    }


    theme = createTheme({
        shadows: "none"
    });

    muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })




    getdata = () => {
        let oneandzero = []
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(this.state.id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let entry = doc.data().myAttend

                entry.sort().reverse();
                // entry.sort((a, b) => a.date - b.date)`

                this.setState({ currentdata: entry, currentpass: doc.data().password }, () => {
                    if (!this.state.analyticsAdded) {
                        this.addAnalyticsInDatabase();
                    }



                    if (Number(localStorage.getItem('userrole')) !== 2) {
                        if (this.state.sc !== this.state.currentpass) {
                            window.location.href = '/'
                        }
                    }

                    for (let i = 0; i < this.state.currentdata.length; i++) {
                        if (this.state.currentdata[i].attandance == '1' || this.state.currentdata[i].attandance == '0') {
                            oneandzero.push(this.state.currentdata[i])
                        }
                    }



                    this.setState({ countData: oneandzero }, () => {
                        this.finalpercentage()
                    })
                })
            });
        }).catch(err => {
            console.error(err)
        });
    }


    finalpercentage = () => {

        let total = this.state.countData.length;   //8
        let presentStudents = []
        let dataseries = []

        for (let j = 0; j < total; j++) {
            if (this.state.countData[j].attandance == "1") {
                presentStudents.push(this.state.countData[j])
            }
        }


        let presentNumber = presentStudents.length;
        let absentNumber = total - presentNumber;
        dataseries.push(presentNumber)
        dataseries.push(absentNumber)
        let currentpercentage = ((100 * presentNumber) / total);
        this.setState({ finalpercent: currentpercentage, series: dataseries })
    }



    render() {
        return (
            <>
                <StudentLayout>
                    <div className='content-main-section left'>
                        <div className='container-fluid'>
                            <div className='row mt-3'>
                                <div className='col-lg-6 tabledata '>
                                    <div className='shdowa'>
                                        <div className='apex'>
                                            <h3 className='percentage' > Your attandance is:</h3>
                                            <ReactApexChart options={this.state.optionsa} series={this.state.series} type="pie" width={480} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='shdow tabledata'>
                                        <CacheProvider value={this.muiCache}>
                                            <ThemeProvider theme={createTheme()}>
                                                <MUIDataTable
                                                    title={"Your attandance List"}
                                                    data={this.state.currentdata}
                                                    columns={this.state.columns}
                                                    options={this.state.options}
                                                />
                                            </ThemeProvider>
                                        </CacheProvider>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </StudentLayout>
            </>

        )
    }
}
