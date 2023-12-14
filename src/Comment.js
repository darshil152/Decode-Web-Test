import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import './Instagram.css'


export default function Comment(props) {
    let { Id, UpdateCommentData } = props;

    const [urlId, setUrlId] = useState("");
    const [comment, setComment] = useState('');
    let allcomment = [];

    useEffect(() => {
        let url = window.location.href;
        let Id = url.substring(url.lastIndexOf('/') + 1);
        setUrlId(Id);
    }, []);

    const userIdentifier = localStorage.getItem('user_name') || urlId;
    allcomment = Id.comment;
    let postId = Id.postId;

    const handlesubmit = () => {
        let obj = {
            comment: comment,
            user: userIdentifier,
            commitAT: Date.now()
        };
        if (obj.comment !== "") {
            allcomment.push(obj);
            console.log(allcomment);
            UpdateCommentData(postId, allcomment);
            setComment('');
        }
    };

    return (
        <div className='d-flex'>
            <input
                type="text"
                className="col-lg-11 col-md-12 col-sm-12 emailstyle"
                placeholder='Comment'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button className="col-lg-0 col-md-0 col-sm-0 btn btn-primary primary-btn" onClick={handlesubmit}>OK</button>
        </div>
    );
}
