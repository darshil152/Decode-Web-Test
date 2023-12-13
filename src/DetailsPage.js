import React, { Component } from 'react'
import HeaderForPage from './HeaderForPage'
import Layout from './Layout'
import OwlCarousel from 'react-owl-carousel';

import { Link } from 'react-router-dom';

const headerImg = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fheader.jpg?alt=media&token=b30e7c02-5d2b-4a32-beb6-e304d48b6910&_gl=1*7egkv2*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NjAyMzg5Mi4yNi4xLjE2ODYwMjM5MTYuMC4wLjA.'
const course1 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-1.jpg?alt=media&token=1bc4a708-1625-4352-a75e-dcdee1748f65&_gl=1*1a3ipx0*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMDIuMC4wLjA.'
const course2 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-2.jpg?alt=media&token=494d4042-cfc5-44ee-b8c8-3c4e62b4d1ab&_gl=1*mdrofa*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMTcuMC4wLjA.'
const course3 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-3.jpg?alt=media&token=b5a42be3-95e8-4a50-81f1-5089e990d1dd&_gl=1*fx6avc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyMjkuMC4wLjA.'
const course4 = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-4.jpg?alt=media&token=4aba60db-33bd-4d75-b124-ae604bc14ae7&_gl=1*4xixnv*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTcyNDYuMC4wLjA.'
const coursethumb = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fcourses-80x80.jpg?alt=media&token=1e132a8f-7793-40a3-9e97-0e54cc91bb41&_gl=1*1764j6u*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU2OTc1MjguMC4wLjA.'
const reacticon = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Freact_icon_130845.svg?alt=media&token=9a9986f2-2e9a-494b-928f-7a9035a2b076&_gl=1*1eye4cu*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU3MDA3OTEuMC4wLjA.'
const nodeicon = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Ffile_type_node_icon_130301.svg?alt=media&token=44ca5177-74e4-4153-9f9f-f2b59c844865&_gl=1*1fd8zfb*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU3MDA2MDYuMC4wLjA.'
const firebaseicon = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Ffirebase_logo_icon_171157.svg?alt=media&token=39c46859-db36-4ccf-baba-21d291bfa231&_gl=1*27ql3a*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU3MDA3MjcuMC4wLjA.'
const aframeicon = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fimages%2Fdownload_6%20(1)%20(1)%20(1).png?alt=media&token=dae5c133-4f57-4bc2-a04f-8f9e5c242f67&_gl=1*8in8hw*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTY5NDU3Ny4yMS4xLjE2ODU3MDA4MjcuMC4wLjA.'
export default class DetailsPage extends Component {

    state = {
        duration: '12',
        courseTitle: 'Master in Full-stack Development',
        codeDescription1: "Decode Softtech brings forward an exclusive and the best Full-Stack Web Developer course.We bestow an entire range of professional courses that would enhance your web development skills along with your soft skills.Programming skills would automatically have a stupendous impact on your resume. Programming jobs are highly coveted and are sought- after by numerous candidates.It’s one of the foremost essential skills and it is requisite to master this under the best guidance.Our Full Stack Development course would assist you in developing your proficiency in web development.",
        codeDescription2: "Get on board with the best industry experts and initiate your career efficiently.Besides, the full stack web developer course comes with Mould your professionalism by web Developer training.Get the certifications for the same and level up your skill game with us.Moreover, some of the most premium features such as Live Classes, Video Lectures, Practice Sets, and Assignments, quiz, detailed explanations and notes would amp up your web development skills even if you are not from a technical background.Unlatch your pathway to success by enrolling for the full stack developer course now. Join the Web Development Course here!"
    }

