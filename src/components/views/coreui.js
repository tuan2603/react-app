import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
                <header className="app-header navbar">
                    <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button"
                            data-toggle="sidebar-show">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25"
                             alt="CoreUI Logo"/>
                        <img className="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30"
                             alt="CoreUI Logo"/>
                    </a>
                    <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button"
                            data-toggle="sidebar-lg-show">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav navbar-nav d-md-down-none">
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Users</a>
                        </li>
                        <li className="nav-item px-3">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item d-md-down-none">
                            <a className="nav-link" href="#">
                                <i className="icon-bell"></i>
                                <span className="badge badge-pill badge-danger">5</span>
                            </a>
                        </li>
                        <li className="nav-item d-md-down-none">
                            <a className="nav-link" href="#">
                                <i className="icon-list"></i>
                            </a>
                        </li>
                        <li className="nav-item d-md-down-none">
                            <a className="nav-link" href="#">
                                <i className="icon-location-pin"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                               aria-expanded="false">
                                <img className="img-avatar" src="img/avatars/6.jpg" alt="admin@bootstrapmaster.com"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-header text-center">
                                    <strong>Account</strong>
                                </div>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-bell-o"></i> Updates
                                    <span className="badge badge-info">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-envelope-o"></i> Messages
                                    <span className="badge badge-success">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-tasks"></i> Tasks
                                    <span className="badge badge-danger">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-comments"></i> Comments
                                    <span className="badge badge-warning">42</span>
                                </a>
                                <div className="dropdown-header text-center">
                                    <strong>Settings</strong>
                                </div>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-user"></i> Profile</a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-wrench"></i> Settings</a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-usd"></i> Payments
                                    <span className="badge badge-secondary">42</span>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-file"></i> Projects
                                    <span className="badge badge-primary">42</span>
                                </a>
                                <div className="divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-shield"></i> Lock Account</a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-lock"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                    <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button"
                            data-toggle="aside-menu-lg-show">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button"
                            data-toggle="aside-menu-show">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
                <div className="app-body">
                    <div className="sidebar">
                        <nav className="sidebar-nav">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">
                                        <i className="nav-icon icon-speedometer"></i> Dashboard
                                        <span className="badge badge-primary">NEW</span>
                                    </a>
                                </li>
                                <li className="nav-title">Theme</li>
                                <li className="nav-item">
                                    <a className="nav-link" href="colors.html">
                                        <i className="nav-icon icon-drop"></i> Colors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="typography.html">
                                        <i className="nav-icon icon-pencil"></i> Typography</a>
                                </li>
                                <li className="nav-title">Components</li>
                                <li className="nav-item nav-dropdown">
                                    <a className="nav-link nav-dropdown-toggle" href="#">
                                        <i className="nav-icon icon-puzzle"></i> Base</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/breadcrumb.html">
                                                <i className="nav-icon icon-puzzle"></i> Breadcrumb</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/cards.html">
                                                <i className="nav-icon icon-puzzle"></i> Cards</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/carousel.html">
                                                <i className="nav-icon icon-puzzle"></i> Carousel</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/collapse.html">
                                                <i className="nav-icon icon-puzzle"></i> Collapse</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/forms.html">
                                                <i className="nav-icon icon-puzzle"></i> Forms</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/jumbotron.html">
                                                <i className="nav-icon icon-puzzle"></i> Jumbotron</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/list-group.html">
                                                <i className="nav-icon icon-puzzle"></i> List group</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/navs.html">
                                                <i className="nav-icon icon-puzzle"></i> Navs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/pagination.html">
                                                <i className="nav-icon icon-puzzle"></i> Pagination</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/popovers.html">
                                                <i className="nav-icon icon-puzzle"></i> Popovers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/progress.html">
                                                <i className="nav-icon icon-puzzle"></i> Progress</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/scrollspy.html">
                                                <i className="nav-icon icon-puzzle"></i> Scrollspy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/switches.html">
                                                <i className="nav-icon icon-puzzle"></i> Switches</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/tables.html">
                                                <i className="nav-icon icon-puzzle"></i> Tables</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/tabs.html">
                                                <i className="nav-icon icon-puzzle"></i> Tabs</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="base/tooltips.html">
                                                <i className="nav-icon icon-puzzle"></i> Tooltips</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-dropdown">
                                    <a className="nav-link nav-dropdown-toggle" href="#">
                                        <i className="nav-icon icon-cursor"></i> Buttons</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons/buttons.html">
                                                <i className="nav-icon icon-cursor"></i> Buttons</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons/button-group.html">
                                                <i className="nav-icon icon-cursor"></i> Buttons Group</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons/dropdowns.html">
                                                <i className="nav-icon icon-cursor"></i> Dropdowns</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buttons/brand-buttons.html">
                                                <i className="nav-icon icon-cursor"></i> Brand Buttons</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="charts.html">
                                        <i className="nav-icon icon-pie-chart"></i> Charts</a>
                                </li>
                                <li className="nav-item nav-dropdown">
                                    <a className="nav-link nav-dropdown-toggle" href="#">
                                        <i className="nav-icon icon-star"></i> Icons</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="icons/coreui-icons.html">
                                                <i className="nav-icon icon-star"></i> CoreUI Icons
                                                <span className="badge badge-success">NEW</span>
                                            </a>
                                            <a className="nav-link" href="icons/flags.html">
                                                <i className="nav-icon icon-star"></i> Flags</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icons/font-awesome.html">
                                                <i className="nav-icon icon-star"></i> Font Awesome
                                                <span className="badge badge-secondary">4.7</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="icons/simple-line-icons.html">
                                                <i className="nav-icon icon-star"></i> Simple Line Icons</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item nav-dropdown">
                                    <a className="nav-link nav-dropdown-toggle" href="#">
                                        <i className="nav-icon icon-bell"></i> Notifications</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="notifications/alerts.html">
                                                <i className="nav-icon icon-bell"></i> Alerts</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="notifications/badge.html">
                                                <i className="nav-icon icon-bell"></i> Badge</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="notifications/modals.html">
                                                <i className="nav-icon icon-bell"></i> Modals</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="widgets.html">
                                        <i className="nav-icon icon-calculator"></i> Widgets
                                        <span className="badge badge-primary">NEW</span>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li className="nav-title">Extras</li>
                                <li className="nav-item nav-dropdown">
                                    <a className="nav-link nav-dropdown-toggle" href="#">
                                        <i className="nav-icon icon-star"></i> Pages</a>
                                    <ul className="nav-dropdown-items">
                                        <li className="nav-item">
                                            <a className="nav-link" href="login.html" target="_top">
                                                <i className="nav-icon icon-star"></i> Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="register.html" target="_top">
                                                <i className="nav-icon icon-star"></i> Register</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="404.html" target="_top">
                                                <i className="nav-icon icon-star"></i> Error 404</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="500.html" target="_top">
                                                <i className="nav-icon icon-star"></i> Error 500</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item mt-auto">
                                    <a className="nav-link nav-link-success" href="https://coreui.io" target="_top">
                                        <i className="nav-icon icon-cloud-download"></i> Download CoreUI</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-danger" href="https://coreui.io/pro/" target="_top">
                                        <i className="nav-icon icon-layers"></i> Try CoreUI
                                        <strong>PRO</strong>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button className="sidebar-minimizer brand-minimizer" type="button"></button>
                    </div>
                    <main className="main">

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item">
                                <a href="#">Admin</a>
                            </li>
                            <li className="breadcrumb-item active">Dashboard</li>

                            <li className="breadcrumb-menu d-md-down-none">
                                <div className="btn-group" role="group" aria-label="Button group">
                                    <a className="btn" href="#">
                                        <i className="icon-speech"></i>
                                    </a>
                                    <a className="btn" href="./">
                                        <i className="icon-graph"></i> Dashboard</a>
                                    <a className="btn" href="#">
                                        <i className="icon-settings"></i> Settings</a>
                                </div>
                            </li>
                        </ol>
                        <div className="container-fluid">
                            <div className="animated fadeIn">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card text-white bg-primary">
                                            <div className="card-body pb-0">
                                                <div className="btn-group float-right">
                                                    <button className="btn btn-transparent dropdown-toggle p-0"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon-settings"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                                <div className="text-value">9.823</div>
                                                <div>Members online</div>
                                            </div>
                                            <div className="chart-wrapper mt-3 mx-3" >
                                                <canvas className="chart" id="card-chart1" height="70"></canvas>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card text-white bg-info">
                                            <div className="card-body pb-0">
                                                <button className="btn btn-transparent p-0 float-right" type="button">
                                                    <i className="icon-location-pin"></i>
                                                </button>
                                                <div className="text-value">9.823</div>
                                                <div>Members online</div>
                                            </div>
                                            <div className="chart-wrapper mt-3 mx-3" >
                                                <canvas className="chart" id="card-chart2" height="70"></canvas>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card text-white bg-warning">
                                            <div className="card-body pb-0">
                                                <div className="btn-group float-right">
                                                    <button className="btn btn-transparent dropdown-toggle p-0"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon-settings"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                                <div className="text-value">9.823</div>
                                                <div>Members online</div>
                                            </div>
                                            <div className="chart-wrapper mt-3" >
                                                <canvas className="chart" id="card-chart3" height="70"></canvas>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="card text-white bg-danger">
                                            <div className="card-body pb-0">
                                                <div className="btn-group float-right">
                                                    <button className="btn btn-transparent dropdown-toggle p-0"
                                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon-settings"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a className="dropdown-item" href="#">Action</a>
                                                        <a className="dropdown-item" href="#">Another action</a>
                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                    </div>
                                                </div>
                                                <div className="text-value">9.823</div>
                                                <div>Members online</div>
                                            </div>
                                            <div className="chart-wrapper mt-3 mx-3" >
                                                <canvas className="chart" id="card-chart4" height="70"></canvas>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-5">
                                                <h4 className="card-title mb-0">Traffic</h4>
                                                <div className="small text-muted">November 2017</div>
                                            </div>

                                            <div className="col-sm-7 d-none d-md-block">
                                                <button className="btn btn-primary float-right" type="button">
                                                    <i className="icon-cloud-download"></i>
                                                </button>
                                                <div className="btn-group btn-group-toggle float-right mr-3"
                                                     data-toggle="buttons">
                                                    <label className="btn btn-outline-secondary">
                                                        <input id="option1" type="radio" name="options"
                                                               autoComplete="off"/> Day
                                                    </label>
                                                    <label className="btn btn-outline-secondary active">
                                                        <input id="option2" type="radio" name="options"
                                                               autoComplete="off" checked=""/> Month
                                                    </label>
                                                    <label className="btn btn-outline-secondary">
                                                        <input id="option3" type="radio" name="options"
                                                               autoComplete="off"/> Year
                                                    </label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="chart-wrapper" >
                                            <canvas className="chart" id="main-chart" height="300"></canvas>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row text-center">
                                            <div className="col-sm-12 col-md mb-sm-2 mb-0">
                                                <div className="text-muted">Visits</div>
                                                <strong>29.703 Users (40%)</strong>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-success" role="progressbar"
                                                          aria-valuenow="40" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md mb-sm-2 mb-0">
                                                <div className="text-muted">Unique</div>
                                                <strong>24.093 Users (20%)</strong>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                          aria-valuenow="20" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md mb-sm-2 mb-0">
                                                <div className="text-muted">Pageviews</div>
                                                <strong>78.706 Views (60%)</strong>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-warning" role="progressbar"
                                                         aria-valuenow="60" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md mb-sm-2 mb-0">
                                                <div className="text-muted">New Users</div>
                                                <strong>22.123 Users (80%)</strong>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar bg-danger" role="progressbar"
                                                          aria-valuenow="80" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md mb-sm-2 mb-0">
                                                <div className="text-muted">Bounce Rate</div>
                                                <strong>40.15%</strong>
                                                <div className="progress progress-xs mt-2">
                                                    <div className="progress-bar" role="progressbar"
                                                         aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="brand-card">
                                            <div className="brand-card-header bg-facebook">
                                                <i className="fa fa-facebook"></i>
                                                <div className="chart-wrapper">
                                                    <canvas id="social-box-chart-1" height="90"></canvas>
                                                </div>
                                            </div>
                                            <div className="brand-card-body">
                                                <div>
                                                    <div className="text-value">89k</div>
                                                    <div className="text-uppercase text-muted small">friends</div>
                                                </div>
                                                <div>
                                                    <div className="text-value">459</div>
                                                    <div className="text-uppercase text-muted small">feeds</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="brand-card">
                                            <div className="brand-card-header bg-twitter">
                                                <i className="fa fa-twitter"></i>
                                                <div className="chart-wrapper">
                                                    <canvas id="social-box-chart-2" height="90"></canvas>
                                                </div>
                                            </div>
                                            <div className="brand-card-body">
                                                <div>
                                                    <div className="text-value">973k</div>
                                                    <div className="text-uppercase text-muted small">followers</div>
                                                </div>
                                                <div>
                                                    <div className="text-value">1.792</div>
                                                    <div className="text-uppercase text-muted small">tweets</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="brand-card">
                                            <div className="brand-card-header bg-linkedin">
                                                <i className="fa fa-linkedin"></i>
                                                <div className="chart-wrapper">
                                                    <canvas id="social-box-chart-3" height="90"></canvas>
                                                </div>
                                            </div>
                                            <div className="brand-card-body">
                                                <div>
                                                    <div className="text-value">500+</div>
                                                    <div className="text-uppercase text-muted small">contacts</div>
                                                </div>
                                                <div>
                                                    <div className="text-value">292</div>
                                                    <div className="text-uppercase text-muted small">feeds</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-lg-3">
                                        <div className="brand-card">
                                            <div className="brand-card-header bg-google-plus">
                                                <i className="fa fa-google-plus"></i>
                                                <div className="chart-wrapper">
                                                    <canvas id="social-box-chart-4" height="90"></canvas>
                                                </div>
                                            </div>
                                            <div className="brand-card-body">
                                                <div>
                                                    <div className="text-value">894</div>
                                                    <div className="text-uppercase text-muted small">followers</div>
                                                </div>
                                                <div>
                                                    <div className="text-value">92</div>
                                                    <div className="text-uppercase text-muted small">circles</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card">
                                            <div className="card-header">Traffic & Sales</div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="callout callout-info">
                                                                    <small className="text-muted">New Clients</small>
                                                                    <br/>
                                                                    <strong className="h4">9,123</strong>
                                                                    <div className="chart-wrapper">
                                                                        <canvas id="sparkline-chart-1" width="100"
                                                                                height="30"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="callout callout-danger">
                                                                    <small className="text-muted">Recuring Clients
                                                                    </small>
                                                                    <br/>
                                                                    <strong className="h4">22,643</strong>
                                                                    <div className="chart-wrapper">
                                                                        <canvas id="sparkline-chart-2" width="100"
                                                                                height="30"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr className="mt-0"/>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                <span className="progress-group-text">Monday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="34" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="78" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                <span className="progress-group-text">Tuesday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="56" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="94" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                    <span
                                                                        className="progress-group-text">Wednesday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="12" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="67" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                    <span
                                                                        className="progress-group-text">Thursday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="43" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="91" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                <span className="progress-group-text">Friday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="22" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="73" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                    <span
                                                                        className="progress-group-text">Saturday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="53" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="82" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-4">
                                                            <div className="progress-group-prepend">
                                                                <span className="progress-group-text">Sunday</span>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-info"
                                                                         role="progressbar"
                                                                         aria-valuenow="9" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-danger"
                                                                         role="progressbar"
                                                                         aria-valuenow="69" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="callout callout-warning">
                                                                    <small className="text-muted">Pageviews</small>
                                                                    <br/>
                                                                    <strong className="h4">78,623</strong>
                                                                    <div className="chart-wrapper">
                                                                        <canvas id="sparkline-chart-3" width="100"
                                                                                height="30"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <div className="callout callout-success">
                                                                    <small className="text-muted">Organic</small>
                                                                    <br/>
                                                                    <strong className="h4">49,123</strong>
                                                                    <div className="chart-wrapper">
                                                                        <canvas id="sparkline-chart-4" width="100"
                                                                                height="30"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                        <hr className="mt-0"/>
                                                        <div className="progress-group">
                                                            <div className="progress-group-header">
                                                                <i className="icon-user progress-group-icon"></i>
                                                                <div>Male</div>
                                                                <div className="ml-auto font-weight-bold">43%</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-warning"
                                                                         role="progressbar"
                                                                         aria-valuenow="43" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group mb-5">
                                                            <div className="progress-group-header">
                                                                <i className="icon-user-female progress-group-icon"></i>
                                                                <div>Female</div>
                                                                <div className="ml-auto font-weight-bold">37%</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-warning"
                                                                         role="progressbar"
                                                                         aria-valuenow="43" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group">
                                                            <div className="progress-group-header align-items-end">
                                                                <i className="icon-globe progress-group-icon"></i>
                                                                <div>Organic Search</div>
                                                                <div
                                                                    className="ml-auto font-weight-bold mr-2">191.235
                                                                </div>
                                                                <div className="text-muted small">(56%)</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-success"
                                                                         role="progressbar"
                                                                         aria-valuenow="56" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group">
                                                            <div className="progress-group-header align-items-end">
                                                                <i className="icon-social-facebook progress-group-icon"></i>
                                                                <div>Facebook</div>
                                                                <div
                                                                    className="ml-auto font-weight-bold mr-2">51.223
                                                                </div>
                                                                <div className="text-muted small">(15%)</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-success"
                                                                         role="progressbar"
                                                                         aria-valuenow="15" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group">
                                                            <div className="progress-group-header align-items-end">
                                                                <i className="icon-social-twitter progress-group-icon"></i>
                                                                <div>Twitter</div>
                                                                <div
                                                                    className="ml-auto font-weight-bold mr-2">37.564
                                                                </div>
                                                                <div className="text-muted small">(11%)</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-success"
                                                                         role="progressbar"
                                                                         aria-valuenow="11" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-group">
                                                            <div className="progress-group-header align-items-end">
                                                                <i className="icon-social-linkedin progress-group-icon"></i>
                                                                <div>LinkedIn</div>
                                                                <div
                                                                    className="ml-auto font-weight-bold mr-2">27.319
                                                                </div>
                                                                <div className="text-muted small">(8%)</div>
                                                            </div>
                                                            <div className="progress-group-bars">
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-success"
                                                                         role="progressbar"
                                                                         aria-valuenow="8" aria-valuemin="0"
                                                                         aria-valuemax="100"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <br/>
                                                <table
                                                    className="table table-responsive-sm table-hover table-outline mb-0">
                                                    <thead className="thead-light">
                                                    <tr>
                                                        <th className="text-center">
                                                            <i className="icon-people"></i>
                                                        </th>
                                                        <th>User</th>
                                                        <th className="text-center">Country</th>
                                                        <th>Usage</th>
                                                        <th className="text-center">Payment Method</th>
                                                        <th>Activity</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/1.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-success"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Yiorgos Avraamu</div>
                                                            <div className="small text-muted">
                                                                <span>New</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-us h4 mb-0" id="us"
                                                               title="us"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>50%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-success"
                                                                     role="progressbar"
                                                                     aria-valuenow="50" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-cc-mastercard"
                                                               ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>10 sec ago</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/2.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-danger"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Avram Tarasios</div>
                                                            <div className="small text-muted">
                                                                <span>Recurring</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-br h4 mb-0" id="br"
                                                               title="br"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>10%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-info"
                                                                     role="progressbar"
                                                                     aria-valuenow="10" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-cc-visa" ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>5 minutes ago</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/3.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-warning"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Quintin Ed</div>
                                                            <div className="small text-muted">
                                                                <span>New</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-in h4 mb-0" id="in"
                                                               title="in"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>74%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-warning"
                                                                     role="progressbar"
                                                                     aria-valuenow="74" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-cc-stripe"
                                                               ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>1 hour ago</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/4.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-secondary"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Enéas Kwadwo</div>
                                                            <div className="small text-muted">
                                                                <span>New</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-fr h4 mb-0" id="fr"
                                                               title="fr"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>98%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-danger"
                                                                     role="progressbar"
                                                                     aria-valuenow="98" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-paypal" ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>Last month</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/5.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-success"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Agapetus Tadeáš</div>
                                                            <div className="small text-muted">
                                                                <span>New</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-es h4 mb-0" id="es"
                                                               title="es"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>22%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-info"
                                                                     role="progressbar"
                                                                     aria-valuenow="22" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-google-wallet"
                                                               ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>Last week</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">
                                                            <div className="avatar">
                                                                <img className="img-avatar" src="img/avatars/6.jpg"
                                                                     alt="admin@bootstrapmaster.com"/>
                                                                <span
                                                                    className="avatar-status badge-danger"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>Friderik Dávid</div>
                                                            <div className="small text-muted">
                                                                <span>New</span> | Registered: Jan 1, 2015
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="flag-icon flag-icon-pl h4 mb-0" id="pl"
                                                               title="pl"></i>
                                                        </td>
                                                        <td>
                                                            <div className="clearfix">
                                                                <div className="float-left">
                                                                    <strong>43%</strong>
                                                                </div>
                                                                <div className="float-right">
                                                                    <small className="text-muted">Jun 11, 2015 - Jul
                                                                        10, 2015
                                                                    </small>
                                                                </div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-success"
                                                                     role="progressbar"
                                                                     aria-valuenow="43" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <i className="fa fa-cc-amex" ></i>
                                                        </td>
                                                        <td>
                                                            <div className="small text-muted">Last login</div>
                                                            <strong>Yesterday</strong>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </main>
                    <aside className="aside-menu">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#timeline" role="tab">
                                    <i className="icon-list"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#messages" role="tab">
                                    <i className="icon-speech"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#settings" role="tab">
                                    <i className="icon-settings"></i>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div className="tab-pane active" id="timeline" role="tabpanel">
                                <div className="list-group list-group-accent">
                                    <div
                                        className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today
                                    </div>
                                    <div
                                        className="list-group-item list-group-item-accent-warning list-group-item-divider">
                                        <div className="avatar float-right">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                        </div>
                                        <div>Meeting with
                                            <strong>Lucas</strong>
                                        </div>
                                        <small className="text-muted mr-3">
                                            <i className="icon-calendar"></i> 1 - 3pm
                                        </small>
                                        <small className="text-muted">
                                            <i className="icon-location-pin"></i> Palo Alto, CA
                                        </small>
                                    </div>
                                    <div className="list-group-item list-group-item-accent-info">
                                        <div className="avatar float-right">
                                            <img className="img-avatar" src="img/avatars/4.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                        </div>
                                        <div>Skype with
                                            <strong>Megan</strong>
                                        </div>
                                        <small className="text-muted mr-3">
                                            <i className="icon-calendar"></i> 4 - 5pm
                                        </small>
                                        <small className="text-muted">
                                            <i className="icon-social-skype"></i> On-line
                                        </small>
                                    </div>
                                    <div
                                        className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow
                                    </div>
                                    <div
                                        className="list-group-item list-group-item-accent-danger list-group-item-divider">
                                        <div>New UI Project -
                                            <strong>deadline</strong>
                                        </div>
                                        <small className="text-muted mr-3">
                                            <i className="icon-calendar"></i> 10 - 11pm
                                        </small>
                                        <small className="text-muted">
                                            <i className="icon-home"></i> creativeLabs HQ
                                        </small>
                                        <div className="avatars-stack mt-2">
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/2.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/3.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/4.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/5.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/6.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="list-group-item list-group-item-accent-success list-group-item-divider">
                                        <div>
                                            <strong>#10 Startups.Garden</strong> Meetup
                                        </div>
                                        <small className="text-muted mr-3">
                                            <i className="icon-calendar"></i> 1 - 3pm
                                        </small>
                                        <small className="text-muted">
                                            <i className="icon-location-pin"></i> Palo Alto, CA
                                        </small>
                                    </div>
                                    <div
                                        className="list-group-item list-group-item-accent-primary list-group-item-divider">
                                        <div>
                                            <strong>Team meeting</strong>
                                        </div>
                                        <small className="text-muted mr-3">
                                            <i className="icon-calendar"></i> 4 - 6pm
                                        </small>
                                        <small className="text-muted">
                                            <i className="icon-home"></i> creativeLabs HQ
                                        </small>
                                        <div className="avatars-stack mt-2">
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/2.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/3.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/4.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/5.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/6.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/7.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                            <div className="avatar avatar-xs">
                                                <img className="img-avatar" src="img/avatars/8.jpg"
                                                     alt="admin@bootstrapmaster.com"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane p-3" id="messages" role="tabpanel">
                                <div className="message">
                                    <div className="py-3 pb-5 mr-3 float-left">
                                        <div className="avatar">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                            <span className="avatar-status badge-success"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lukasz Holeczek</small>
                                        <small className="text-muted float-right mt-1">1:52 PM</small>
                                    </div>
                                    <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                                    <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do eiusmod tempor incididunt...
                                    </small>
                                </div>
                                <hr/>
                                <div className="message">
                                    <div className="py-3 pb-5 mr-3 float-left">
                                        <div className="avatar">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                                <span className="avatar-status badge-success"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lukasz Holeczek</small>
                                        <small className="text-muted float-right mt-1">1:52 PM</small>
                                    </div>
                                    <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
                                    <small className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor incididunt...
                                    </small>
                                </div>
                                <hr/>
                                <div className="message">
                                    <div className="py-3 pb-5 mr-3 float-left">
                                        <div className="avatar">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                            <span className="avatar-status badge-success"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lukasz Holeczek</small>
                                        <small className="text-muted float-right mt-1">1:52 PM</small>
                                    </div>
                                    <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet
                                    </div>
                                    <small className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor incididunt...
                                    </small>
                                </div>
                                <hr/>
                                <div className="message">
                                    <div className="py-3 pb-5 mr-3 float-left">
                                        <div className="avatar">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                            <span className="avatar-status badge-success"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lukasz Holeczek</small>
                                        <small className="text-muted float-right mt-1">1:52 PM</small>
                                    </div>
                                    <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit
                                        amet
                                    </div>
                                    <small className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor incididunt...
                                    </small>
                                </div>
                                <hr/>
                                <div className="message">
                                    <div className="py-3 pb-5 mr-3 float-left">
                                        <div className="avatar">
                                            <img className="img-avatar" src="img/avatars/7.jpg"
                                                 alt="admin@bootstrapmaster.com"/>
                                            <span className="avatar-status badge-success"></span>
                                        </div>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lukasz Holeczek</small>
                                        <small className="text-muted float-right mt-1">1:52 PM</small>
                                    </div>
                                    <div className="text-truncate font-weight-bold">Lorem ipsum dolor
                                        sit amet
                                    </div>
                                    <small className="text-muted">Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt...
                                    </small>
                                </div>
                            </div>
                            <div className="tab-pane p-3" id="settings" role="tabpanel">
                                <h6>Settings</h6>
                                <div className="aside-options">
                                    <div className="clearfix mt-4">
                                        <small>
                                            <b>Option 1</b>
                                        </small>
                                        <label
                                            className="switch switch-label switch-pill switch-success switch-sm float-right">
                                            <input className="switch-input" type="checkbox" checked=""/>
                                            <span className="switch-slider" data-checked="On"
                                                  data-unchecked="Off"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </small>
                                    </div>
                                </div>
                                <div className="aside-options">
                                    <div className="clearfix mt-3">
                                        <small>
                                            <b>Option 2</b>
                                        </small>
                                        <label
                                            className="switch switch-label switch-pill switch-success switch-sm float-right">
                                            <input className="switch-input" type="checkbox"/>
                                            <span className="switch-slider" data-checked="On"
                                                  data-unchecked="Off"></span>
                                        </label>
                                    </div>
                                    <div>
                                        <small className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </small>
                                    </div>
                                </div>
                                <div className="aside-options">
                                    <div className="clearfix mt-3">
                                        <small>
                                            <b>Option 3</b>
                                        </small>
                                        <label
                                            className="switch switch-label switch-pill switch-success switch-sm float-right">
                                            <input className="switch-input" type="checkbox"/>
                                            <span className="switch-slider" data-checked="On"
                                                  data-unchecked="Off"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="aside-options">
                                    <div className="clearfix mt-3">
                                        <small>
                                            <b>Option 4</b>
                                        </small>
                                        <label
                                            className="switch switch-label switch-pill switch-success switch-sm float-right">
                                            <input className="switch-input" type="checkbox" checked=""/>
                                            <span className="switch-slider" data-checked="On"
                                                  data-unchecked="Off"></span>
                                        </label>
                                    </div>
                                </div>
                                <hr/>
                                <h6>System Utilization</h6>
                                <div className="text-uppercase mb-1 mt-4">
                                    <small>
                                        <b>CPU Usage</b>
                                    </small>
                                </div>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-info" role="progressbar"
                                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small className="text-muted">348 Processes. 1/4 Cores.</small>
                                <div className="text-uppercase mb-1 mt-2">
                                    <small>
                                        <b>Memory Usage</b>
                                    </small>
                                </div>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-warning" role="progressbar"
                                         aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small className="text-muted">11444GB/16384MB</small>
                                <div className="text-uppercase mb-1 mt-2">
                                    <small>
                                        <b>SSD 1 Usage</b>
                                    </small>
                                </div>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-danger" role="progressbar"
                                         aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small className="text-muted">243GB/256GB</small>
                                <div className="text-uppercase mb-1 mt-2">
                                    <small>
                                        <b>SSD 2 Usage</b>
                                    </small>
                                </div>
                                <div className="progress progress-xs">
                                    <div className="progress-bar bg-success" role="progressbar"
                                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <small className="text-muted">25GB/256GB</small>
                            </div>
                        </div>
                    </aside>
                </div>
                <footer className="app-footer">
                    <div>
                        <a href="https://coreui.io">CoreUI</a>
                        <span>&copy; 2018 creativeLabs.</span>
                    </div>
                    <div className="ml-auto">
                        <span>Powered by</span>
                        <a href="https://coreui.io">CoreUI</a>
                    </div>
                </footer>
            </div>
    );
    }
    }

    export default Home;
