import React, { Component } from 'react'
import Layout from './Layout'
import HeaderForPage from './HeaderForPage'


import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
const annivaersaryVideo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FVN20230506_144051.mp4?alt=media&token=366aa873-5eed-47d6-b000-5cdf04110c06&_gl=1*zqd4q7*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ3MTIuMC4wLjA.'
const dplVideo = 'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2Fdpl-video.mp4?alt=media&token=7ec4405b-6a4b-469c-a5db-f4dbbd1d8b3f&_gl=1*rxc5ss*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ2NjQuMC4wLjA.'
export default class Gallery extends Component {
    state = {
        show: false,
        anniversaryImages: ['https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG20230503184128.jpg?alt=media&token=761b1c6e-d606-4d9a-83c0-e671b35de254&_gl=1*16u64yc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjIzMTYuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7622.jpg?alt=media&token=b10993d1-7437-4fac-b3ee-2ac92222b6ac&_gl=1*jmr138*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjIzNzcuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7626.jpg?alt=media&token=2d2e1d46-1b1f-450e-b4fd-cb45d1d35e9f&_gl=1*iwfp2d*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI0MTEuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7627.jpg?alt=media&token=f4b7c61c-731c-418d-b02f-989f9a40fd5e&_gl=1*16hik9a*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI0MzAuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7630.jpg?alt=media&token=5101ae5c-c0aa-41a2-9bd9-f47aeee825e3&_gl=1*fs8v2m*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI0NDcuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7632.jpg?alt=media&token=44660af2-6033-41d0-98ad-15d1e0c0ac15&_gl=1*1ccxqfc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI0NjEuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7641.jpg?alt=media&token=39b602d3-3929-471a-a6d3-f964ec47d8ba&_gl=1*1p7fyz4*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI0ODYuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7655.jpg?alt=media&token=f0bb8b3b-0cec-4d5b-b30c-74c5f7b0e249&_gl=1*1gkljbg*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI1MDAuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG_7672.jpg?alt=media&token=1a4c1218-7d99-4be1-9cac-057d4e267dd6&_gl=1*3gncj*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI1MTIuMC4wLjA.'],
        industrialImages: ['https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-1.jpg?alt=media&token=ba368730-cba3-49f2-a226-796cd12a8886&_gl=1*1y7m77h*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI1ODAuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-2.jpg?alt=media&token=7450cbf5-4f1c-40c4-8b33-ffe38fff292d&_gl=1*1h1ihjs*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2MDIuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-3.jpg?alt=media&token=0d434917-d90d-4270-8535-0771f2b7273a&_gl=1*dzhxyt*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2MjUuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-4.jpg?alt=media&token=0488387b-5330-4560-a17e-bc91b1db40f4&_gl=1*16fycmm*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2NDQuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-5.jpg?alt=media&token=24f8c29d-a2f8-4447-9693-d5f61149e7d3&_gl=1*rac8x9*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2NjEuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-6.jpg?alt=media&token=d20ceed5-4a47-4862-8384-96821394aa9b&_gl=1*1uxnpts*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2NzYuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-7.jpg?alt=media&token=767b7e2b-0703-4ae2-94e0-8d0091ef95a5&_gl=1*1vfid71*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI2OTEuMC4wLjA.'],
        dplIMages: ['https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_1.jpeg?alt=media&token=4c91a422-06d5-4331-ba80-c0615bb9353c&_gl=1*1g9xp9v*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTU5MTE4NC4xOS4xLjE2ODU1OTEyNTAuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_2.jpg?alt=media&token=5d0a0938-0f93-485e-9aa7-95d0aeb71b77&_gl=1*1ow8qc5*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ1NDAuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_3.jpg?alt=media&token=443fd7cb-f905-4648-821d-3c8f95b7caed&_gl=1*1dl0fjv*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ1NzIuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_4.jpg?alt=media&token=6bf6ce00-62b8-4165-9c1d-08ed78b334a8&_gl=1*1sax7rf*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ1OTEuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_5.jpg?alt=media&token=f14ebf24-1f94-47f2-ae4b-0176c9248a8a&_gl=1*1b6307x*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ2MDUuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_6.jpg?alt=media&token=b1dce5ae-77fa-482f-9d52-57e3e6c2b96d&_gl=1*ornk6c*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ2MjEuMC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_7.png?alt=media&token=09a2ebf4-db69-4e95-a633-446f0431a192&_gl=1*1lqrflz*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ2MzUuMC4wLjA.',
        ],
        showImages: [],
        currentDisplay: 'anniversary'
    }
    componentDidMount() {
        this.setState({ showImages: this.state.anniversaryImages })
    }