    componentDidMount() {
        let string = window.location.href
        let courseType = string.substring(string.lastIndexOf('/') + 1)
        if (courseType == '1') {
            this.setState({
                duration: '6',
                courseTitle: 'Master in Web Design',
                codeDescription1: 'A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site. Their role is different to web developers , who specialise in making web designs a reality or writing code that dictates how different parts of the website fit together. However, there can be crossover between the two roles.',
                codeDescription2: 'There are routes into web design for both university graduates and school leavers. For jobs advertised to graduates, employers are likely to seek a degree in digital media design or a related subject. Whether you have a related degree or not, you will need to be able to present a portfolio of your best web design work.',
            })
        } else if (courseType == '2') {
            this.setState({
                duration: '10',
                courseTitle: 'Master in Frontend Development',
                codeDescription1: 'A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.',
                codeDescription2: 'A good Front-End Web Developer will have an understanding of the web development process from inception to deployment. They will also have a good understanding of industry trends and the newest software programs and languages. In addition to the technical skills, they need to have excellent problem-solving skills and flexibility due to the changing technologies.'
            })
        } else if (courseType == '3') {
            this.setState({
                duration: '10',
                courseTitle: 'Master in Backend Development',
                codeDescription1: 'Back-end development means working on server-side software, which focuses on everything you can’t see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers. They use code that helps browsers communicate with databases, store, understand, and delete data.',
                codeDescription2: 'back-end developers collaborate with front-end developers, product managers, principal architects, and website testers to build the structure of a website or mobile app. Back-end developers must be familiar with many kinds of tools and frameworks, including languages such as Javascript, Node js, Express js. They make sure the back-end performs quickly and responsively to front-end user requests.'
            })
        } else if (courseType == '4') {
            this.setState({
                duration: '12',
                courseTitle: 'Master in Full-stack Development',
                codeDescription1: "Decode Softtech brings forward an exclusive and the best Full-Stack Web Developer course.We bestow an entire range of professional courses that would enhance your web development skills along with your soft skills.Programming skills would automatically have a stupendous impact on your resume. Programming jobs are highly coveted and are sought- after by numerous candidates.It’s one of the foremost essential skills and it is requisite to master this under the best guidance.Our Full Stack Development course would assist you in developing your proficiency in web development.",
                codeDescription2: "Get on board with the best industry experts and initiate your career efficiently.Besides, the full stack web developer course comes with Mould your professionalism by web Developer training.Get the certifications for the same and level up your skill game with us.Moreover, some of the most premium features such as Live Classes, Video Lectures, Practice Sets, and Assignments, quiz, detailed explanations and notes would amp up your web development skills even if you are not from a technical background.Unlatch your pathway to success by enrolling for the full stack developer course now. Join the Web Development Course here!"
            })
        } else if (courseType == '5') {
            this.setState({
                duration: '18',
                courseTitle: 'Master in 360 & 3D Web Development',
                codeDescription1: 'It is a common misconception that building applications that use 3D graphics can only be done within specialized environments like Unity or Unreal Engine. These days, nothing could be further from the truth. 3D objects can be visualized directly in the web browser. For web development, it was a breakthrough. Graphical elements could now be created with JavaScript, and not just HTML and CSS. Moreover, it was a viable native alternative to Adobe Flash, which required the (in)famous browser plug-in.',
                codeDescription2: 'New capabilities brought by WebGL2 coincided with rapidly growing market demand and the result was a surge in adoption. The trend to replace native software with web applications extended to 3D graphics, games, and simulators. Improving the performance of browser engines and users’ hardware made many new solutions possible.'
            })
        } else if (courseType == '6') {
            this.setState({
                duration: '14',
                courseTitle: 'Master in Firebase',
                codeDescription1: 'Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON- like documents.',
                codeDescription2: 'Firebase also gives developers a comprehensive list of products to aid them in the development process. Firstly, two database options are Firestore and Firebase’s Realtime Database.Likewise, Firebase lets you perform effortless cloud media storage and enables serverless application development through integrated Cloud Functions.'
            })
        }
    }




