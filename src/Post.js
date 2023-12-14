import React from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react';
import moment from 'moment';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import likes from '../src/Image/237892-P3CZOX-185-removebg-preview.png'
import './Instagram.css'

import { useState } from 'react';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';



import Offcanvas from 'react-bootstrap/Offcanvas';

import { all } from 'axios';




const Post = forwardRef((props, ref) => {

    const [likeArray, setLikeArray] = useState([])
    const [userIdentifier, setUserIdentifier] = useState('')
    const [isLiked, setIsLiked] = useState(false);
    const [isdisabled, setIsdisabled] = useState(false);
    const [urlId, setUrlId] = useState("")
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [currentPostData, setcurrentPostData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setcurrentPostData(data)
        setShow(true);
    }
    const handleShow2 = () => {
        setShow2(true)
    }
    const handleClose2 = () => {
        setShow2(false)

    }
    useEffect(() => {


        let url = window.location.href
        let Id = url.substring(url.lastIndexOf('/') + 1)
        setUrlId(Id)
        const userId = localStorage.getItem('user_name') || Id;
        setUserIdentifier(userId)


    }, [])
    let { alldata, mainimg, index, UpdateCommentData, like } = props


    useImperativeHandle(ref, () => ({
        handleDisabled() {
            setIsdisabled(false)
        }
    }));


    const handleImage = (item, index) => {

        setIsdisabled(true)
        const post = document.getElementById('POST' + index);
        const heart = document.getElementById('heart' + index);
        if (post) {
            heart.classList.add('animate-like');
            setTimeout(() => {
                heart.classList.remove('animate-like');
            }, 800);
        }

        var postId = item.postId;
        let count = item.likeCount;


        let likes = item.like;

        let obj = {
            name: userIdentifier,
            LikedAT: Date.now(),
            id: Date.now()
        }

        if (likes.some((item) => item.name === obj.name)) {
            if (count > 0) {

                count = count - 1
                const updatedLikes = likes.filter((i) => i.name !== userIdentifier);
                likes = updatedLikes
                setLikeArray(likes)
                setIsLiked(false);
            } else {

                props.UpdateData([], postId, 0)
            }


        } else {
            likes.push(obj)
            setLikeArray(likes)
            setIsLiked(true);
            count = count + 1

        }

        props.UpdateData(likes, postId, count)

    }




    return (
        <div style={{ paddingTop: '50px' }}>
            <div>
                <div class="col-lg-8 abc" id={'POST' + props.index}>
                    <div className='row col-lg-6 pt-2 pb-2  m-0 p-0'>
                        <div className='col-lg-12 ms-3 mt-2 m-0 p-0' >
                            <span><img src={alldata.profile_img || ''} className='object-fit-cover rounded-circle' style={{ objectPosition: 'top center   ', objectFit: 'cover' }} width={40} height={40} />  {alldata.f_name}</span>
                            <p className='time-date'>{moment(alldata.createdAT || '').fromNow()}</p>
                        </div>

                    </div>

                    <img src={mainimg} onDoubleClick={() => handleImage(alldata, index)} className='post main-image ' alt="!..." />
                    <img src={likes} alt="Heart icon" class="heart-icon" id={'heart' + index} />

                    <p class="likes animate-like"></p>
                    <div className='col-lg-12 row d-flex align-items-center justify-content-center col-lg-6  pb-2 m-0 p-0 '>
                        <div className='d-flex col-lg-12 p-1 m-0 p-0' >


                            <button disabled={isdisabled} onClick={() => handleImage(alldata, index)} className='btn '>  <FontAwesomeIcon className={` ${alldata.like.some(item => item.name === userIdentifier)
                                ? 'liked-icon icon'
                                : 'icon'}`} style={{ fontSize: '35px' }} icon={faHeart} /></button>



                        </div>
                        <div className='col-lg-12 p-2 ms-3 p-0' >
                            <span>{alldata.caption}</span>
                            <p className='p-0 m-0 text-capitalize font-weight-bold' onClick={() => handleShow(alldata)}>{alldata.likeCount}Likes</p>
                        </div>
                    </div>


                    <div className='pb-2'>



                        <p onClick={handleShow2}> Comment{alldata.comment.length > 0 ? (<span>({alldata.comment.length})</span>) : ''}</p>


                        <Offcanvas show={show2} onHide={handleClose2} placement='bottom' >
                            <Offcanvas.Header >
                                <Offcanvas.Title className='p-3'>Comment</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                {/* ... Offcanvas content */}
                                {alldata.comment.length <= 2
                                    ? (
                                        <div className='comment-div mb-4'>

                                            {alldata.comment.map((i) => {
                                                const likedAt = i.commitAT || '';
                                                const likedDate = moment(likedAt);
                                                let formattedDate;
                                                const currentDate = moment();
                                                if (currentDate.diff(likedDate, 'days') > 1) {
                                                    formattedDate = likedDate.format('DD MMM YY');
                                                } else {
                                                    formattedDate = likedDate.fromNow();
                                                    if (currentDate.diff(likedDate, 'days') <= 30) {
                                                        formattedDate = likedDate.fromNow();
                                                    } else {
                                                        formattedDate = likedDate.format('DD MMM YY');
                                                    }
                                                }
                                                const deletecomment = (user, id) => {

                                                    let newcommentArray = alldata.comment.filter((i) => i.commitAT !== id)
                                                    console.log(newcommentArray, alldata.postId)
                                                    UpdateCommentData(alldata.postId, newcommentArray)

                                                };
                                                return (

                                                    <div>
                                                        <div className="comment-desing">
                                                            <p className='ms-2'>
                                                                <b>{i.user}</b>
                                                                <br />
                                                                <span className='ms-2'>~ {i.comment}</span>
                                                            </p>

                                                            <p className='me-3' style={{ textAlign: "end" }} >{formattedDate}
                                                                <br />
                                                                {i.user === localStorage.getItem("user_name") && (
                                                                    <FontAwesomeIcon className='' onClick={() => deletecomment(i.user, i.commitAT)} icon={faTrash} />
                                                                )}
                                                            </p>

                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    )
                                    : (


                                        <div id='style-1' className='comment-div mb-4'>

                                            {alldata.comment.map((i) => {
                                                // Date and Time Format
                                                const likedAt = i.commitAT || '';
                                                const likedDate = moment(likedAt);
                                                let formattedDate;
                                                const currentDate = moment();
                                                if (currentDate.diff(likedDate, 'days') > 1) {
                                                    formattedDate = likedDate.format('DD MMM YY');
                                                } else {
                                                    formattedDate = likedDate.fromNow();
                                                    if (currentDate.diff(likedDate, 'days') <= 30) {
                                                        formattedDate = likedDate.fromNow();
                                                    } else {
                                                        formattedDate = likedDate.format('DD MMM YY');
                                                    }
                                                }

                                                // 
                                                const deletecomment = (user, id) => {

                                                    let newcommentArray = alldata.comment.filter((i) => i.commitAT !== id)
                                                    console.log(newcommentArray, alldata.postId)
                                                    UpdateCommentData(alldata.postId, newcommentArray)

                                                };

                                                return (
                                                    <div>
                                                        <div className="comment-desing">
                                                            <p className='ms-2'>
                                                                <b>{i.user}</b>
                                                                <br />
                                                                <span className='ms-2'>~ {i.comment}</span>
                                                            </p>

                                                            <p className='me-3' style={{ textAlign: "end" }}>{formattedDate}
                                                                <br />
                                                                {i.user === localStorage.getItem("user_name") && (
                                                                    <FontAwesomeIcon className='' onClick={() => deletecomment(i.user, i.commitAT)} icon={faTrash} />
                                                                )}
                                                            </p>



                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    )
                                }
                                <div style={{ position: "fixed", bottom: "100px", width: "100%" }}>

                                    <Comment UpdateCommentData={UpdateCommentData} Id={alldata} />
                                </div>

                            </Offcanvas.Body>
                        </Offcanvas>








                    </div>

                </div>



            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5312577942968237"
                crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
                data-ad-layout-key="+2b+s9-x-5f+d7"
                data-ad-client="ca-pub-5312577942968237"
                data-ad-slot="8540642174"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>



            {alldata.comment.length <= 2 ? (<Offcanvas show={show} onHide={handleClose} placement='bottom' >
                <Offcanvas.Header >
                    <Offcanvas.Title className='pt-4' style={{ paddingLeft: "10px" }}>Like</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ height: "350px", overflow: "scroll", paddingTop: "30px", paddingBottom: "30px" }} >


                    {currentPostData.like && currentPostData.like.length > 0 && currentPostData.like.map((i) => {

                        const likedAt = i.LikedAT || '';
                        const likedDate = moment(likedAt);
                        let formattedDate;
                        const currentDate = moment();
                        if (currentDate.diff(likedDate, 'days') > 1) {
                            formattedDate = likedDate.format('DD MMM YY');
                        } else {
                            formattedDate = likedDate.fromNow();
                            if (currentDate.diff(likedDate, 'days') <= 30) {
                                formattedDate = likedDate.fromNow();
                            } else {
                                formattedDate = likedDate.format('DD MMM YY');
                            }
                        }
                        return (
                            <div style={{ paddingLeft: "10px", paddingRight: "10px" }} >

                                <p className=''>{i.name}  <span style={{ float: 'right' }}>{formattedDate}</span></p>


                                <br />

                            </div>
                        )
                    })}

                </Offcanvas.Body>
            </Offcanvas>) : (

                <Offcanvas show={show} onHide={handleClose} placement='bottom' >
                    <Offcanvas.Header >
                        <Offcanvas.Title className='pt-4' style={{ paddingLeft: "10px" }}>Like</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ height: "350px", overflow: "scroll", paddingTop: "30px", paddingBottom: "0px" }} >
                        <div id='style-1' className='comment-div pb-5 '>
                            {currentPostData.like && currentPostData.like.length > 0 && currentPostData.like.map((i) => {

                                const likedAt = i.LikedAT || '';
                                const likedDate = moment(likedAt);
                                let formattedDate;
                                const currentDate = moment();
                                if (currentDate.diff(likedDate, 'days') > 1) {
                                    formattedDate = likedDate.format('DD MMM YY');
                                } else {
                                    formattedDate = likedDate.fromNow();
                                    if (currentDate.diff(likedDate, 'days') <= 30) {
                                        formattedDate = likedDate.fromNow();
                                    } else {
                                        formattedDate = likedDate.format('DD MMM YY');
                                    }
                                }

                                return (
                                    <div style={{ paddingLeft: "10px", paddingRight: "10px" }} >

                                        <p className=''>{i.name}  <span style={{ float: 'right' }}>{formattedDate}</span></p>


                                        <br />

                                    </div>
                                )
                            })}

                        </div>

                    </Offcanvas.Body>
                </Offcanvas>
            )}







        </div >
    )
})
export default Post;

