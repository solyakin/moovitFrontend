import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import '../../dashboard/dashboard.scss';
import '../preview/preview.scss';
import caretDown from '../../../assets/CaretDown.svg';
import squares from '../../../assets/SquaresFour.svg';
import megaphone from '../../../assets/MegaphoneSimple.svg';
import bag from '../../../assets/BagSimple.svg';
import creditCard from '../../../assets/CreditCard.svg';
import user from '../../../assets/User.svg';
import Handshake from '../../../assets/Handshake.svg';
import signout from '../../../assets/SignOut.svg';
import banner from '../../../assets/Rectangle 69.png';

import axios from 'axios';
import { Link } from 'react-router-dom';

const MarketerPreview = () => {

    const ticketData = JSON.parse(localStorage.getItem("targetData"));
    console.log(ticketData)
    // const history= useHistory()
    // if(history.length>0)alert("the user clicked back!")

    return (
        <div className="dashboard marketer-preview">
            <div className="small-title">
                <div className="title-text">
                    <p>The Brand Hub</p>
                    <img src={caretDown} alt="" />
                </div>
                <div className="dashboard-main-wrapper">
                    <div className="tabs">
                        <div className="tab-item">
                            <img src={squares} alt="" />
                            <Link to='/admin'>Dashboard</Link>
                        </div>
                        <div className="tab-item">
                            <img src={megaphone} alt="" />
                            <Link to='/add-staff'>Add staff</Link>
                        </div>
                        <div className="tab-item">
                            <img src={bag} alt="" />
                            <Link to='/message'>Message</Link>
                        </div>
                        <div className="tab-item">
                            <img src={creditCard} alt="" />
                            <Link to='/new-ads-ticket'>New ads ticket</Link>
                        </div>
                        <div className="tab-item">
                            <img src={user} alt="" />
                            <Link to='/notification'>Notification</Link>
                        </div>
                        <div className="tab-item">
                            <img src={Handshake} alt="" />
                            <Link to='/admin-profile'>Profile</Link>
                        </div>
                        <div className="tab-item">
                            <img src={signout} alt="" />
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className="dashboard-main">
                        <div className="preview-content">
                            <div className="main-heading">
                                <div className="welcome">
                                    <h4>Ads details</h4>
                                </div>
                                <div className="smm">
                                    <p>Assigned to you</p>
                                    <img src={banner} alt="" />
                                </div>
                            </div>
                            <div className="preview-wrapper">
                                {
                                    ticketData.map(({id, title, description, start, end, location, image, createdBy, phone}) => {
                                        return <div className="prev-container" key={id}>
                                            <div className="ads-detail">
                                                <div className="title mb-4">
                                                    <h5>Title</h5>
                                                    <p>{title}</p>
                                                </div>
                                                <div className="descritpion mb-4">
                                                    <h5>Description</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam unde doloremque vero fuga, deserunt ipsam. Neque necessitatibus sunt at reiciendis labore perspiciatis</p>
                                                </div>
                                                <div className="campaign mb-4">
                                                    <h5>Campaign type</h5>
                                                    <div className="campaign-list">
                                                        <span>Conversion</span>
                                                        <span>Traffic</span>
                                                        <span>Sales</span>
                                                        <span>Engagement</span>
                                                    </div>
                                                </div>
                                                <div className="budget mb-4">
                                                    <h5>Budget</h5>
                                                    <p>TIER 3</p>
                                                </div>
                                                <div className="dates mb-4">
                                                    <div className="start">
                                                        <h5>Start date</h5>
                                                        <p>{start}</p>
                                                    </div>
                                                    <div className="end">
                                                        <h5>End date</h5>
                                                        <p>{end}</p>
                                                    </div>
                                                </div>
                                                <div className="target-area mb-4">
                                                    <h5>Target Area</h5>
                                                    <p>{location}</p>
                                                </div>
                                                <div className="location mb-4">
                                                    <h5>Location</h5>
                                                    <div className="locations">
                                                        <span>Agege</span>
                                                        <span>Ikeja</span>
                                                        <span>Magodo</span>
                                                        <span>Lagos Mainland</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sender">
                                                <div className="sender-profile">
                                                    <h5>Created by</h5>
                                                    <div className="sender-info">
                                                        <img src={banner} alt="" />
                                                        <p>John Bellion</p>
                                                    </div>
                                                    <p className="email">john@gmial.com</p>
                                                    <p>{phone}</p>
                                                </div>
                                                <div className="banner">
                                                    <h5>Upload Banner</h5>
                                                    <div className="banner-img">
                                                        <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                                        <img src={banner} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>    
                            <div className="lower-btns">
                                <Link>Back</Link>
                                <button>Confirmed</button>
                            </div>
                        </div>
                    </div>  
                </div>  
            </div>
        </div>
    )
}

export default MarketerPreview;

