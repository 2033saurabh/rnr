import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid justify-content-center">
                
                <nav className="header-navbar navbar-expand-lg navbar-expand-md navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
                    <div className="navbar-wrapper">
                        <div className="navbar-container content ps-0">
                            <div className="navbar-collapse justify-content-between" id="navbar-mobile">
                                <div className="back-arrow d-flex justify-content-center align-items-center cursor-pointer position-relative  px-1" style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', padding: '5px 5px' }} onclick="history.back()">
                                    <i className="bi bi-arrow-left fs-4" />
                                </div>
                                <div className="main-nav-req d-flex justify-content-center align-items-center position-relative px-3 mx-1" style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', fontSize: '16px', padding: '11px 0' }}>
                                    <h5 className="d-flex justify-content-center align-items-center mb-0">Request</h5>
                                </div>
                                <div className="search-div d-flex" style={{ fontFamily: '"Poppins", sans-serif' }}>
                                    <div className="search-request-icon-main-search position-absolute text-black fs-6">
                                        <i className="feather icon-search" />
                                    </div>
                                    <input className="req-input-main-search font-weight-normal border-0" type="text" placeholder="Which assignment you are looking for?" tabIndex={-1} style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', height: '41px' }} />
                                </div>
                                <ul className="nav navbar-nav">
                                    <li className="dropdown dropdown-notification nav-item"><a className="nav-link nav-link-label mx-1 d-flex justify-content-center align-items-center" href="#" data-toggle="dropdown" style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', height: '41px' }}><i className="ficon feather icon-bell" style={{ marginRight: '12px' }} /><span className="badge badge-pill badge-primary badge-up">5</span></a>
                                        <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                                            <li className="dropdown-menu-header">
                                                <div className="dropdown-header m-0 p-2">
                                                    <h3 className="white">5 New</h3><span className="notification-title">App
                                                        Notifications</span>
                                                </div>
                                            </li>
                                            <li className="scrollable-container media-list"><a className="d-flex justify-content-between" href="javascript:void(0)">
                                                <div className="media d-flex align-items-start">
                                                    <div className="media-left"><i className="feather icon-plus-square font-medium-5 primary" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="primary media-heading">You have new order!</h6><small className="notification-text"> Are your going to meet me
                                                            tonight?</small>
                                                    </div><small>
                                                        <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">9
                                                            hours
                                                            ago</time></small>
                                                </div>
                                            </a><a className="d-flex justify-content-between" href="javascript:void(0)">
                                                    <div className="media d-flex align-items-start">
                                                        <div className="media-left"><i className="feather icon-download-cloud font-medium-5 success" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="success media-heading red darken-1">99% Server load
                                                            </h6>
                                                            <small className="notification-text">You got new order of
                                                                goods.</small>
                                                        </div><small>
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">5
                                                                hour
                                                                ago</time></small>
                                                    </div>
                                                </a><a className="d-flex justify-content-between" href="javascript:void(0)">
                                                    <div className="media d-flex align-items-start">
                                                        none <div className="media-left"><i className="feather icon-alert-triangle font-medium-5 danger" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="danger media-heading yellow darken-3">Warning
                                                                notifixation
                                                            </h6><small className="notification-text">Server have 99% CPU
                                                                usage.</small>
                                                        </div><small>
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Today</time></small>
                                                    </div>
                                                </a><a className="d-flex justify-content-between" href="javascript:void(0)">
                                                    <div className="media d-flex align-items-start">
                                                        <div className="media-left"><i className="feather icon-check-circle font-medium-5 info" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="info media-heading">Complete the task</h6><small className="notification-text">Cake sesame snaps cupcake</small>
                                                        </div><small>
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Last
                                                                week</time></small>
                                                    </div>
                                                </a><a className="d-flex justify-content-between" href="javascript:void(0)">
                                                    <div className="media d-flex align-items-start">
                                                        <div className="media-left"><i className="feather icon-file font-medium-5 warning" /></div>
                                                        <div className="media-body">
                                                            <h6 className="warning media-heading">Generate monthly report</h6>
                                                            <small className="notification-text">Chocolate cake oat cake
                                                                tiramisu
                                                                marzipan</small>
                                                        </div><small>
                                                            <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Last
                                                                month</time></small>
                                                    </div>
                                                </a></li>
                                            <li className="dropdown-menu-footer"><a className="dropdown-item p-1 text-center" href="javascript:void(0)">View all notifications</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link download-icon me-1 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', height: '41px' }}>
                                        <i className="bi bi-cloud" style={{ marginRight: '6px' }} />
                                    </a>
                                    </li>
                                    <li className="dropdown dropdown-user nav-item">
                                        <a className="dropdown-toggle nav-link dropdown-user-link ms-3 d-flex justify-content-center align-items-center" href="#" data-toggle="dropdown" style={{ backgroundColor: 'rgb(238, 237, 237)', borderRadius: '10px', height: '41px' }}>
                                            <div className="user-nav d-sm-flex d-none">
                                                <span className="user-name text-bold-600">Krishna Kant</span>
                                                <span className="user-status">Admin</span>
                                            </div>
                                            <span>
                                                <img className="round" src="./app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height={40} width={40} />
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="page-user-profile.html"><i className="feather icon-user" />
                                                Edit Profile</a>
                                            <a className="dropdown-item" href="app-email.html"><i className="feather icon-mail" />
                                                My
                                                Inbox</a>
                                            <a className="dropdown-item" href="app-todo.html"><i className="feather icon-check-square" />
                                                Task</a>
                                            <a className="dropdown-item" href="app-chat.html"><i className="feather icon-message-square" /> Chats</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="auth-login.html"><i className="feather icon-power" />
                                                Logout</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>

    );
};

export default Navbar;
