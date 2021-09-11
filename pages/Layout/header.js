import Link from 'next/link'
import {useRouter} from 'next/router'
import { GiCommercialAirplane } from 'react-icons/gi'
import GetQuotes from '../PageComponents/getquotes'

function Header(){
   
    return (
       <>        
        <title>Gofaz Rossul - Cargo Freight Forwarding, Sea Shipment and Package Delivery Logistics</title>
        <meta name="author" content="Actual ICT" />
        <meta name="robots" content="index follow" />
        <meta name="googlebot" content="index follow" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="cargo, sea, freight, logistics, shipment, package delivery, trucking, contractor " />
        <meta name="description" content="Cargo Freight Forwarding, Sea Shipment and Package Delivery Logistics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:300i,300,400,500,600,700,400i,500%7CDancing+Script:700%7CDancing+Script:700%7CGreat+Vibes:400%7CPoppins:400%7CDosis:800%7CRaleway:400,700,800&subset=latin-ext" rel="stylesheet" />
        {/* animate */}
        <link rel="stylesheet" href="assets/css/animate.css" />
        {/* owl Carousel assets */}
        <link href="assets/css/owl.carousel.css" rel="stylesheet" />
        <link href="assets/css/owl.theme.css" rel="stylesheet" />
        {/* bootstrap */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        {/* hover anmation */}
        <link rel="stylesheet" href="assets/css/hover-min.css" />
        {/* flag icon */}
        <link rel="stylesheet" href="assets/css/flag-icon.min.css" />
        {/* main style */}
        <link rel="stylesheet" href="assets/css/style.css" />
        {/* elegant icon */}
        <link rel="stylesheet" href="assets/css/elegant_icon.css" />
        {/* jquery library  */}
        {/* fontawesome  */}
        <link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" />
       
    
        {/*  Header  */}
        <header className="background-white">
          <div className="header-output">
            <div className="header-output">
              <div className="header-in">
                {/* Up Head */}
                <div className="up-head d-none d-lg-block background-grey-4">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-8 col-lg-12">
                        <div className="row">
                <div className="col-md-4"><i className="fa fa-phone margin-right-10px" /> +971 55 972 2635 <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+971 56 184 5276</div>

                <div className="col-md-4"><i className="fa fa-envelope-o margin-right-10px" /> enquiry@gofazrossul.com</div>

                <div className="col-md-4"><i className="fa fa-map-marker margin-right-10px" /> Deira, Dubai-U.A.E<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ikeja, Lagos-Nigeria</div>
                        </div>
                      </div>
                      <div className="col-xl-4 d-none d-xl-block">
                        <div className="row">
                          <div className="col-lg-6">
                            {/* lang dropdown */}
                            <div className="dropdown show">
                              <a className="dropdown-toggle text-white text-uppercase" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="flag-icon flag-icon-us margin-right-8px" /> English
                              </a>
                              <div className="dropdown-menu text-small text-uppercase" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-es margin-right-8px" /> Spanish</a>
                                <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-mr margin-right-8px" /> Arabic</a>
                                <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-fr margin-right-8px" /> French</a>
                                <a className="dropdown-item" href="#"><span className="flag-icon flag-icon-de margin-right-8px" /> German</a>
                              </div>
                            </div>
                            {/* // lang dropdown */}
                          </div>
                          <div className="col-lg-6">
                            {/*  Social */}
                            <ul className="social-media list-inline text-right margin-0px text-white">
                              <li className="list-inline-item"><a className="facebook" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                              <li className="list-inline-item"><a className="youtube" href="#"><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                              <li className="list-inline-item"><a className="linkedin" href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                              <li className="list-inline-item"><a className="google" href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                              <li className="list-inline-item"><a className="twitter" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                              <li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
                            </ul>
                            {/* // Social */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // Up Head */}
                <div className="container">
                  <div className="position-relative">
                    <div className="row">
                      <div className="col-lg-3 col-md-12">
                       <a>
                        {/*<img src="assets/img/gofaz-logo.jpg" alt="" />*/}
                       {/* <GiCommercialAirplane color="darkgreen" size="55px" /><h3><strong>Gofaz Rossul</strong></h3>*/}
                       <h4 className="logoText"><strong><br/>
                       Gofaz Rossul
                       </strong></h4>
                       </a>
                        <a className="mobile-toggle padding-15px background-second-color border-radius-3" href="#"><i className="fa fa-bars" /></a>
                      </div>
                      <div className="col-lg-7 col-md-12 position-inherit">
                        <ul id="menu-main" className="nav-menu float-xl-left text-lg-center link-padding-tb-25px dropdown-dark">
                                                   
                          <li className="has-dropdown"><a href="#">Home</a>
                            <ul className="sub-menu">
                            <Link href='/'>   
                            <li><a href=''>Welcome To Gofaz Rossul</a></li>
                            </Link>
                            </ul>
                           </li>                       
                     
                          <li className="has-dropdown"><a href="#">Services</a>
                            <ul className="sub-menu">
                            <Link href='../services'>
                            <li><a href=''>What we do</a></li>
                            </Link>
                            </ul>
                            </li>

                            <li className="has-dropdown"><a href="#">Track</a>
                            <ul className="sub-menu">
                            <Link href='../track'>
                            <li><a href=''>Check Delivery Status</a></li>
                            </Link>
                            </ul>
                            </li>
                                                    
                          <li className="has-dropdown"><a href="#">About Us</a>
                            <ul className="sub-menu">
                            
                            <Link href='../about'>
                            <li><a href="">About Gofaz Rossul</a></li>
                            </Link>

                            <Link href='../faq'>
                            <li><a href="">FAQ</a></li>
                            </Link>
                           
                            </ul>
                            </li>                      
                                                                     
                          <li className="has-dropdown"><a href='#'>Contact</a>
                          <ul className="sub-menu">
                          <Link href='../contact'>     
                          <li><a href="">Reach Us</a></li>
                          </Link>
                          </ul>
                          </li>
                         
                                                                                                                       

                             <li className="has-dropdown"><a href="#">Login / Register</a>
                            <ul className="sub-menu">                            
                            <Link href='../login'>
                            <li><a href="">Login</a></li>
                            </Link> 
                            <Link href='../register'>
                            <li><a href="">Register</a></li>
                            </Link> 
                            </ul>                                                       
                            </li>                       
                        

                              </ul>
                            </div>                        

                        <div className="d-none d-xl-block pull-right model-link margin-top-15px">
                                                   
                        </div>
                        <div className="d-none d-xl-block search-link pull-right model-link margin-top-15px">
                         
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-12  d-none d-lg-block">
                        <a data-toggle="modal" data-target=".bd-example-modal-lg" href="#" className="btn btn-sm border-radius-30 margin-tb-20px text-white  background-main-color  box-shadow float-right padding-lr-20px margin-left-30px d-block">
                          <i className="fa fa-envelope-o margin-right-10px" />  Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                     
        </header>
        {/* // Header  */}
        {/* Search  */}
        <div id="search">
          
        </div>
        {/* // Search  */}
        {/* Get A Quote  */}
       <GetQuotes />
        {/* // Get A Quote  */}    
    </>
   )
}

export default Header