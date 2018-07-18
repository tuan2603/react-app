import React from 'react';

class sufee extends React.Component {
    render() {
        return (

            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">


                <aside id="left-panel" className="left-panel">
                    <nav className="navbar navbar-expand-sm navbar-default">

                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <a className="navbar-brand" href="./"><img src="images/logo.png" alt="Logo"/></a>
                            <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo"/></a>
                        </div>

                        <div id="main-menu" className="main-menu collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="index.html"> <i className="menu-icon fa fa-dashboard"></i>Dashboard </a>
                                </li>
                                <h3 className="menu-title">UI elements</h3>
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-laptop"></i>Components</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="fa fa-puzzle-piece"></i><a href="ui-buttons.html">Buttons</a></li>
                                        <li><i className="fa fa-id-badge"></i><a href="ui-badges.html">Badges</a></li>
                                        <li><i className="fa fa-bars"></i><a href="ui-tabs.html">Tabs</a></li>
                                        <li><i className="fa fa-share-square-o"></i><a href="ui-social-buttons.html">Social Buttons</a></li>
                                        <li><i className="fa fa-id-card-o"></i><a href="ui-cards.html">Cards</a></li>
                                        <li><i className="fa fa-exclamation-triangle"></i><a href="ui-alerts.html">Alerts</a></li>
                                        <li><i className="fa fa-spinner"></i><a href="ui-progressbar.html">Progress Bars</a></li>
                                        <li><i className="fa fa-fire"></i><a href="ui-modals.html">Modals</a></li>
                                        <li><i className="fa fa-book"></i><a href="ui-switches.html">Switches</a></li>
                                        <li><i className="fa fa-th"></i><a href="ui-grids.html">Grids</a></li>
                                        <li><i className="fa fa-file-word-o"></i><a href="ui-typgraphy.html">Typography</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table"></i>Tables</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                                        <li><i className="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th"></i>Forms</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="menu-icon fa fa-th"></i><a href="forms-basic.html">Basic Form</a></li>
                                        <li><i className="menu-icon fa fa-th"></i><a href="forms-advanced.html">Advanced Form</a></li>
                                    </ul>
                                </li>

                                <h3 className="menu-title">Icons</h3>

                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks"></i>Icons</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="menu-icon fa fa-fort-awesome"></i><a href="font-fontawesome.html">Font Awesome</a></li>
                                        <li><i className="menu-icon ti-themify-logo"></i><a href="font-themify.html">Themefy Icons</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="widgets.html"> <i className="menu-icon ti-email"></i>Widgets </a>
                                </li>
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart"></i>Charts</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Chart JS</a></li>
                                        <li><i className="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Flot Chart</a></li>
                                        <li><i className="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Peity Chart</a></li>
                                    </ul>
                                </li>

                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart"></i>Maps</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Google Maps</a></li>
                                        <li><i className="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Vector Maps</a></li>
                                    </ul>
                                </li>
                                <h3 className="menu-title">Extras</h3>
                                <li className="menu-item-has-children dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass"></i>Pages</a>
                                    <ul className="sub-menu children dropdown-menu">
                                        <li><i className="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                                        <li><i className="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                                        <li><i className="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>

                <div id="right-panel" className="right-panel">


                    <header id="header" className="header">

                        <div className="header-menu">

                            <div className="col-sm-7">
                                <a id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></a>
                                <div className="header-left">
                                    <button className="search-trigger"><i className="fa fa-search"></i></button>
                                    <div className="form-inline">
                                        <form className="search-form">
                                            <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                                                <button className="search-close" type="submit"><i className="fa fa-close"></i></button>
                                        </form>
                                    </div>

                                    <div className="dropdown for-notification">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-bell"></i>
                                            <span className="count bg-danger">5</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="notification">
                                            <p className="red">You have 3 Notification</p>
                                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                                <i className="fa fa-check"></i>
                                                <p>Server #1 overloaded.</p>
                                            </a>
                                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                                <i className="fa fa-info"></i>
                                                <p>Server #2 overloaded.</p>
                                            </a>
                                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                                <i className="fa fa-warning"></i>
                                                <p>Server #3 overloaded.</p>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="dropdown for-message">
                                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                                id="message"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ti-email"></i>
                                            <span className="count bg-primary">9</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="message">
                                            <p className="red">You have 4 Mails</p>
                                            <a className="dropdown-item media bg-flat-color-1" href="#">
                                                <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                                                <span className="message media-body">
                                    <span className="name float-left">Jonathan Smith</span>
                                    <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                                            </a>
                                            <a className="dropdown-item media bg-flat-color-4" href="#">
                                                <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                                                <span className="message media-body">
                                    <span className="name float-left">Jack Sanders</span>
                                    <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                                            </a>
                                            <a className="dropdown-item media bg-flat-color-5" href="#">
                                                <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                                                <span className="message media-body">
                                    <span className="name float-left">Cheryl Wheeler</span>
                                    <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                </span>
                                            </a>
                                            <a className="dropdown-item media bg-flat-color-3" href="#">
                                                <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                                                <span className="message media-body">
                                    <span className="name float-left">Rachel Santos</span>
                                    <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-5">
                                <div className="user-area dropdown float-right">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar"/>
                                    </a>

                                    <div className="user-menu dropdown-menu">
                                        <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>

                                        <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                                        <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>

                                        <a className="nav-link" href="#"><i className="fa fa-power -off"></i>Logout</a>
                                    </div>
                                </div>

                                <div className="language-select dropdown" id="language-select">
                                    <a className="dropdown-toggle" href="#" data-toggle="dropdown"  id="language" aria-haspopup="true" aria-expanded="true">
                                        <i className="flag-icon flag-icon-us"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="language" >
                                        <div className="dropdown-item">
                                            <span className="flag-icon flag-icon-fr"></span>
                                        </div>
                                        <div className="dropdown-item">
                                            <i className="flag-icon flag-icon-es"></i>
                                        </div>
                                        <div className="dropdown-item">
                                            <i className="flag-icon flag-icon-us"></i>
                                        </div>
                                        <div className="dropdown-item">
                                            <i className="flag-icon flag-icon-it"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </header>

                    <div className="breadcrumbs">
                        <div className="col-sm-4">
                            <div className="page-header float-left">
                                <div className="page-title">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="page-header float-right">
                                <div className="page-title">
                                    <ol className="breadcrumb text-right">
                                        <li className="active">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content mt-3">

                        <div className="col-sm-12">
                            <div className="alert  alert-success alert-dismissible fade show" role="alert">
                                <span className="badge badge-pill badge-success">Success</span> You successfully read this important alert message.
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-1">
                                <div className="card-body pb-0">
                                    <div className="dropdown float-right">
                                        <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                            <i className="fa fa-cog"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropdown-menu-content">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                    <div className="chart-wrapper px-0" style={{"height":"70px" }} height="70">
                                        <canvas id="widgetChart1"></canvas>
                                    </div>

                                </div>

                            </div>
                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-2">
                                <div className="card-body pb-0">
                                    <div className="dropdown float-right">
                                        <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                            <i className="fa fa-cog"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropdown-menu-content">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                    <div className="chart-wrapper px-0" style={{"height":"70px"}}  height="70">
                                        <canvas id="widgetChart2"></canvas>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-3">
                                <div className="card-body pb-0">
                                    <div className="dropdown float-right">
                                        <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                            <i className="fa fa-cog"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropdown-menu-content">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                </div>

                                <div className="chart-wrapper px-0" style={{"height":"70px" }} height="70">
                                    <canvas id="widgetChart3"></canvas>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="card text-white bg-flat-color-4">
                                <div className="card-body pb-0">
                                    <div className="dropdown float-right">
                                        <button className="btn bg-transparent dropdown-toggle theme-toggle text-light" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                                            <i className="fa fa-cog"></i>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="dropdown-menu-content">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-0">
                                        <span className="count">10468</span>
                                    </h4>
                                    <p className="text-light">Members online</p>

                                    <div className="chart-wrapper px-3" style={{"height":"70px"}}  height="70">
                                        <canvas id="widgetChart4"></canvas>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="social-box facebook">
                                <i className="fa fa-facebook"></i>
                                <ul>
                                    <li>
                                        <strong><span className="count">40</span> k</strong>
                                        <span>friends</span>
                                    </li>
                                    <li>
                                        <strong><span className="count">450</span></strong>
                                        <span>feeds</span>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="social-box twitter">
                                <i className="fa fa-twitter"></i>
                                <ul>
                                    <li>
                                        <strong><span className="count">30</span> k</strong>
                                        <span>friends</span>
                                    </li>
                                    <li>
                                        <strong><span className="count">450</span></strong>
                                        <span>tweets</span>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="social-box linkedin">
                                <i className="fa fa-linkedin"></i>
                                <ul>
                                    <li>
                                        <strong><span className="count">40</span> +</strong>
                                        <span>contacts</span>
                                    </li>
                                    <li>
                                        <strong><span className="count">250</span></strong>
                                        <span>feeds</span>
                                    </li>
                                </ul>
                            </div>

                        </div>


                        <div className="col-lg-3 col-md-6">
                            <div className="social-box google-plus">
                                <i className="fa fa-google-plus"></i>
                                <ul>
                                    <li>
                                        <strong><span className="count">94</span> k</strong>
                                        <span>followers</span>
                                    </li>
                                    <li>
                                        <strong><span className="count">92</span></strong>
                                        <span>circles</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <h4 className="card-title mb-0">Traffic</h4>
                                            <div className="small text-muted">October 2017</div>
                                        </div>

                                        <div className="col-sm-8 hidden-sm-down">
                                            <button type="button" className="btn btn-primary float-right bg-flat-color-1"><i className="fa fa-cloud-download"></i></button>
                                            <div className="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
                                                <div className="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                                                    <label className="btn btn-outline-secondary">
                                                        <input type="radio" name="options" id="option1" /> Day
                                                    </label>
                                                    <label className="btn btn-outline-secondary active">
                                                        <input type="radio" name="options" id="option2" checked="" /> Month
                                                    </label>
                                                    <label className="btn btn-outline-secondary">
                                                        <input type="radio" name="options" id="option3" /> Year
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="chart-wrapper mt-4" >
                                        <canvas id="trafficChart" style={{"height":"200px"}}  height="200"></canvas>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <ul>
                                        <li>
                                            <div className="text-muted">Visits</div>
                                            <strong>29.703 Users (40%)</strong>
                                            <div className="progress progress-xs mt-2" style={{"height": "5px"}} >
                                                <div className="progress-bar bg-success" role="progressbar" style={{"width": "40%"}}  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li className="hidden-sm-down">
                                            <div className="text-muted">Unique</div>
                                            <strong>24.093 Users (20%)</strong>
                                            <div className="progress progress-xs mt-2" style={{"height": "5px"}} >
                                                <div className="progress-bar bg-info" role="progressbar" style={{"width": "20%"}}  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-muted">Pageviews</div>
                                            <strong>78.706 Views (60%)</strong>
                                            <div className="progress progress-xs mt-2" style={{"height": "5px"}} >
                                                <div className="progress-bar bg-warning" role="progressbar" style={{"width": "60%"}}  aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li className="hidden-sm-down">
                                            <div className="text-muted">New Users</div>
                                            <strong>22.123 Users (80%)</strong>
                                            <div className="progress progress-xs mt-2" style={{"height": "5px"}} >
                                                <div className="progress-bar bg-danger" role="progressbar" style={{"width": "80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                        <li className="hidden-sm-down">
                                            <div className="text-muted">Bounce Rate</div>
                                            <strong>40.15%</strong>
                                            <div className="progress progress-xs mt-2" style={{"height": "5px"}} >
                                                <div className="progress-bar" role="progressbar" style={{"width": "40%"}}  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6">
                            <section className="card">
                                <div className="twt-feed blue-bg">
                                    <div className="corner-ribon black-ribon">
                                        <i className="fa fa-twitter"></i>
                                    </div>
                                    <div className="fa fa-twitter wtt-mark"></div>

                                    <div className="media">
                                        <a href="#">
                                            <img className="align-self-center rounded-circle mr-3" style={{width:"85px", height:"85px" }} alt="" src="images/admin.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            <h2 className="text-white display-6">Jim Doe</h2>
                                            <p className="text-light">Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-category twt-category">
                                    <ul>
                                        <li className="active">
                                            <h5>750</h5>
                                            Tweets
                                        </li>
                                        <li>
                                            <h5>865</h5>
                                            Following
                                        </li>
                                        <li>
                                            <h5>3645</h5>
                                            Followers
                                        </li>
                                    </ul>
                                </div>
                                <div className="twt-write col-sm-12">
                                    <textarea placeholder="Write your Tweet and Enter" rows="1" className="form-control t-text-area"></textarea>
                                </div>
                                <footer className="twt-footer">
                                    <a href="#"><i className="fa fa-camera"></i></a>
                                    <a href="#"><i className="fa fa-map-marker"></i></a>
                                    New Castle, UK
                                    <span className="pull-right">
                            32
                        </span>
                                </footer>
                            </section>
                        </div>


                        <div className="col-xl-3 col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-one">
                                        <div className="stat-icon dib"><i className="ti-money text-success border-success"></i></div>
                                        <div className="stat-content dib">
                                            <div className="stat-text">Total Profit</div>
                                            <div className="stat-digit">1,012</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-3 col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-one">
                                        <div className="stat-icon dib"><i className="ti-user text-primary border-primary"></i></div>
                                        <div className="stat-content dib">
                                            <div className="stat-text">New Customer</div>
                                            <div className="stat-digit">961</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="stat-widget-one">
                                        <div className="stat-icon dib"><i className="ti-layout-grid2 text-warning border-warning"></i></div>
                                        <div className="stat-content dib">
                                            <div className="stat-text">Active Projects</div>
                                            <div className="stat-digit">770</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="card" >
                                <div className="card-header">
                                    <h4>World</h4>
                                </div>
                                <div className="Vector-map-js">
                                    <div id="vmap" className="vmap" style={{"height": "265px"}}></div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
    );
    }}
    export default sufee;
