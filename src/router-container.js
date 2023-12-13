import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './AboutPage';
import AddStudent from './add-student';
import ContactPage from './ContactPage';
import CoursePage from './CoursePage';
import DetailsPage from './DetailsPage';
import FeaturePage from './FeaturePage';
import Home from './home';
import PlacementPartners from './PlacementPartners';
import TeamPage from './TeamPage';
import TearmsCondition from './TearmsCondition';
import TestimonialPage from './TestimonialPage';
import "../src/css/admincss/style.css";
import "../src/css/admincss/style.scss";
import ProtectedRoute from './ProtectedRouter';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Login from './Login';
import Attandance from './Attandance';
import Attandancesheet from './Attandancesheet';
import Fees from './Fees';
import Paymentdetail from './Paymentdetail';
import ProtectedRouteAdmin from './ProtectedRouterAdmin';
import ProtectedRouteStudent from './ProtectedRouterStudent';
import ReferenceDetails from './ReferenceDetails';
import Navbarforprofile from './navbarforprofile';
import Rules from './Rules';
import Langhaugeterm from './Langhaugeterm';
import Timetable from './Timetable';
import Newpassword from "./Newpassword";
import Add2 from './add2';
import Languageprogress from './languageprogress';
import Contactus from './contactus';
import Newstudents from './newstudents';
import Expensetable from './expensetable';
import Test from './Test';
import Leave from './leave';
import Adminleave from './adminleave';
import Career from './career';
import Recruitment from './recruitment';
import Performance from "./performance.js";
import ProtectedRouteHr from './ProtectedRouterHr';
import Chart from './Chart';
import Myprojects from './myprojects';
import DecodeAnalytics from './DecodeAnalytics';
import Gallery from './Gallery';
import Placement from './Placement';
import Studeneplacement from './Studeneplacement';
import GalleryPage from './GalleryPage';
import Instagram from './Instagram';

// import Approve from './leavelayout/approve';

export default class RouterContainer extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/courses" element={<CoursePage />} />
                    <Route path="/details/:id" element={<DetailsPage />} />
                    <Route path="/testimonial" element={<TestimonialPage />} />
                    <Route path="/instructors" element={<TeamPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/feature" element={<FeaturePage />} />
                    <Route path="/terms" element={<TearmsCondition />} />
                    <Route path="/rules" element={<Rules />} />
                    {/* <Route path="/add2" element={<Add2 />} />
                    <Route path="/add2/:id" element={<Add2 />} />
                    <Route path="/fees/:id" element={<Fees />} />
                    <Route path="/progress" element={<Languageprogress />} />
                    <Route path="/progress/:id" element={<Languageprogress />} /> */}
                    <Route path="/career" element={<Career />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/gallery/:id" element={<GalleryPage />} />
                    <Route path="/placement-partners" element={<PlacementPartners />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/add2" element={<Add2 />} />
                    <Route path="/placement" element={<Placement />} />
                    <Route path="/placements/:id" element={<Studeneplacement />} />







                    <Route path="/placements/:id" element={
                        <ProtectedRouteStudent>
                            <Studeneplacement />
                        </ProtectedRouteStudent>} />
                    <Route path="/project/:id" element={
                        <ProtectedRouteStudent>
                            <Myprojects />
                        </ProtectedRouteStudent>} />
                    <Route path="/leave/:id" element={
                        <ProtectedRouteStudent>
                            <Leave />
                        </ProtectedRouteStudent>} />
                    <Route path="/regulation/:id" element={
                        <ProtectedRouteStudent>
                            <Langhaugeterm />
                        </ProtectedRouteStudent>} />
                    <Route path="/timetable/:id" element={
                        <ProtectedRouteStudent>
                            <Timetable />
                        </ProtectedRouteStudent>} />
                    <Route path="/newpassword/:id" element={
                        <ProtectedRouteStudent>
                            <Newpassword />
                        </ProtectedRouteStudent>} />
                    <Route path="/profile/:id" element={
                        <ProtectedRouteStudent>
                            <Profile />
                        </ProtectedRouteStudent>
                    } />
                    <Route path="/socialmedia/:id" element={
                        <ProtectedRouteStudent>
                            <Instagram />
                        </ProtectedRouteStudent>
                    } />
                    <Route path="/attandancesheet/:id" element={
                        <ProtectedRouteStudent>
                            <Attandancesheet />
                        </ProtectedRouteStudent>
                    } />
                    <Route path="/paymentdetail/:id" element={
                        <ProtectedRouteStudent>
                            <Paymentdetail />
                        </ProtectedRouteStudent>
                    } />
                    <Route path="/referencedetail/:id" element={
                        <ProtectedRouteStudent>
                            <ReferenceDetails />
                        </ProtectedRouteStudent>
                    } />




                    {/* <Route path="/add-student" element={
                        <ProtectedRouteAdmin>
                            <AddStudent />
                        </ProtectedRouteAdmin>
                    } />

                    <Route path="/recruitment" element={
                        <ProtectedRouteAdmin>
                            <Recruitment />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/add-student/:id" element={
                        <ProtectedRouteAdmin>
                            <AddStudent />
                        </ProtectedRouteAdmin>} />
                    <Route path="/fees" element={
                        <ProtectedRouteAdmin>
                            <Fees />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/expensestable" element={
                        <ProtectedRouteAdmin>
                            <Expensetable />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/adminleave" element={
                        <ProtectedRouteAdmin>
                            <Adminleave />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/contactus" element={
                        <ProtectedRouteAdmin>
                            <Contactus />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/newstudent" element={
                        <ProtectedRouteAdmin>
                            <Newstudents />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/attandance" element={
                        <ProtectedRouteAdmin>
                            <Attandance />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/dashboard" element={
                        <ProtectedRouteAdmin>
                            <Dashboard />
                        </ProtectedRouteAdmin>
                    } />
                    <Route path="/performance" element={
                        <ProtectedRouteAdmin>
                            <Performance />
                        </ProtectedRouteAdmin>} />
                    <Route path="/analytics" element={
                        <ProtectedRouteAdmin>
                            <DecodeAnalytics />
                        </ProtectedRouteAdmin>} /> */}





                    <Route path="/attandance" element={
                        <ProtectedRouteHr>
                            <Attandance />
                        </ProtectedRouteHr>
                    } />
                    <Route path="/adminleave" element={
                        <ProtectedRouteHr>
                            <Adminleave />
                        </ProtectedRouteHr>
                    } />

                    <Route path="/contactus" element={
                        <ProtectedRouteHr>
                            <Contactus />
                        </ProtectedRouteHr>
                    } />


                    <Route path="*" element={<Home />} />
                </Routes>
            </Router>
        )
    }
}
