<template>
    <div>
        <header class="header-2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="header-top">
                            <div class="logo-area">
                                <a href="#"><img src="images/logo-2.png" alt=""></a>
                            </div>
                            <div class="header-top-toggler">
                                <div class="header-top-toggler-button"></div>
                            </div>
                            <div class="top-nav">
                                <div class="dropdown header-top-notification">
                                    <a href="#" class="notification-button">Notification</a>
                                    <div class="notification-card">
                                        <div class="notification-head">
                                            <span>Notifications</span>
                                            <a href="#">Mark all as read</a>
                                        </div>
                                        <div class="notification-body">
                                            <a href="home-2.html" class="notification-list">
                                                <i class="fas fa-bolt"></i>
                                                <p>Your Resume Updated!</p>
                                                <span class="time">5 hours ago</span>
                                            </a>
                                            <a href="#" class="notification-list">
                                                <i class="fas fa-arrow-circle-down"></i>
                                                <p>Someone downloaded resume</p>
                                                <span class="time">11 hours ago</span>
                                            </a>
                                            <a href="#" class="notification-list">
                                                <i class="fas fa-check-square"></i>
                                                <p>You applied for Project Manager <span>@homeland</span></p>
                                                <span class="time">11 hours ago</span>
                                            </a>
                                            <a href="#" class="notification-list">
                                                <i class="fas fa-user"></i>
                                                <p>You changed password</p>
                                                <span class="time">5 hours ago</span>
                                            </a>
                                            <a href="#" class="notification-list">
                                                <i class="fas fa-arrow-circle-down"></i>
                                                <p>Someone downloaded resume</p>
                                                <span class="time">11 hours ago</span>
                                            </a>
                                        </div>
                                        <div class="notification-footer">
                                            <a href="#">See all notification</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown header-top-account login-modals">
                                    <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong">Login</button>
                                    <button title="Title" type="button" data-toggle="modal" data-target="#exampleModalLong2">Registration</button>
                                </div>
                                <select class="selectpicker select-language" data-width="fit">
                                    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                                    <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                                </select>
                            </div>
                        </div>
                        <nav class="navbar navbar-expand-lg cp-nav-2">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="menu-item active"><a title="Home" href="home-1.html">Home</a></li>
                                    <li class="menu-item dropdown">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Jobs</a>
                                        <ul  class="dropdown-menu">
                                            <li class="menu-item"><a  href="job-listing.html">Job Listing</a></li>
                                            <li class="menu-item"><a  href="job-listing-with-map.html">Job Listing With Map</a></li>
                                            <li class="menu-item"><a  href="job-details.html">Job Details</a></li>
                                            <!-- <li class="menu-item"><a  href="post-job.html">Post Job</a></li> -->
                                        </ul>
                                    </li>
                                    <li class="menu-item dropdown">
                                        <a title="" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Candidates</a>
                                        <ul  class="dropdown-menu">
                                            <li class="menu-item"><a  href="candidate.html">Candidate Listing</a></li>
                                            <li class="menu-item"><a  href="candidate-details.html">Candidate Details</a></li>
                                            <li class="menu-item"><a  href="add-resume.html">Add Resume</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item dropdown">
                                        <a title="" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Employers</a>
                                        <ul  class="dropdown-menu">
                                            <li class="menu-item"><a  href="employer-listing.html">Employer Listing</a></li>
                                            <li class="menu-item"><a  href="employer-details.html">Employer Details</a></li>
                                            <li class="menu-item"><a  href="employer-dashboard-post-job.html">Post a Job</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item dropdown">
                                        <a href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Dashboard</a>
                                        <ul  class="dropdown-menu">
                                            <li class="menu-item dropdown">
                                                <a href="#" data-toggle="dropdown"  class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Candidate Dashboard</a>
                                                <ul class="dropdown-menu">
                                                    <li class="menu-item"><a  href="dashboard.html">Dashboard</a></li>
                                                    <li class="menu-item"><a  href="dashboard-edit-profile.html">Edit Profile</a></li>
                                                    <li class="menu-item"><a  href="add-resume.html">Add Resume</a></li>
                                                    <li class="menu-item"><a  href="resume.html">Resume</a></li>
                                                    <li class="menu-item"><a  href="edit-resume.html">Edit Resume</a></li>
                                                    <li class="menu-item"><a  href="dashboard-bookmark.html">Bookmarked</a></li>
                                                    <li class="menu-item"><a  href="dashboard-applied.html">Applied</a></li>
                                                    <li class="menu-item"><a  href="dashboard-pricing.html">Pricing</a></li>
                                                    <li class="menu-item"><a  href="dashboard-message.html">Message</a></li>
                                                    <li class="menu-item"><a  href="dashboard-alert.html">Alert</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item dropdown">
                                                <a href="#" data-toggle="dropdown"  class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Employer Dashboard</a>
                                                <ul class="dropdown-menu">
                                                    <li class="menu-item"><a href="employer-dashboard.html">Employer Dashboard</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-edit-profile.html">Edit Profile</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-manage-candidate.html">Manage Candidate</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-manage-job.html">Manage Job</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-message.html">Dashboard Message</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-pricing.html">Dashboard Pricing</a></li>
                                                    <li class="menu-item"><a href="employer-dashboard-post-job.html">Post Job</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item dropdown">
                                        <a title="" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul  class="dropdown-menu">
                                            <li class="menu-item"><a href="about-us.html">About Us</a></li>
                                            <li class="menu-item"><a href="how-it-work.html">How It Works</a></li>
                                            <li class="menu-item"><a href="pricing.html">Pricing Plan</a></li>
                                            <li class="menu-item"><a href="faq.html">FAQ</a></li>
                                            <li class="menu-item dropdown">
                                                <a href="#" data-toggle="dropdown"  class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">News &amp; Advices</a>
                                                <ul class="dropdown-menu">
                                                    <li class="menu-item"><a href="blog.html">News</a></li>
                                                    <li class="menu-item"><a href="blog-grid.html">News Grid</a></li>
                                                    <li class="menu-item"><a href="blog-details.html">News Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="checkout.html">Checkout</a></li>
                                            <li class="menu-item"><a href="payment-complete.html">Payment Complete</a></li>
                                            <li class="menu-item"><a href="invoice.html">Invoice</a></li>
                                            <li class="menu-item"><a href="terms-and-condition.html">Terms And Condition</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="contact.html">Contact Us</a></li>
                                    <li class="menu-item post-job"><a href="post-job.html"><i class="fas fa-plus"></i>Post a Job</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header End -->



        <!-- Modal -->
        <div class="account-entry">
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i data-feather="user"></i>Login</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="#">
                                <div class="form-group">
                                    <input type="email" placeholder="Email Address" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control">
                                </div>
                                <div class="more-option">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label" for="defaultCheck1">
                                            Remember Me
                                        </label>
                                    </div>
                                    <a href="#">Forget Password?</a>
                                </div>
                                <button class="button primary-bg btn-block">Login</button>
                            </form>
                            <div class="shortcut-login">
                                <span>Or connect with</span>
                                <div class="buttons">
                                    <a href="#" class="facebook"><i class="fab fa-facebook-f"></i>Facebook</a>
                                    <a href="#" class="google"><i class="fab fa-google"></i>Google</a>
                                </div>
                                <p>Don't have an account? <a href="#">Register</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalLong2" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title"><i data-feather="edit"></i>Registration</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="account-type">
                                <a href="#" class="candidate-acc active"><i data-feather="user"></i>Candidate</a>
                                <a href="#" class="employer-acc"><i data-feather="briefcase"></i>Employer</a>
                            </div>
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" placeholder="Username" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Email Address" class="form-control">
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control">
                                </div>
                                <div class="more-option terms">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                        <label class="form-check-label" for="defaultCheck2">
                                            I accept the <a href="#">terms & conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <button class="button primary-bg btn-block">Register</button>
                            </form>
                            <div class="shortcut-login">
                                <span>Or connect with</span>
                                <div class="buttons">
                                    <a href="#" class="facebook"><i class="fab fa-facebook-f"></i>Facebook</a>
                                    <a href="#" class="google"><i class="fab fa-google"></i>Google</a>
                                </div>
                                <p>Already have an account? <a href="#">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner -->
        <div class="banner banner-2 banner-2-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="banner-content">
                            <h1>Find the right job</h1>
                            <p>Create free account to find thousands Jobs, Employment & Career Opportunities around you!</p>
                            <div class="short-infos">
                                <div class="info">
                                    <h4>5,862</h4>
                                    <span>Jobs Posted</span>
                                </div>
                                <div class="info">
                                    <h4>240</h4>
                                    <span>Companies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Search and Filter -->
        <div class="searchAndFilter-wrapper-2">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="searchAndFilter-block">
                            <div class="searchAndFilter searchAndFilter-2">
                                <form action="#" class="search-form">
                                    <input type="text" placeholder="Enter Keywords">
                                    <select class="selectpicker" id="search-location">
                                        <option value="" selected>Location</option>
                                        <option value="california">California</option>
                                        <option value="las-vegas">Las Vegas</option>
                                        <option value="new-work">New Work</option>
                                        <option value="carolina">Carolina</option>
                                        <option value="chicago">Chicago</option>
                                        <option value="silicon-vally">Silicon Vally</option>
                                        <option value="washington">Washington DC</option>
                                        <option value="neveda">Neveda</option>
                                    </select>
                                    <select class="selectpicker" id="search-category">
                                        <option value="" selected>Category</option>
                                        <option value="real-state">Real State</option>
                                        <option value="vehicales">Vehicales</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="beauty">Beauty</option>
                                        <option value="furnitures">Furnitures</option>
                                    </select>
                                    <button class="button"><i class="fas fa-search"></i>Search Job</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search and Filter End -->

        <!-- Category -->
        <div class="padding-bottom-60">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="categories">
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="bar-chart-2"></i>
                                </div>
                                <h5><a href="job-listing.html">Accounting / Finance<span>(233)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="edit"></i>
                                </div>
                                <h5><a href="job-listing.html">Education<span>(45)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="feather"></i>
                                </div>
                                <h5><a href="job-listing.html">Design & Creative<span>(147)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="briefcase"></i>
                                </div>
                                <h5><a href="job-listing.html">Health Care<span>(87)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="package"></i>
                                </div>
                                <h5><a href="job-listing.html">Engineer & Architects<span>(367)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="pie-chart"></i>
                                </div>
                                <h5><a href="job-listing.html">Marketing & Sales<span>(41)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="command"></i>
                                </div>
                                <h5><a href="job-listing.html">Garments / Textile<span>(126)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="life-buoy"></i>
                                </div>
                                <h5><a href="job-listing.html">Customer Support<span>(161)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="headphones"></i>
                                </div>
                                <h5><a href="job-listing.html">Digital Media<span>(69)</span></a></h5>
                            </div>
                            <div class="category">
                                <div class="icon">
                                    <i data-feather="radio"></i>
                                </div>
                                <h5><a href="job-listing.html">Telecommunication<span>(92)</span></a></h5>
                            </div>
                            <span class="vr vr-1"></span>
                            <span class="vr vr-2"></span>
                            <span class="vr vr-3"></span>
                            <span class="vr vr-4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Category End -->
        <!-- Jobs -->
<recent_job></recent_job>
        <!-- Jobs End -->
        <!--top company-->
<top_company></top_company>
        <!--top company end-->
        <!-- Footer -->
        <home_footer></home_footer>
        <!-- Footer End -->
    </div>
</template>
<script>

    import recentJob from './Recent';
    import TopCompany from './TopCompany'
    import footer from '../SharedUI/Footer';
    export default{
        data(){
          return {

          }
        },
        components:{
            top_company:TopCompany,
            recent_job:recentJob,
            home_footer:footer,
        }
    }
</script>
<style>
    @import "../../../../public/assets/css/fontawesome-all.min.css";
    @import "../../../../public/assets/css/themify-icons.css";
    @import "../../../../public/assets/css/et-line.css";
    @import "../../../../public/assets/css/bootstrap-select.min.css";
    @import "../../../../public/assets/css/plyr.css";
    @import "../../../../public/assets/css/flag.css";
    @import "../../../../public/assets/css/slick.css";
    @import "../../../../public/assets/css/owl.carousel.min.css";
    @import "../../../../public/assets/css/jquery.nstSlider.min.css";
    @import "../../../../public/css/custom-style.css";
    @import "../../../../public/css/main.css";

</style>