    openModal = (title, imgtype, screen) => {
        this.setState({ show: true, modalTitle: title, showImages: imgtype, currentDisplay: screen })
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    render() {
        return (
            <Layout>
                <HeaderForPage name='Gallery' />
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mx-0 justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center position-relative mb-5">
                                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Gallery</h6>
                                    {/* <h1 className="display-4">Checkout New Releases Of Our Courses</h1> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link to={'/gallery/1'} className="courses-list-item position-relative d-block overflow-hidden mb-2" >
                                    <img className="activity-img" src={'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG20230503184128.jpg?alt=media&token=761b1c6e-d606-4d9a-83c0-e671b35de254&_gl=1*16u64yc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjIzMTYuMC4wLjA.'} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Anniversary Celebration</h4>

                                    </div>
                                </Link>

                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link to={'/gallery/2'} className="courses-list-item position-relative d-block overflow-hidden mb-2" >
                                    <img className="activity-img" src={'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Findustrial-visit%2Fimg-1.jpg?alt=media&token=ba368730-cba3-49f2-a226-796cd12a8886&_gl=1*1y7m77h*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjI1ODAuMC4wLjA.'} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Industrial Visit</h4>

                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6 pb-4">
                                <Link to={'/gallery/3'} className="courses-list-item position-relative d-block overflow-hidden mb-2" >
                                    <img className="activity-img" src={'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_1.jpeg?alt=media&token=4c91a422-06d5-4331-ba80-c0615bb9353c&_gl=1*1g9xp9v*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTU5MTE4NC4xOS4xLjE2ODU1OTEyNTAuMC4wLjA.'} alt="" />
                                    <div className="courses-text">
                                        <h4 className="text-center text-white px-3">Decode Premier League - 2023</h4>

                                    </div>
                                </Link>
                            </div>


                        </div>


                    </div>
                </div>


                <Modal show={this.state.show} scrollable={true} centered onHide={this.closeModal} >
                    <Modal.Header >
                        <Modal.Title>{this.state.modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >


                        <div className="row">
                            {this.state.showImages.map((item) => {
                                return (
                                    <div className=" pb-4">
                                        <img className="img-fluid" src={item} alt="" />
                                    </div>
                                )
                            })}

                            {this.state.currentDisplay !== 'industry' && <video src={this.state.currentDisplay === 'anniversary' ? annivaersaryVideo : this.state.currentDisplay === 'dpl' ? dplVideo : ''}
                                poster={this.state.currentDisplay === 'anniversary' ?
                                    'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2F1-anniversary%2FIMG20230503184128.jpg?alt=media&token=761b1c6e-d606-4d9a-83c0-e671b35de254&_gl=1*16u64yc*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjIzMTYuMC4wLjA.'
                                    : this.state.currentDisplay === 'dpl' ?
                                        'https://firebasestorage.googleapis.com/v0/b/hey1-portfolio.appspot.com/o/decode%2Fwebsite%2Fdpl-2023%2FIMG_1.jpg?alt=media&token=603a1c7c-8e1e-49c2-be04-4d540f566744&_gl=1*gja0xy*_ga*NDYyMDY3ODYuMTY3ODk0MDcxNA..*_ga_CW55HF8NVT*MTY4NTQyMTgzMS4xMi4xLjE2ODU0MjQ1MjQuMC4wLjA.'
                                        : ''} className='w-100' loop controls></video>}

                        </div>

                    </Modal.Body>

                </Modal>

            </Layout>
        )
    }
}
