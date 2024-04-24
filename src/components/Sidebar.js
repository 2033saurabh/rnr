import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="col-md-1 d-none d-md-block bg-light sidebar">
            
            <div class="sidebar-sticky">
             
                <div class="pt-2 pl-2">
                    
                    <div class="main-menu menu-fixed menu-light menu-shadow"

                        style={{
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px',
                            borderBottomLeftRadius: '20px',
                            borderBottomRightRadius: '20px',
                        }}
                        data-scroll-to-active="true">
                        <div class="navbar-header"

                            style={{
                                backgroundColor: '#002649',
                                borderTopLeftRadius: '20px',
                                borderTopRightRadius: '20px',
                            }}
                        >
                            <ul class="nav navbar-nav flex-row">
                                <li class="nav-item mr-auto">
                                    <a class="navbar-brand" href="#">
                                        <div class="brand-logo"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="main-menu-content d-flex align-items-center justify-content-center"

                            style={{
                                backgroundColor: '#002649',
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                                height: "30rem"
                            }}
                        >
                            
                            <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation" style={
                                { listStyleType: 'none' }
                            }>
                                <li class="nav-item" data-toggle="tooltip" data-bs-placement="right" title="Allrequest">
                                    <Link class="nav-link" to="/Allrequest"> <i class="bi bi-house" style={{ color: 'white', fontSize: "1.8rem", }}></i></Link>
                                </li>


                                <li class="nav-item" data-toggle="tooltip" data-bs-placement="right" title="Request">

                                    <Link class="nav-link" to="/Wrirk"><i className="bi bi-pencil-square" style={{ color: 'white', fontSize: "1.8rem" }}></i></Link>

                                </li>
                                <li class="nav-item" data-toggle="tooltip" data-bs-placement="right" title="Review">
                                <Link class="nav-link" to="/Review"><i className="bi bi-view-list" style={{ color: 'white', fontSize: "1.8rem" }}></i></Link>

                                </li>
                                <li class="nav-item" data-toggle="tooltip" data-bs-placement="right" title="My Folder">
                                    
                                 <Link class="nav-link" to="/Wrirk"><i className="bi bi-folder" style={{ color: 'white', fontSize: "1.8rem" }}></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
