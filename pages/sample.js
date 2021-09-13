import Link from 'next/link'
import {useRouter} from 'next/router'
import GetQuotes from './PageComponents/getquotes'
import Footer from './Layout/footer'
import Header from './Layout/header'


function Sample(){
   
    return(
        <>
         <Header />

<title>Gofaz Rossul - Cargo Freight Forwarding, Sea Shipment and Package Delivery Logistics</title>
        <meta name="author" content="Actual ICT" />
        <meta name="robots" content="index follow" />
        <meta name="googlebot" content="index follow" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="cargo, sea, freight, logistics, shipment, package delivery, trucking, contractor " />
        <meta name="description" content="Cargo Freight Forwarding, Sea Shipment and Package Delivery Logistics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:300i,300,XMR400%7CDosis:800%7CRaleway:400,700,800&subset=latin-ext" rel="stylesheet" />
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
        {/* fontawesome  */}
        <link rel="stylesheet" href="assets/fonts/font-awesome/css/font-awesome.min.css" />
        {/* REVOLUTION STYLE SHEETS */}
        <link rel="stylesheet" type="text/css" href="assets/rslider/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css" />
        <link rel="stylesheet" type="text/css" href="assets/rslider/fonts/font-awesome/css/font-awesome.css" />
        <link rel="stylesheet" type="text/css" href="assets/rslider/css/settings.css" />
        <header>
          <div id="fixed-header-dark" className="header-output fixed-header">
            <div className="header-output">
              <div className="container header-in">
                {/* Up Head */}
                <div className="up-head d-none d-lg-block">
                  <div className="row">
                    <div className="col-xl-8 col-lg-12">
                      <div className="row">
                        <div className="col-md-4"><i className="fa fa-phone margin-right-10px" /> 00222 123 333 019</div>
                        <div className="col-md-4"><i className="fa fa-envelope-o margin-right-10px" /> info@your-site.com</div>
                        <div className="col-md-4"><i className="fa fa-map-marker margin-right-10px" /> 1105 Saudi Arabia - Street, CA</div>
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
                {/* // Up Head */}
                <div className="position-relative">
                  <div className="row">
                    <div className="col-lg-3 col-md-12">
                      <a id="logo" href="home-1.html" className="d-inline-block margin-tb-15px"><img src="assets/img/logo-1.png" alt="" /></a>
                      <a className="mobile-toggle padding-15px background-second-color border-radius-3" href="#"><i className="fa fa-bars" /></a>
                    </div>
                    <div className="col-lg-7 col-md-12 position-inherit">
                      <ul id="menu-main" className="nav-menu float-xl-left text-lg-center link-padding-tb-25px white-link dropdown-dark">
                        <li className="has-dropdown"><a href="#">Home</a>
                          <ul className="sub-menu">
                            <li><a href="home-1.html">Home - Main Demo</a></li>
                            <li><a href="home-2.html">Home - Classic Layout</a></li>
                            <li><a href="home-3.html">Home - Modern Layout</a></li>
                            <li><a href="home-4.html">Home - Marine Transport</a></li>
                            <li><a href="home-5.html">Home - Moving Co</a></li>
                            <li><a href="home-6.html">Home - Company</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown"><a href="#">About</a>
                          <ul className="sub-menu">
                            <li><a href="page-about-us.html">About Us</a></li>
                            <li><a href="page-faqs.html">Faqs</a></li>
                            <li><a href="page-out-team.html">Our Team</a></li>
                            <li><a href="page-price-table.html">Price Table</a></li>
                            <li><a href="page-contact-us.html">Contact Us</a></li>
                            <li><a href="page-our-partners.html">Our Partners</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown"><a href="#">Services</a>
                          <ul className="sub-menu">
                            <li><a href="service-single.html">Cargo Transportation</a></li>
                            <li><a href="service-single.html">Air Freight</a></li>
                            <li><a href="service-single.html">Ocean Freight</a></li>
                            <li><a href="service-single.html">Packaging and Storage</a></li>
                            <li><a href="service-single.html">Fast Delivery</a></li>
                            <li><a href="service-single.html">Railroad Transportation</a></li>
                          </ul>
                        </li>
                        <li className="has-dropdown"><a href="#">Blog</a>
                          <ul className="sub-menu">
                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar </a></li>
                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                            <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                            <li><a href="blog-single.html">Post Detalis</a></li>
                          </ul>
                        </li>
                        <li className="mega-menu mega-links mega-links-4columns"><a href="#">Elements</a>
                          <div className="mega-menu-out sub-menu-out">
                            <ul className="sub-menu-columns">
                              <li>
                                <a href="#">Default Elements</a>
                                <ul className="mega-menu-list">
                                  <li><a href="elements-accordions.html">accordions</a></li>
                                  <li><a href="elements-action-box.html">Call To Action</a></li>
                                  <li><a href="elements-alert-messages.html">alert messages</a></li>
                                  <li><a href="elements-icon-box.html">Icon Box</a></li>
                                  <li><a href="elements-blog-post.html">blog post</a></li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Interactive Elements</a>
                                <ul className="mega-menu-list">
                                  <li><a href="elements-clients.html">clients</a></li>
                                  <li><a href="elements-columns-grids.html">columns grids</a></li>
                                  <li><a href="elements-counters.html">counters</a></li>
                                  <li><a href="elements-testimonial.html">Testimonial</a></li>
                                  <li><a href="elements-price-table.html">Price Table</a></li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Shop Pages</a>
                                <ul className="mega-menu-list">
                                  <li><a href="shop-2-columns.html">Shop 2 Columns</a></li>
                                  <li><a href="shop-3-columns.html">Shop 3 Columns</a></li>
                                  <li><a href="shop-4-columns.html">Shop 4 Columns</a></li>
                                  <li><a href="shop-cart.html">cart</a></li>
                                  <li><a href="shop-product-single.html">product single </a></li>
                                </ul>
                              </li>
                              <li>
                                <a href="#">Headers &amp; Footers</a>
                                <ul className="mega-menu-list">
                                  <li><a href="elements-header-1.html">Header Layout 1</a></li>
                                  <li><a href="elements-header-2.html">Header Layout 2</a></li>
                                  <li><a href="elements-header-3.html">Header Layout 3</a></li>
                                  <li><a href="elements-footer-light.html">Footer - Light</a></li>
                                  <li><a href="elements-footer-dark.html">Footer - Dark</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                      <div className="d-none d-xl-block pull-right model-link margin-top-15px">
                        <a id="cart-link" className="model-link margin-right-25px text-white opacity-hover-8" href="#">
                          <span>3</span><i className="fa fa-shopping-cart" />
                        </a>
                        <div className="cart-model">
                          <div className="media">
                            <a href="#">
                              <img className="d-flex align-self-start mr-3 width-50px" src="assets/img/cart-1.jpg" alt="Generic placeholder image" />
                            </a>
                            <div className="media-body">
                              <a href="#" className="close"><i className="fa fa-window-close" /></a>
                              <h5 className="mt-0"><a href="#">Cargo Transportation</a></h5>
                              <h6 className="mt-0 font-2">1 X 250$</h6>
                            </div>
                          </div>
                          <div className="media">
                            <a href="#">
                              <img className="d-flex align-self-start mr-3 width-50px" src="assets/img/cart-2.jpg" alt="Generic placeholder image" />
                            </a>
                            <div className="media-body">
                              <a href="#" className="close"><i className="fa fa-window-close" /></a>
                              <h5 className="mt-0"><a href="#">Air Freight</a></h5>
                              <h6 className="mt-0 font-2">1 X 250$</h6>
                            </div>
                          </div>
                          <div className="media">
                            <a href="#">
                              <img className="d-flex align-self-start mr-3 width-50px" src="assets/img/cart-3.jpg" alt="Generic placeholder image" />
                            </a>
                            <div className="media-body">
                              <a href="#" className="close"><i className="fa fa-window-close" /></a>
                              <h5 className="mt-0"><a href="#">Packaging &amp; Storage</a></h5>
                              <h6 className="mt-0 font-2">1 X 250$</h6>
                            </div>
                          </div>
                          <div className="padding-0px">
                            <div className="cart-total background-main-color padding-lr-30px padding-tb-10px text-white">
                              <div className="desc">Subtotal:</div>
                              <div className="price"><strong>$71.00</strong></div>
                              <div className="clearfix" />
                            </div>
                            <a href="#" className="btn btn-primary btn-lg btn-block">view cart</a>
                            <a href="#" className="btn btn-outline-primary btn-lg btn-block">Checkout</a>
                          </div>
                        </div>
                      </div>
                      <div className="d-none d-xl-block search-link pull-right model-link margin-top-15px">
                        <a id="search-header" className="model-link margin-right-0px text-white opacity-hover-8" href="#search">
                          <i className="fa fa-search" />
                        </a>
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
          <button type="button" className="close">×</button>
          <form className="clearfix d-block">
            <input type="search" defaultValue placeholder="Search for . . . ." />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
        {/* // Search  */}
        {/* Get A Quote  */}
        <div className="modal contact-modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content margin-top-150px background-main-color">
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <img src="assets/img/contact-img.jpg" alt="" />
                </div>
                <div className="col-lg-7">
                  <div className="padding-30px">
                    <h3 className="padding-bottom-15px">Get A Free Quote</h3>
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Full Name</label>
                          <input type="text" className="form-control" id="inputName4" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Email</label>
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                      </div>
                      <a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Get A Quote  */}
        <div id="rev_slider_3_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="nile-logistics-1" data-source="gallery" styles={{margin: '0px auto', background: 'transparent', padding: '0px', marginTop: '0px', marginBottom: '0px'}}>
          {/* START REVOLUTION SLIDER 5.4.8 fullwidth mode */}
          <div id="rev_slider_3_1" className="rev_slider fullwidthabanner" styles={{display: 'none'}} data-version="5.4.8">
            <ul>
              {/* SLIDE  */}
              <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                {/* MAIN IMAGE */}
                <img src="assets/rslider/assets/5ec5e-slider-1.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                {/* LAYERS */}
                {/* LAYER NR. 1 */}
                <div className="tp-caption   tp-resizeme" id="slide-3-layer-1" data-x="['left','left','left','center']" data-hoffset="['0','41','XMR36']" data-width={461} data-height={173} data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1140,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" styles={{zIndex: 5, minWidth: '461px', maxWidth: '173px', whiteSpace: 'nowrap', fontSize: '50px', lineHeight: '59px', fontWeight: 400, color: '#ffffff', letterSpacing: '-4px', fontFamily: 'Poppins'}}>Making<br /> Transportation
                  <br /> Fast &amp; Savw </div>
                {/* LAYER NR. 2 */}
               
                <div className="tp-caption rev-btn " 
                id="slide-3-layer-2" 
                data-x="['left','left','left','center']" 
                data-hoffset="['0','41','45','0']" 
                data-y="['top','top','top','top']" 
                data-voffset="['453','372','435','471']" 
                data-width="none" 
                data-height="none" 
                data-whitespace="nowrap" 
                data-type="button" 
                data-responsive_offset="on" 
                data-responsive="off" 
                data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" styles="z-index: 6; white-space: nowrap; font-size: 14px; line-height: 17px; font-weight: 500; color: rgba(255,255,255,1); letter-spacing: 0px;font-family:Poppins;background-color:rgb(229,57,53);border-color:rgb(229,57,53);border-style:solid;border-width:2px 2px 2px 2px;border-radius:30px 30px 30px 30px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;"

                >Contact Us </div>
              </li>
              {/* SLIDE  */}
              <li data-index="rs-4" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                {/* MAIN IMAGE */}
                <img src="assets/rslider/assets/c92f5-slider-2.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                {/* LAYERS */}
                {/* LAYER NR. 3 */}
                <div className="tp-caption   tp-resizeme" id="slide-4-layer-1" data-x="['left','left','left','center']" data-hoffset="['0','41','XMR36']" data-width={461} data-height={173} data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1140,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, minWidth: '461px', maxWidth: '173px', whiteSpace: 'nowrap', fontSize: '50px', lineHeight: '59px', fontWeight: 400, color: '#ffffff', letterSpacing: '-4px', fontFamily: 'Poppins'}}>Making<br /> Transportation
                  <br /> Fast &amp; Savw </div>
                {/* LAYER NR. 4 */}
                <div className="tp-caption rev-btn " 
                id="slide-4-layer-2" 
                data-x="['left','left','left','center']" 
                data-hoffset="['0','41','45','0']" 
                data-y="['top','top','top','top']" 
                data-voffset="['453','372','435','471']" 
                data-width="none" 
                data-height="none" 
                data-whitespace="nowrap" 
                data-type="button" 
                data-responsive_offset="on" 
                data-responsive="off" 
                data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]' data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[12,12,12,12]" data-paddingright="[35,35,35,35]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[35,35,35,35]" styles="z-index: 6; white-space: nowrap; font-size: 14px; line-height: 17px; font-weight: 500; color: rgba(255,255,255,1); letter-spacing: 0px;font-family:Poppins;background-color:rgb(229,57,53);border-color:rgb(229,57,53);border-style:solid;border-width:2px 2px 2px 2px;border-radius:30px 30px 30px 30px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;"
                >Contact Us </div>
              </li>
            </ul>
            <div className="tp-bannertimer tp-bottom" styles={{visibility: 'hidden !important'}} />
          </div>
        </div>
        {/* END REVOLUTION SLIDER */}
        <div className="service-section-1 container">
          <div className="row">
            <div className="col-md-4">
              <div className="service layout-1">
                <div className="clearfix">
                  <div className="icon"><img src="assets/icons/service-light-1.png" alt="" /></div>
                  <a href="#" className="title">Road Freight</a>
                </div>
                <div className="dis clearfix">
                  Chances are unless you are very lucky you will.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service layout-1">
                <div className="clearfix">
                  <div className="icon"><img src="assets/icons/service-light-2.png" alt="" /></div>
                  <a href="#" className="title">Air Freight</a>
                </div>
                <div className="dis clearfix">
                  Chances are unless you are very lucky you will.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service layout-1">
                <div className="clearfix">
                  <div className="icon"><img src="assets/icons/service-light-3.png" alt="" /></div>
                  <a href="#" className="title">Ocean Freight</a>
                </div>
                <div className="dis clearfix">
                  Chances are unless you are very lucky you will.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============= About Us =============*/}
        <div className="nile-about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title-right text-main-color clearfix">
                  <div className="icon"><img src="assets/icons/title-icon-1.png" alt="" /></div>
                  <h2 className="title-text">Who We Are ?</h2>
                </div>
                <div className="about-text margin-tb-25px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
                <a href="#" className="nile-bottom sm">Read More</a>
                <div id="accordion" className="nile-accordion margin-top-80px sm-mb-45px">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-block btn-link active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fa fa-info-circle" /> Why us ?</button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-truck" /> Explore our Facilities</button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-plane" /> Warehousing Solution</button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#"><img src="assets/img/cart-2.jpg" alt="" /></a>
                  </div>
                  <div className="col-sm-6">
                    <div className="cart-service background-main-color">
                      <div className="icon"><img src="assets/icons/service-light-2.png" alt="" /></div>
                      <h2>Air Freight</h2>
                      <hr />
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="cart-service background-main-color">
                      <div className="icon"><img src="assets/icons/service-light-3.png" alt="" /></div>
                      <h2>Air Freight</h2>
                      <hr />
                      <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <a href="#"><img src="assets/img/cart-1.jpg" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============= //About Us =============*/}
        <div className="call-action ba-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 padding-tb-15px">
                <h2>Unbeatable Trucking and Transport Services</h2>
                <div className="text">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 sm-mb-45px">
                    <a href="#" className="action-bottom layout-1">
                      <img src="assets/icons/small-icon-1.png" alt="" /> 
                      <h4>Tell Friend</h4>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4 sm-mb-45px">
                    <a href="#" className="action-bottom layout-1">
                      <img src="assets/icons/small-icon-2.png" alt="" /> 
                      <h4>Read More</h4>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <a href="#" className="action-bottom layout-1">
                      <img src="assets/icons/small-icon-3.png" alt="" /> 
                      <h4>
                          <Link href='../contact'>
                              Contact Us
                              </Link>
                          </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section padding-tb-100px section-ba-1">
          <div className="container">
            {/* Title */}
            <div className="section-title margin-bottom-40px">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="icon text-main-color"><i className="fa fa-truck" /></div>
                  <div className="h2">Our Service</div>
                  <div className="des">In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate ultrices augue, eget feugiat lectus efficitur in. Nulla non pharetra justo. Nunc viverra consectetur bibendum. </div>
                </div>
              </div>
            </div>
            {/* // End Title */}
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="service-icon-box">
                  <div className="icon"><img src="assets/icons/service-dark-1.png" alt="" /></div>
                  <a href="#" className="title h2">Cargo Transportation</a>
                  <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-icon-box">
                  <div className="icon"><img src="assets/icons/service-dark-2.png" alt="" /></div>
                  <a href="#" className="title h2">Air Freight</a>
                  <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-icon-box">
                  <div className="icon"><img src="assets/icons/service-dark-3.png" alt="" /></div>
                  <a href="#" className="title h2">Ocean Freight</a>
                  <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-icon-box">
                  <div className="icon"><img src="assets/icons/service-dark-4.png" alt="" /></div>
                  <a href="#" className="title h2">Packaging &amp; Storage</a>
                  <div className="des">Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem leo ultricies et vitae enim.</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="#" className="nile-bottom md">Show all <i className="fa fa-arrow-right" /> </a>
            </div>
          </div>
        </div>
        <div className="section padding-tb-100px section-ba-2">
          <div className="container">
            {/* Title */}
            <div className="section-title margin-bottom-40px">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="icon text-main-color"><i className="fa fa-money" /></div>
                  <div className="h2">Our Pricing</div>
                  <div className="des">In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate ultrices augue, eget feugiat lectus efficitur in. Nulla non pharetra justo. Nunc viverra consectetur bibendum. </div>
                </div>
              </div>
            </div>
            {/* // End Title */}
            <div className="row">
              {/* item */}
              <div className="col-lg-3 col-md-6">
                <div className="price-table">
                  <div className="title main-color">BASIC</div>
                  <div className="price"><span>$</span>199</div>
                  <div className="per-mile">PER MILE</div>
                  <ul className="elements">
                    <li>4000 kg load</li>
                    <li>425 kg / pallet </li>
                    <li>Warehousing</li>
                    <li>Free Packaging </li>
                    <li>24/7 support</li>
                  </ul>
                  <div className="padding-25px">
                    <a href="#" className="nile-bottom sm-block">ORDER NOW</a>
                  </div>
                </div>
              </div>
              {/* // end item */}
              {/* item */}
              <div className="col-lg-3 col-md-6">
                <div className="price-table">
                  <div className="title main-color">BASIC</div>
                  <div className="price"><span>$</span>213</div>
                  <div className="per-mile">PER MILE</div>
                  <ul className="elements">
                    <li>4000 kg load</li>
                    <li>425 kg / pallet </li>
                    <li>Warehousing</li>
                    <li>Free Packaging </li>
                    <li>24/7 support</li>
                  </ul>
                  <div className="padding-25px">
                    <a href="#" className="nile-bottom sm-block">ORDER NOW</a>
                  </div>
                </div>
              </div>
              {/* // end item */}
              {/* item */}
              <div className="col-lg-3 col-md-6">
                <div className="price-table active">
                  <div className="title main-color">BASIC</div>
                  <div className="price"><span>$</span>813</div>
                  <div className="per-mile">PER MILE</div>
                  <ul className="elements">
                    <li>4000 kg load</li>
                    <li>425 kg / pallet </li>
                    <li>Warehousing</li>
                    <li>Free Packaging </li>
                    <li>24/7 support</li>
                  </ul>
                  <div className="padding-25px">
                    <a href="#" className="nile-bottom sm-block">ORDER NOW</a>
                  </div>
                </div>
              </div>
              {/* // end item */}
              {/* item */}
              <div className="col-lg-3 col-md-6">
                <div className="price-table">
                  <div className="title main-color">BASIC</div>
                  <div className="price"><span>$</span>650</div>
                  <div className="per-mile">PER MILE</div>
                  <ul className="elements">
                    <li>4000 kg load</li>
                    <li>425 kg / pallet </li>
                    <li>Warehousing</li>
                    <li>Free Packaging </li>
                    <li>24/7 support</li>
                  </ul>
                  <div className="padding-25px">
                    <a href="#" className="nile-bottom sm-block">ORDER NOW</a>
                  </div>
                </div>
              </div>
              {/* // end item */}
            </div>
          </div>
        </div>
        <div className="section padding-tb-100px section-ba-3">
          <div className="container">
            {/* Title */}
            <div className="section-title margin-bottom-40px">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="icon text-main-color"><i className="fa fa-bookmark-o" /></div>
                  <div className="h2">Last News</div>
                  <div className="des">In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate ultrices augue, eget feugiat lectus efficitur in. Nulla non pharetra justo. Nunc viverra consectetur bibendum. </div>
                </div>
              </div>
            </div>
            {/* // End Title */}
            <div className="row">
              <div className="col-lg-4 col-md-6 sm-mb-35px">
                <div className="blog-item">
                  <div className="img">
                    <a href="#"><img src="assets/img/blog-grid-1.jpg" alt="" /></a>
                    <a href="#" className="date">
                      <span className="day">15</span>
                      <span className="month">April</span>
                    </a>
                  </div>
                  <a href="#" className="title">Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-35px">
                <div className="blog-item">
                  <div className="img">
                    <a href="#"><img src="assets/img/blog-grid-2.jpg" alt="" /></a>
                    <a href="#" className="date">
                      <span className="day">15</span>
                      <span className="month">April</span>
                    </a>
                  </div>
                  <a href="#" className="title">Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...</a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 sm-mb-35px">
                <div className="blog-item">
                  <div className="img">
                    <a href="#"><img src="assets/img/blog-grid-3.jpg" alt="" /></a>
                    <a href="#" className="date">
                      <span className="day">15</span>
                      <span className="month">April</span>
                    </a>
                  </div>
                  <a href="#" className="title">Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="layout-dark">
          <div className="container padding-tb-100px">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="about-us sm-mb-45px">
                  <div className="logo-footer margin-bottom-35px">
                    <a href="#"><img src="assets/img/logo-1.png" alt="" /></a>
                  </div>
                  <div className="text margin-bottom-35px">
                    Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </div>
                  <a href="#" className="nile-bottom sm">Read More</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="nile-widget widget_nav_menu sm-mb-45px">
                  <h2 className="title">Our Services</h2>
                  <ul className="footer-menu">
                    <li><a href="#">Cargo Transportation </a></li>
                    <li><a href="#">Air Freight </a></li>
                    <li><a href="#">Ocean Freight </a></li>
                    <li><a href="#">Packaging &amp; Storage </a></li>
                    <li><a href="#">Air Freight </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="nile-widget widget_nav_menu sm-mb-45px">
                  <h2 className="title">Site Pages</h2>
                  <ul className="footer-menu">
                    <li><a href="#">Cargo Transportation </a></li>
                    <li><a href="#">Air Freight </a></li>
                    <li><a href="#">Ocean Freight </a></li>
                    <li><a href="#">Packaging &amp; Storage </a></li>
                    <li><a href="#">Air Freight </a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="nile-widget">
                  <div className="margin-bottom-60px">
                    <h2 className="title">Location</h2>
                    <div className="contact-info opacity-9">
                      <div className="icon margin-top-5px"><span className="icon_pin_alt" /></div>
                      <div className="text">
                        <span className="title-in">Location :</span> <br />
                        <span className="font-weight-500 text-uppercase">US - Los Angeles</span>
                      </div>
                    </div>
                  </div>
                  <div className="call_center">
                    <h2 className="title">Call Center</h2>
                    <div className="contact-info opacity-9">
                      <div className="icon  margin-top-5px"><span className="icon_phone" /></div>
                      <div className="text">
                        <span className="title-in">Call Us :</span><br />
                        <span className="font-weight-500 text-uppercase">00222123333019</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <div className="container padding-tb-50px">
              <div className="row">
                <div className="col-lg-6">
                  <div className="copy-right-text text-lg-left text-center sm-mb-15px"><a target="_blank" href="https://www.templateshub.net">Templates Hub</a> </div>
                </div>
                <div className="col-lg-6">
                  {/*  Social */}
                  <ul className="social-media list-inline text-lg-right text-center margin-0px text-white">
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
        </footer>
     
       
<script src="assets/js/nile-slider.js"></script>
<script src="assets/js/jquery-3.2.1.min.js"></script>

<script src="assets/rslider/js/jquery.themepunch.tools.min.js"></script>
<script src="assets/rslider/js/jquery.themepunch.revolution.min.js"></script>

<script src="assets/rslider/js/extensions/revolution.extension.actions.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.carousel.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.kenburn.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.layeranimation.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.migration.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.navigation.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.parallax.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.slideanims.min.js"></script>
<script src="assets/rslider/js/extensions/revolution.extension.video.min.js"></script>
<script src="assets/js/YouTubePopUp.jquery.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/imagesloaded.min.js"></script>
<script src="assets/js/custom.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

</>
    )
}

export default Sample