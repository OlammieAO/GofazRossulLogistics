import Link from 'next/link'
import {useRouter} from 'next/router'
import GetQuotes from './PageComponents/getquotes'
import Footer from './Layout/footer'
import Header from './Layout/header'
import { FcShipped } from 'react-icons/fc'
import { GiCommercialAirplane } from 'react-icons/gi'
import { GiCargoShip } from 'react-icons/gi'
import { BiPackage } from 'react-icons/bi'
import TextTransition, { presets } from "react-text-transition";


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
            src="assets/rslider/assets/cargo4_rs.jpg"
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
            <h3>Air Cargo, Containers Shipping &amp; Package Delivery 
            <br /> Goods, Containers and Package Pickup
            <br /> made easy</h3>
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
           <Link href='../contact'>
        <a href="" className="nile-bottom md">
          Contact Us 
          <i className="fa fa-arrow-right" /> 
          </a>
              </Link>
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
            src="assets/rslider/assets/cargo1_rs.jpg"
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
            <h3>Goods, Containers, Packages Delivery
            <br /> Goods and items pickup at store, factory or company
            <br /> for delivery made easy</h3>
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
            <Link href='../contact'>
        <a href="" className="nile-bottom md">
          Contact Us 
          <i className="fa fa-arrow-right" /> 
          </a>
              </Link>
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
              Road Transportation
            </a>
          </div>
          <div className="dis clearfix">
            Goods/Items and Package local delivery services
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
           Air Cargo of goods and package delivery services.
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
           Container shipping with custom clearance services.
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
             {/* <img src="assets/icons/title-icon-1.png" alt />*/}
           {/* <GiCommercialAirplane color="darkgreen" size="55px" />*/}
             <img src="assets/img/gofaz-logo.jpg" alt="" />
            </div>
            <h2 className="title-text"></h2>
          </div>
          <div className="about-text margin-tb-25px">
          We are specialized in cargo, sea container shipping, package delivery and goods/items pickup at store, shopping mall, supermarket or factory in Dubai-U.A.E and send it down to the destination.
          </div>
          <a href="" className="nile-bottom sm">
            <Link href='../services'>
            Read More
            </Link>
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
                    <i className="fa fa-info-circle" /> Why <strong>Gofaz Rossul</strong>?
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
                  With over 9 years experience in Air Cargo, Sea Shipping and Package Delivery Logistics, we have the understanding and nook and crannies of the business and we understand how customers, importers or exporters feel when their goods, items, containers or package is in delivery process. We wear our customers shoe so we know how it feels. Speed delivery and minute-minute delivery processing are guaranteed. We have as well invested in technology in order to give you 24/7 delivery processing status on your goods, items, containers or package in our possssion. You can easily know the delivery processing status of your goods, items, containers or package by <strong><Link href='../track'><a href="" >TRACKING</a></Link></strong> it using the tracking code we must have given you.{" "}
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
                    <i className="fa fa-truck" /> How do I know the status of my goods in delivery process?
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
                  We understand how important your goods, items and package is and we realised how much you have hugely invested on it. We have invested in technology in order to communicate the processing status of our esteemed customers. You can <strong><Link href='../track'><a href="" >TRACK</a></Link></strong> the status of delivery process of your goods, items and package in our care and you can as well reach us on the phone numbers displayed on our website here.{" "}
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
                    <i className="fa fa-plane" /> Where do you offer goods and containers pickup services?
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
                  For now, we can pickup your goods, items, containers and package at companies, factories, stores and shopping mall in <strong>Dubai-U.A.E</strong> and <strong>Nigeria</strong> and we will process the exportation/transportation of the goods, items, containers or package to the destination of your choice. Just contact us and we will handle it for you infallibly.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-sm-6">
              <a href="#">
                <img src="assets/img/cargo_home.jpg" alt />
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
                  You want your goods, items or package to be speedily delivered? Talk to us.{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="cart-service background-main-color">
                <div className="icon">
                  <img src="assets/icons/service-light-3.png" alt />
                </div>
                <h2>Containers Shipping</h2>
                <hr />
                <div className="text">
                  Have you got large quantities of goods or assets in a 20ft/40ft containers? Logistics is our job.{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <a href="#">
                <img src="assets/img/sea_container.jpg" alt />
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
          <h2>Unbeatable Air Cargo, Sea Shipment and Package Delivery Services</h2>
          <div className="text">
          Sit back and relax while we handle your Air Cargo, Sea Shipment and Package Delivery services. You can focus on other aspect of your business while we do the logistics of getting your goods, items or package speedily deliver to you.
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 sm-mb-45px">
              <a href="#" className="action-bottom layout-1">
                <img src="assets/icons/small-icon-1.png" alt />
                <h4 className="h4small">Tell Friend</h4>
              </a>
            </div>
            <div className="col-lg-4 col-md-4 sm-mb-45px">
            <a data-toggle="modal" data-target=".bd-example-modal-lg" href="#" className="action-bottom layout-1">
                      <img src="assets/icons/small-icon-2.png" alt="" /> 
                      <h4 className="h4small">Write Us</h4>
                    </a>
            </div>
            <div className="col-lg-4 col-md-4">
            <Link href='../contact'>
                    <a href="" className="action-bottom layout-1">
                    <img src="assets/icons/small-icon-3.png" alt="" /> 
                      <h4 className="h4small">Contact Us</h4>
                    </a>
            </Link> 
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
            <div className="h2">Our Services</div>
            <div className="des">
            We are strictly into Logistics business, our years of experiences in this field set us free from the competition. We are strictly specialised in the following services :{" "}
            </div>
          </div>
        </div>
      </div>
      {/* // End Title */}
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              {/*<img src="assets/icons/service-dark-1.png" alt />*/}
              <FcShipped size="85px" />
            </div>
            <a href="#" className="title h2">
              Goods, Items and Transportation
            </a>
            <div className="des">
            Goods/Item pickup at stores, shopping mall, supermarket or factory here in Dubai-U.A.E and cargo/ship it down to the destination country.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
              {/*<img src="assets/icons/service-dark-2.png" alt />*/}
              <GiCommercialAirplane color="darkgreen" size="85px" />
            </div>
            <a href="#" className="title h2">
              Air Freight
            </a>
            <div className="des">
            We handle the custom clearance of your cargo goods/items when we handle the logistics and we try all we can to deliver your goods, you do not have to worry about the custom clearance. We definitely render an affordable services at any point in time.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
             {/* <img src="assets/icons/service-dark-3.png" alt />*/}
             <GiCargoShip color="darkgreen" size="85px" />
            </div>
            <a href="#" className="title h2">
              Ocean Freight
            </a>
            <div className="des">
            We handle the custom clearance of your goods/items when we handle your sea shipment, you do not have to worry about the custom clearance. We definitely render an affordable services at any point in time.
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-icon-box">
            <div className="icon">
             {/* <img src="assets/icons/service-dark-4.png" alt />*/}
             <BiPackage color="darkgreen" size="85px" />
            </div>
            <a href="#" className="title h2">
              Package Storage &amp; Delivery
            </a>
            <div className="des">
            You need to deliver a package somewhere but you are too busy to get that done as soon as possible? We got you covered at Gofaz Rossul, we can get your package deliver to the destination at any point in time.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link href='../contact'>
        <a href="" className="nile-bottom md">
          Contact Us <i className="fa fa-arrow-right" />{" "}
        </a>
        </Link>
      </div>
    </div>
  </div>
 
         <Footer />
       
        </>
    )
}

export default Home