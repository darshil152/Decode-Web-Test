import StudentSidebar from "./studentsidebar";
import StudentHeader from "./studentheader";
import StudentFooter from "./studentfooter"
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";

function StudentLayout(props) {


    const [performanceday, setperformanceDay] = useState('')
    const [performanceweek, setperformanceWeek] = useState('')

    const [performancemonth, setperformanceMonth] = useState('')


    useEffect(() => {

        const userId = "2ILwwwxXh7S4LpW9eQcdKkSXvmj2";
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${userId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                setperformanceDay(snapshot.val().sod)
                setperformanceWeek(snapshot.val().sow)
                setperformanceMonth(snapshot.val().som)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])


    const removeLayer = () => {
        document.getElementById("root").classList.remove("dash-main-class-add");

    };

    return (
        <>


            <StudentHeader />
            <StudentSidebar />
            {props.children}
            <StudentFooter />
            <div className="overlay toggle-icon-main" onClick={removeLayer}></div>
        </>
    );
}

export default StudentLayout;
