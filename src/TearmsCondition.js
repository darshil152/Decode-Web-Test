import React, { Component } from 'react'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'

export default class TearmsCondition extends Component {
    render() {
        return (
            <Layout>
                <HeaderForPage name='Terms & Conditions' />
                <div className="container-fluid px-0 py-5">
                    <div className="row mx-0 justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="section-title text-center position-relative mb-4">
                                <h1 className="display-4">Be Recruiter Terms</h1>
                            </div>
                            <div className="section-title  position-relative mb-4">
                                <ul className="course-points">
                                    <li>Decode Softtech offers a variety of courses in the field of IT, Multimedia (Designing &amp; Development)</li>
                                    <li>Decode Softtech is an organization that runs a Training &amp; Placement &amp; (T&amp;P) Department for the students and companies that are looking for potential candidates for their suitable requirements which will help to make Surat an IT HUB. However,Decode Softtech is not a placement consultancy, in particular, so after the selection of candidates,Decode Softtech is not bound to any responsibilities. Still, we will always be ready to provide necessary support and help, for which Decode Softtech will not take any charge.</li>
                                    <li>All the details regarding student placement such as student’s absence on the interview day, selection result, or any future update regarding student’s behavior and punctuality must be provided to the T&amp;P department on a regular basis.</li>
                                    <li>The company can be applied for the campus interview If a company has more than 10 employees. In this procedure, the company can visit the institute for the selection process after letting the T&amp;P department know.</li>
                                    <li>Institute can use the logo of a placement partner company, and can also enlist them as a partner list. Institute can send future students to visit the company for practical knowledge, and if needed the partner company must arrange the field expert for the knowledge sharing with students.</li>
                                    <li>If the candidate’s course is running and he\she gets selected on basis of his current knowledge, then to complete his remaining course company must arrange his job hours according to the lecture timing.</li>
                                    <li>The availability of the T&amp;P department for contact is only on Tuesday and Friday from 12:00 PM to 1:00 PM &amp; 2:00 PM to 4:00 PM</li>
                                    <li>After the selection of candidates, the company must issue the offer/joining letter of the same.</li>
                                    <li>We expect you to provide your experiences and feedback in the medium of video review via mail to us.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