    render() {
        return (
            <Layout>
                <HeaderForPage name='Course Detail' />
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    <div className="section-title position-relative mb-5">
                                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Course
                                            Detail</h6>
                                        <h1 className="display-4">{this.state.courseTitle}</h1>
                                    </div>
                                    <img className="img-fluid rounded w-100 mb-4" src={headerImg} alt="Image" />
                                    <p className='text-justify'>{this.state.codeDescription1}
                                    </p>

                                    <p className='text-justify'>{this.state.codeDescription2}</p>
                                </div>

                                <h2 className="mb-3">Related Courses</h2>
                                <OwlCarousel className='owl-carousel related-carousel position-relative pad-0-30' items={2} margin={30} loop={true} smartSpeed={600} autoplay={true} dots={false} nav={true}>
                                    <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="/details/1">
                                        {/* <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/1'}> */}
                                        <img className="img-fluid" src={course1} alt="" />
                                        <div className="courses-text">
                                            <h4 className="text-center text-white px-3">Master in Web Design</h4>
                                            {/* <!-- <div className="border-top w-100 mt-3">
                                                <div className="d-flex justify-content-between p-4">
                                                    <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                                    <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                        <small>(250)</small></span>
                                                </div>
                                            </div> --> */}
                                        </div>
                                        {/* </Link> */}
                                    </a>
                                    <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="/details/2">
                                        {/* <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/2'}> */}
                                        <img className="img-fluid" src={course2} alt="" />
                                        <div className="courses-text">
                                            <h4 className="text-center text-white px-3">Master in Frontend Development</h4>
                                            {/* <!-- <div className="border-top w-100 mt-3">
                                                <div className="d-flex justify-content-between p-4">
                                                    <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                                    <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                        <small>(250)</small></span>
                                                </div>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    {/* </Link> */}
                                    <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="/details/3">
                                        {/* <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/3'}> */}
                                        <img className="img-fluid" src={course3} alt="" />
                                        <div className="courses-text">
                                            <h4 className="text-center text-white px-3">Master in Backend Development</h4>
                                            {/* <!-- <div className="border-top w-100 mt-3">
                                                <div className="d-flex justify-content-between p-4">
                                                    <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                                    <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                        <small>(250)</small></span>
                                                </div>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    {/* </Link> */}
                                    <a className="courses-list-item position-relative d-block overflow-hidden mb-2" href="/details/4">
                                        {/* <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={'/details/4'}> */}
                                        <img className="img-fluid" src={course4} alt="" />
                                        <div className="courses-text">
                                            <h4 className="text-center text-white px-3">Master in Fullstack Development</h4>
                                            {/* <!-- <div className="border-top w-100 mt-3">
                                                <div className="d-flex justify-content-between p-4">
                                                    <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                                                    <span className="text-white"><i className="fa fa-star mr-2"></i>4.5
                                                        <small>(250)</small></span>
                                                </div>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    {/* </Link> */}
                                </OwlCarousel>


                            </div>

                            <div className="col-lg-4 mt-5 mt-lg-0">
                                <div className="bg-primary mb-5 py-3">
                                    <h3 className="text-white py-3 px-4 m-0">Course Features</h3>
                                    <div className="d-flex justify-content-between border-bottom px-4">
                                        <h6 className="text-white my-3">Instructor</h6>
                                        <h6 className="text-white my-3">Heaven Kapopara</h6>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom px-4">
                                        <h6 className="text-white my-3">Daily Time</h6>
                                        <h6 className="text-white my-3">2 Hours</h6>
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom px-4">
                                        <h6 className="text-white my-3">Course Duration</h6>
                                        <h6 className="text-white my-3">{this.state.duration} Months</h6>
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom px-4">
                                        <h6 className="text-white my-3">Other Activity</h6>
                                        <h6 className="text-white my-3">Hackathon</h6>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom px-4">
                                        <h6 className="text-white my-3">Who can Learn?</h6>
                                        <h6 className="text-white my-3">12<sup>th</sup>Pass & above</h6>
                                    </div>
                                    <div className="d-flex justify-content-between px-4">
                                        <h6 className="text-white my-3">Language</h6>
                                        <h6 className="text-white my-3">Gujarati, Hindi & English</h6>
                                    </div>
                                    <h5 className="text-white py-3 px-4 m-0">100% Job Guarantee</h5>
                                    <div className="py-3 px-4">
                                        <Link className="btn btn-block btn-secondary py-3 px-5" to={'/contact'}>Enroll Now</Link>
                                        {/* <a className="btn btn-block btn-secondary py-3 px-5" href="contact.html">Enroll Now</a> */}
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <h2 className="mb-3">Categories</h2>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/1'} className="text-decoration-none h6 m-0" >Master in Web Design</Link> */}
                                            <a href="/details/1" className="text-decoration-none h6 m-0">Master in Web Design</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">150</span> --> */}
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/2'} className="text-decoration-none h6 m-0" >Master in Frontend Development</Link> */}
                                            <a href="/details/2" className="text-decoration-none h6 m-0">Master in Frontend Development</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">131</span> --> */}
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/3'} className="text-decoration-none h6 m-0" >Master in Backend Development</Link> */}
                                            <a href="/details/3" className="text-decoration-none h6 m-0">Master in Backend Development</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">78</span> --> */}
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/4'} className="text-decoration-none h6 m-0" >Master in Fullstack Development</Link> */}
                                            <a href="/details/4" className="text-decoration-none h6 m-0">Master in Fullstack Development</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">56</span> --> */}
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/6'} className="text-decoration-none h6 m-0" >Master in Firebase</Link> */}
                                            <a href="/details/6" className="text-decoration-none h6 m-0">Master in Firebase</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">98</span> --> */}
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            {/* <Link to={'/details/5'} className="text-decoration-none h6 m-0" >Master in 360 & 3D Website</Link> */}
                                            <a href="/details/5" className="text-decoration-none h6 m-0">Master in 360 & 3D Website</a>
                                            {/* <!-- <span className="badge badge-primary badge-pill">98</span> --> */}
                                        </li>
                                    </ul>
                                </div>

                                <div className="mb-5">
                                    <h2 className="mb-4">Recent Courses</h2>
                                    <a className="d-flex align-items-center text-decoration-none mb-4" href="/details/2">

                                        <img className="img-width-80 rounded" src={reacticon} alt="" />
                                        <div className="pl-3">
                                            <h6>React Js</h6>
                                            {/* <!-- <div className="d-flex">
                                                <small className="text-body mr-3"><i className="fa fa-user text-primary mr-2"></i>Jhon
                                                    Doe</small>
                                                <small className="text-body"><i className="fa fa-star text-primary mr-2"></i>4.5
                                                    (250)</small>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    <a className="d-flex align-items-center text-decoration-none mb-4" href="/details/3">
                                        <img className="img-width-80 rounded" src={nodeicon} alt="" />
                                        <div className="pl-3">
                                            <h6>Node Js</h6>
                                            {/* <!-- <div className="d-flex">
                                                <small className="text-body mr-3"><i className="fa fa-user text-primary mr-2"></i>Jhon
                                                    Doe</small>
                                                <small className="text-body"><i className="fa fa-star text-primary mr-2"></i>4.5
                                                    (250)</small>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    <a className="d-flex align-items-center text-decoration-none mb-4" href="/details/6">
                                        <img className="img-width-80 rounded" src={firebaseicon} alt="" />
                                        <div className="pl-3">
                                            <h6>Firebase</h6>
                                            {/* <!-- <div className="d-flex">
                                                <small className="text-body mr-3"><i className="fa fa-user text-primary mr-2"></i>Jhon
                                                    Doe</small>
                                                <small className="text-body"><i className="fa fa-star text-primary mr-2"></i>4.5
                                                    (250)</small>
                                            </div> --> */}
                                        </div>
                                    </a>
                                    <a className="d-flex align-items-center text-decoration-none" href="/details/5">
                                        <img className="img-width-80 rounded" src={aframeicon} alt="" />
                                        <div className="pl-3">
                                            <h6>Aframe</h6>
                                            {/* <!-- <div className="d-flex">
                                                    <small className="text-body mr-3"><i className="fa fa-user text-primary mr-2"></i>Jhon
                                                        Doe</small>
                                                    <small className="text-body"><i className="fa fa-star text-primary mr-2"></i>4.5
                                                        (250)</small>
                                                </div> --> */}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </Layout >
        )
    }
}
