import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import firebaseApp from './firebase/firebase'
import MUIDataTable from 'mui-datatables'
import AdminLayout from './adminlayout/adminlayout';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const userdummy = "https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fuserdummy.png?alt=media&token=ce4262c4-3a2a-4492-bdc4-927ac72a3a7a&_gl=1*11sgdfb*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU3MDAwODcuMC4wLjA."



export default function Dashboard() {

    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })


    const [stdata, setStdata] = useState([]);
    const [activeStudent, setActiveStudent] = useState([])
    const [allStudent, setAllStudent] = useState([])
    const [toggles, setToggles] = useState(false);
    const [getid, setGetid] = useState('');
    const [todaydate, setTodaydate] = useState(new Date().toJSON().slice(0, 10));


    useEffect(() => {
        getdata()
        // adminbay()
    }, [])


    const getdata = () => {
        let entry = []
        let activeStudents = []

        const db = firebaseApp.firestore();
        db.collection('Students').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if ((doc.data().userRole == 1) || (doc.data().userRole == 0)) {
                    entry.push(doc.data())
                    if (doc.data().status == 1) {
                        activeStudents.push(doc.data())
                    }
                }
            })
            entry.sort((a, b) => a.er_num - b.er_num)
            setActiveStudent(activeStudents)
            setAllStudent(entry)
            setStdata(activeStudents);
            getBirthdayData(entry)

        }).catch(err => {
            console.error(err)
        });
    }

    const getBirthdayData = (data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].dob.split('-')[1] == todaydate.split('-')[1] && data[i].dob.split('-')[2] == todaydate.split('-')[2]) {
                toast("Today is " + data[i].f_name + ' ' + data[i].l_name + "'s Birthday", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    }

    const viewuser = (datas) => {
        window.location.href = "./profile/" + datas;
    }

    const edituser = (data) => {
        window.location.href = "./add-student/" + data
        localStorage.setItem('mmatchid', data)
    }

    const changetoggle = (event, data) => {
        changetogglestatus(event, data.rowData[0])
    }


    const changeplacetoggle = (event, data) => {
        changeplacementtoggle(event, data.rowData[0])
    }

    const changeplacementtoggle = (e, id) => {
        let statusss = e.target.checked == true ? 1 : 0
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    Placementstatus: statusss

                })
                    .then(() => {
                        console.log("Document successfully updated!");
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



    const changetogglestatus = (e, id) => {
        let status = e.target.checked == true ? 1 : 0
        const db = firebaseApp.firestore();
        db.collection('Students').where("er_num", "==", Number(id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var updateCollection = db.collection("Students").doc(doc.ref.id);

                return updateCollection.update({
                    status: status

                })
                    .then(() => {
                        console.log("Document successfully updated!");
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

    const showAllStudent = (e) => {
        if (e.target.checked) {
            setStdata(allStudent)
        } else {
            setStdata(activeStudent)
        }
    }

    const columns = [
        {
            name: "er_num",
            label: "Enrollment Number",
            options: {
                filter: true,
                sort: true,
            },
        },

        {
            name: "profile_img",
            label: "Profile Image",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            {/* <img src={value} /> */}
                            <img src={value !== '' ? value : userdummy} style={{ width: "80px", borderRadius: "15px" }} />

                        </>
                    );

                },
            },
        },

        {
            name: "f_name",
            label: "First Name",
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
        {
            name: "status",
            label: "Status",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <label className="switch">
                                <input type="checkbox" className="toggle" checked={value} onChange={(e) => changetoggle(e, tableMeta)} />
                                <span className="slider round"></span>
                            </label>
                        </>
                    );
                },
            },
        },

        {
            name: "Placementstatus",
            label: "Placement Status",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <label className="switch">
                                <input type="checkbox" className="toggle" checked={value} onChange={(e) => changeplacetoggle(e, tableMeta)} />
                                <span className="slider round"></span>
                            </label>
                        </>
                    );
                },
            },
        },

        {
            name: "phone",
            label: "Contact Number",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "password",
            label: "Password",
            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "feesstatus",
            label: "feesstatus",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            {
                                value == "pending" ? <h6 style={{ color: "white", backgroundColor: "red", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px" }} className="text-center">  Pending</h6> : <h6 style={{ color: "white", backgroundColor: "green", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px" }} className="text-center">paid</h6>
                            }
                        </>
                    );
                },
            },
        },


        // {
        //     name: "f_phone",
        //     label: "Father's phone",
        //     options: {
        //         filter: true,
        //         sort: true,
        //     },
        // },

        // {
        //     name: "courses",
        //     label: "Course",
        //     options: {
        //         filter: true,
        //         sort: true,
        //         customBodyRender: (value, tableMeta, updateValue) => {
        //             return (
        //                 <>
        //                     {value == 1 ? <div className='rendercon'><h6 className='valtoname'>Master In Webdesign</h6></div> : value == 2 ? <div className='rendercon'><h6 className='valtoname'>Master In Frontend Development</h6></div> : value == 3 ? <div className='rendercon'><h6 className='valtoname'>Master In backend Development</h6></div> : value == 4 ? <div className='rendercon'><h6 className='valtoname'>firebase</h6></div> : value == 5 ? <div className='rendercon'><h6 className='valtoname'>Master in 360 & 3D Website</h6></div> : value == 6 ? <div className='rendercon'><h6 className='valtoname'>Master In Fullstack Development</h6></div> : value == 7 ? <div className='rendercon'><h6 className='valtoname'>Master In MERN-stack Development</h6></div> : <div className='rendercon'></div>}
        //                 </>
        //             );

        //         },
        //     },
        // },
        {
            name: "er_num",
            label: "View",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <button className='btn btn-primary primary-btn' onClick={() => viewuser(value)}>View</button>
                        </>
                    );

                },
            }
        },
        {
            name: "er_num",
            label: "Edit",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <>
                            <button className='btn btn-primary primary-btn' onClick={() => edituser(value)}>Edit</button>
                        </>
                    );

                },
            }
        },
    ];



    const options = {
        // selectableRows: "multiple",
        selectableRowsHideCheckboxes: true,
        pagination: false,
        sortOrder: {
            name: 'er_num',
            direction: 'asc'
        },
        // selectableRowsOnClick: true,
    };




    return (
        <AdminLayout>
            <div className="content-main-section">
                <div className='d-flex justify-content-around'>
                    <h4 className='p-3'>Total Active Students : {activeStudent.length}</h4  >
                    <div className='d-flex'>
                        <h4 className='p-3'>Show All : </h4>
                        <label className="switch">

                            <input type="checkbox" className="toggle" onChange={showAllStudent} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <CacheProvider value={muiCache}>
                    <ThemeProvider theme={createTheme()}>
                        <MUIDataTable
                            title={"Students List"}
                            data={stdata}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </CacheProvider>
            </div>
            <ToastContainer />
        </AdminLayout>
    )
}
