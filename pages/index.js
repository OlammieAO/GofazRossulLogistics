import Link from 'next/link'
import {useRouter} from 'next/router'
import GetQuotes from './PageComponents/getquotes'
import Footer from './Layout/footer'
import Header from './Layout/header'


function Home(){

   
    return(
        <>
         <Header />

         <div
    id="rev_slider_3_1_wrapper"
    className="rev_slider_wrapper fullwidthbanner-container"
    data-alias="nile-logistics-1"
    data-source="gallery"
    styles={{
      margin: "0px auto",
      background: "transparent",
      padding: 0,
      marginTop: 0,
      marginBottom: 0
    }}
  >
    {/* START REVOLUTION SLIDER 5.4.8 fullwidth mode */}
    <div
      id="rev_slider_3_1"
      className="rev_slider fullwidthabanner"
      styles={{ display: "none" }}
      data-version="5.4.8"
    >
      <ul>
        {/* SLIDE  */}
        <li
          data-index="rs-3"
          data-transition="fade"
          data-slotamount="default"
          data-hideafterloop={0}
          data-hideslideonmobile="off"
          data-easein="default"
          data-easeout="default"
          data-masterspeed={300}
          data-rotate={0}
          data-saveperformance="off"
          data-title="Slide"
          data-param1=""
          data-param2=""
          data-param3=""
          data-param4=""
          data-param5=""
          data-param6=""
          data-param7=""
          data-param8=""
          data-param9=""
          data-param10=""
          data-description
        >
          {/* MAIN IMAGE */}
          <img
            src="assets/rslider/assets/cargo2_rs.jpg"
            alt=""
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            className="rev-slidebg"
            data-no-retina
          />
          {/* LAYERS */}
          {/* LAYER NR. 1 */}
          <div
            className="tp-caption   tp-resizeme"
            id="slide-3-layer-1"
            data-x="['left','left','left','center']"
            data-hoffset="['0','41','45','0']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['-111','-143','-186','-36']"
            data-width={461}
            data-height={173}
            data-whitespace="nowrap"
            data-type="text"
            data-responsive_offset="on"
            data-frames='[{"delay":10,"speed":1140,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
            data-textalign="['inherit','inherit','inherit','center']"
            data-paddingtop="[0,0,0,0]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            styles={{
              zIndex: 5,
              minWidth: 461,
              maxWidth: 173,
              whiteSpace: "nowrap",
              fontSize: 50,
              lineHeight: 59,
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "-4px",
              fontFamily: "Poppins"
            }}
          >
            Cargo, Sea Shipping &amp; Package 
            <br /> Transportation
            <br /> made easy
          </div>
          {/* LAYER NR. 2 */}
          <div
            className="tp-caption rev-btn "
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
            data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]'
            data-textalign="['inherit','inherit','inherit','inherit']"
            data-paddingtop="[12,12,12,12]"
            data-paddingright="[35,35,35,35]"
            data-paddingbottom="[12,12,12,12]"
            data-paddingleft="[35,35,35,35]"
            styles={{
              zIndex: 6,
              whiteSpace: "nowrap",
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 500,
              color: "rgba(255,255,255,1)",
              letterSpacing: 0,
              fontFamily: "Poppins",
              backgroundColor: "rgb(229,57,53)",
              borderColor: "rgb(229,57,53)",
              borderStyle: "solid",
              borderWidth: "2px 2px 2px 2px",
              borderRadius: "30px 30px 30px 30px",
              outline: "none",
              boxShadow: "none",
              boxSizing: "border-box",
              MozBoxSizing: "border-box",
              WebkitBoxSizing: "border-box",
              cursor: "pointer"
            }}
          >
            Contact Us{" "}
          </div>
        </li>
        {/* SLIDE  */}
        <li
          data-index="rs-4"
          data-transition="fade"
          data-slotamount="default"
          data-hideafterloop={0}
          data-hideslideonmobile="off"
          data-easein="default"
          data-easeout="default"
          data-masterspeed={300}
          data-rotate={0}
          data-saveperformance="off"
          data-title="Slide"
          data-param1=""
          data-param2=""
          data-param3=""
          data-param4=""
          data-param5=""
          data-param6=""
          data-param7=""
          data-param8=""
          data-param9=""
          data-param10=""
          data-description=""
        >
          {/* MAIN IMAGE */}
          <img
            src="assets/rslider/assets/cargo4_rs.jpg"
            alt=""
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            className="rev-slidebg"
            data-no-retina
          />
          {/* LAYERS */}
          {/* LAYER NR. 3 */}
          <div
            className="tp-caption   tp-resizeme"
            id="slide-4-layer-1"
            data-x="['left','left','left','center']"
            data-hoffset="['0','41','45','0']"
            data-y="['middle','middle','middle','middle']"
            data-voffset="['-111','-143','-186','-36']"
            data-width={461}
            data-height={173}
            data-whitespace="nowrap"
            data-type="text"
            data-responsive_offset="on"
            data-frames='[{"delay":10,"speed":1140,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
            data-textalign="['inherit','inherit','inherit','center']"
            data-paddingtop="[0,0,0,0]"
            data-paddingright="[0,0,0,0]"
            data-paddingbottom="[0,0,0,0]"
            data-paddingleft="[0,0,0,0]"
            styles={{
              zIndex: 5,
              minWidth: 461,
              maxWidth: 173,
              whiteSpace: "nowrap",
              fontSize: 50,
              lineHeight: 59,
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "-4px",
              fontFamily: "Poppins"
            }}
          >
            Goods and items, Packages
            <br /> items pickup at store or factory
            <br /> delivery made easy
          </div>
          {/* LAYER NR. 4 */}
          <div
            className="tp-caption rev-btn "
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
            data-frames='[{"delay":640,"speed":1120,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:transparent;bc:rgb(255,255,255);"}]'
            data-textalign="['inherit','inherit','inherit','inherit']"
            data-paddingtop="[12,12,12,12]"
            data-paddingright="[35,35,35,35]"
            data-paddingbottom="[12,12,12,12]"
            data-paddingleft="[35,35,35,35]"
            styles={{
              zIndex: 6,
              whiteSpace: "nowrap",
              fontSize: 14,
              lineHeight: 17,
              fontWeight: 500,
              color: "rgba(255,255,255,1)",
              letterSpacing: 0,
              fontFamily: "Poppins",
              backgroundColor: "rgb(229,57,53)",
              borderColor: "rgb(229,57,53)",
              borderStyle: "solid",
              borderWidth: "2px 2px 2px 2px",
              borderRadius: "30px 30px 30px 30px",
              outline: "none",
              boxShadow: "none",
              boxSizing: "border-box",
              MozBoxSizing: "border-box",
              WebkitBoxSizing: "border-box",
              cursor: "pointer"
            }}
          >
            Contact Us{" "}
          </div>
        </li>
      </ul>
      <div
        className="tp-bannertimer tp-bottom"
        styles={{ visibility: "hidden !important" }}
      />
    </div>
  </div>
  {/* END REVOLUTION SLIDER */}
  <div className="service-section-1 container">
    <div className="row">
      <div className="col-md-4">
        <div className="service layout-1">
          <div className="clearfix">
            <div className="icon">
              <img src="assets/icons/service-light-1.png" alt />
            </div>
            <a href="#" className="title">
              Road Freight
            </a>
          </div>
          <div className="dis clearfix">
            Chances are unless you are very lucky you will.
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service layout-1">
          <div className="clearfix">
            <div className="icon">
              <img src="assets/icons/service-light-2.png" alt />
            </div>
            <a href="#" className="title">
              Air Freight
            </a>
          </div>
          <div className="dis clearfix">
            Chances are unless you are very lucky you will.
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service layout-1">
          <div className="clearfix">
            <div className="icon">
              <img src="assets/icons/service-light-3.png" alt />
            </div>
            <a href="#" className="title">
              Ocean Freight
            </a>
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
            <div className="icon">
              <img src="assets/icons/title-icon-1.png" alt />
            </div>
            <h2 className="title-text">Who We Are ?</h2>
          </div>
          <div className="about-text margin-tb-25px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </div>
          <a href="#" className="nile-bottom sm">
            Read More
          </a>
          <div
            id="accordion"
            className="nile-accordion margin-top-80px sm-mb-45px"
          >
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-block btn-link active"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="fa fa-info-circle" /> Why us ?
                  </button>
                </h5>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-block btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="fa fa-truck" /> Explore our Facilities
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-block btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="fa fa-plane" /> Warehousing Solution
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-sm-6">
              <a href="#">
                <img src="assets/img/cart-2.jpg" alt />
              </a>
            </div>
            <div className="col-sm-6">
              <div className="cart-service background-main-color">
                <div className="icon">
                  <img src="assets/icons/service-light-2.png" alt />
                </div>
                <h2>Air Freight</h2>
                <hr />
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cart-service background-main-color">
                <div className="icon">
                  <img src="assets/icons/service-light-3.png" alt />
                </div>
                <h2>Air Freight</h2>
                <hr />
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <a href="#">
                <img src="assets/img/cart-1.jpg" alt />
              </a>
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
          <div className="text">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 sm-mb-45px">
              <a href="#" className="action-bottom layout-1">
                <img src="assets/icons/small-icon-1.png" alt />
                <h4>Tell Friend</h4>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 sm-mb-45px">
              <a href="#" className="action-bottom layout-1">
                <img src="assets/icons/small-icon-2.png" alt />
                <h4>Read More</h4>
              </a>
            </div>
            <div className="col-lg-4 col-md-4">
              <a href="#" className="action-bottom layout-1">
                <img src="assets/icons/small-icon-3.png" alt />
                <h4>Contact Us</h4>
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
            <div className="icon text-main-color">
              <i className="fa fa-truck" />
            </div>
            <div className="h2">Our Service</div>
            <div className="des">
              In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate
              ultrices augue, eget feugiat lectus efficitur in. Nulla non
              pharetra justo. Nunc viverra consectetur bibendum.{" "}
            </div>
          </div>
        </div>
      </div>
      {/* // End Title */}
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              <img src="assets/icons/service-dark-1.png" alt />
            </div>
            <a href="#" className="title h2">
              Cargo Transportation
            </a>
            <div className="des">
              Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem
              leo ultricies et vitae enim.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              <img src="assets/icons/service-dark-2.png" alt />
            </div>
            <a href="#" className="title h2">
              Air Freight
            </a>
            <div className="des">
              Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem
              leo ultricies et vitae enim.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              <img src="assets/icons/service-dark-3.png" alt />
            </div>
            <a href="#" className="title h2">
              Ocean Freight
            </a>
            <div className="des">
              Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem
              leo ultricies et vitae enim.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              <img src="assets/icons/service-dark-4.png" alt />
            </div>
            <a href="#" className="title h2">
              Packaging &amp; Storage
            </a>
            <div className="des">
              Ut elit tellus, luctus nec magna mattis et, pulvinar dapibus lorem
              leo ultricies et vitae enim.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a href="#" className="nile-bottom md">
          Show all <i className="fa fa-arrow-right" />{" "}
        </a>
      </div>
    </div>
  </div>
  <div className="section padding-tb-100px section-ba-2">
    <div className="container">
      {/* Title */}
      <div className="section-title margin-bottom-40px">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="icon text-main-color">
              <i className="fa fa-money" />
            </div>
            <div className="h2">Our Pricing</div>
            <div className="des">
              In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate
              ultrices augue, eget feugiat lectus efficitur in. Nulla non
              pharetra justo. Nunc viverra consectetur bibendum.{" "}
            </div>
          </div>
        </div>
      </div>
      {/* // End Title */}
      <div className="row">
        {/* item */}
        <div className="col-lg-3 col-md-6">
          <div className="price-table">
            <div className="title main-color">BASIC</div>
            <div className="price">
              <span>$</span>199
            </div>
            <div className="per-mile">PER MILE</div>
            <ul className="elements">
              <li>4000 kg load</li>
              <li>425 kg / pallet </li>
              <li>Warehousing</li>
              <li>Free Packaging </li>
              <li>24/7 support</li>
            </ul>
            <div className="padding-25px">
              <a href="#" className="nile-bottom sm-block">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
        {/* // end item */}
        {/* item */}
        <div className="col-lg-3 col-md-6">
          <div className="price-table">
            <div className="title main-color">BASIC</div>
            <div className="price">
              <span>$</span>213
            </div>
            <div className="per-mile">PER MILE</div>
            <ul className="elements">
              <li>4000 kg load</li>
              <li>425 kg / pallet </li>
              <li>Warehousing</li>
              <li>Free Packaging </li>
              <li>24/7 support</li>
            </ul>
            <div className="padding-25px">
              <a href="#" className="nile-bottom sm-block">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
        {/* // end item */}
        {/* item */}
        <div className="col-lg-3 col-md-6">
          <div className="price-table active">
            <div className="title main-color">BASIC</div>
            <div className="price">
              <span>$</span>813
            </div>
            <div className="per-mile">PER MILE</div>
            <ul className="elements">
              <li>4000 kg load</li>
              <li>425 kg / pallet </li>
              <li>Warehousing</li>
              <li>Free Packaging </li>
              <li>24/7 support</li>
            </ul>
            <div className="padding-25px">
              <a href="#" className="nile-bottom sm-block">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
        {/* // end item */}
        {/* item */}
        <div className="col-lg-3 col-md-6">
          <div className="price-table">
            <div className="title main-color">BASIC</div>
            <div className="price">
              <span>$</span>650
            </div>
            <div className="per-mile">PER MILE</div>
            <ul className="elements">
              <li>4000 kg load</li>
              <li>425 kg / pallet </li>
              <li>Warehousing</li>
              <li>Free Packaging </li>
              <li>24/7 support</li>
            </ul>
            <div className="padding-25px">
              <a href="#" className="nile-bottom sm-block">
                ORDER NOW
              </a>
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
            <div className="icon text-main-color">
              <i className="fa fa-bookmark-o" />
            </div>
            <div className="h2">Last News</div>
            <div className="des">
              In quis luctus dolor. Sed ac libero arcu. Phasellus vulputate
              ultrices augue, eget feugiat lectus efficitur in. Nulla non
              pharetra justo. Nunc viverra consectetur bibendum.{" "}
            </div>
          </div>
        </div>
      </div>
      {/* // End Title */}
      <div className="row">
        <div className="col-lg-4 col-md-6 sm-mb-35px">
          <div className="blog-item">
            <div className="img">
              <a href="#">
                <img src="assets/img/blog-grid-1.jpg" alt />
              </a>
              <a href="#" className="date">
                <span className="day">15</span>
                <span className="month">April</span>
              </a>
            </div>
            <a href="#" className="title">
              Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 sm-mb-35px">
          <div className="blog-item">
            <div className="img">
              <a href="#">
                <img src="assets/img/blog-grid-2.jpg" alt />
              </a>
              <a href="#" className="date">
                <span className="day">15</span>
                <span className="month">April</span>
              </a>
            </div>
            <a href="#" className="title">
              Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 sm-mb-35px">
          <div className="blog-item">
            <div className="img">
              <a href="#">
                <img src="assets/img/blog-grid-3.jpg" alt />
              </a>
              <a href="#" className="date">
                <span className="day">15</span>
                <span className="month">April</span>
              </a>
            </div>
            <a href="#" className="title">
              Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

         <Footer />
       
        </>
    )
}

export default Home