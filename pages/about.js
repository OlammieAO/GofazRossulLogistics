import Link from 'next/link'
import {useRouter} from 'next/router'
import { FcShipped } from 'react-icons/fc'
import { GiCommercialAirplane } from 'react-icons/gi'
import { GiCargoShip } from 'react-icons/gi'
import { BiPackage } from 'react-icons/bi'
import { GiWorld } from 'react-icons/gi'
import Footer from './Layout/footer'
import Header from './Layout/header'
import GetQuotes from './PageComponents/getquotes'

function About()
{
     return (
         <>         
         <Header />
         <div class="page-title">
        <div class="container">
            <div class="padding-tb-120px">
                <h1>About Gofaz Rossul</h1>
                <ol class="breadcrumb">
                    <li><a href="#">Home / </a></li>
                    <li class="active">About Us</li>
                </ol>
            </div>
        </div>
    </div>

    {/*============= About Us =============*/}
    <div className="nile-about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 sm-mb-45px">
                <div className="section-title-right text-main-color clearfix">
                  <div className="icon">
                    <img src="assets/img/gofaz-logo.jpg" alt="" />
                    </div>
                  <h2 className="title-text"></h2>
                </div>
                <div className="about-text margin-tb-25px">
                  <h4>9 years of experience in Logistics services</h4>
                  <strong>Gofaz Rossul</strong> is specialized in cargo, sea, package delivery and goods/items pickup at store, shopping mall, supermarket or factory in <strong>Dubai-U.A.E</strong> or <strong>Nigeria</strong> and export/transport it down to the destination of your choice. We handle freight, custom clearance and door-to-door delivery of your goods/items. We have partners in logistics business across Asia continent especially in China. We can get a sample item and deliver it to factory on our customers behalf for production. <br/><br/>

                  Customers satisfaction and assurance of safe delivery is our business traits as we know that we make money only when you make money. We are available to be reached across different channels of communication as we handle your cargo, sea or package delivery service. You can as well track your package in order to know the status of our logistics processing on your cargo, sea shipment or package delivery.
                </div>

                <Link href='/contact'>
                <a href="" className="nile-bottom sm">Reach Us</a>
                </Link>
              </div>
              <div className="col-lg-6">
                <img src="assets/img/about-cargo2.jpg" width="650px" height="320px" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*============= //About Us =============*/}
        <div className="call-action ba-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 padding-tb-15px">
                <h2>Unbeatable Air Cargo, Sea Shipment and Package Delivery Services</h2>
                <div className="text">Sit back and relax while we handle your Air Cargo, Sea Shipment and Package Delivery services. You can focus on other aspect of your business while we do the logistics of getting your goods, items or package speedily deliver to you.</div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4 sm-mb-45px">
                    <a href="#" className="action-bottom layout-1">
                      <img src="assets/icons/small-icon-1.png" alt="" /> 
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
        <div className="nile-about-section">
          <div className="container">
            {/* Title */}
            <div className="section-title margin-bottom-40px">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="icon text-main-color"></div>
                  <div className="h2">Our Services</div>
                  <div className="des">We are strictly into Logistics business, our years of experiences in this field set us free from the competition. We are strictly specialised in the following services :  </div>
                </div>
              </div>
            </div>
            {/* // End Title */}
            <div className="row">
              <div className="col-lg-4">
                <div className="service-icon-box">
                  <div className="icon">
                   {/* <img src="assets/icons/service-dark-1.png" alt="" />*/}
                   <FcShipped size="85px" />
                    </div>
                  <a href="#" className="title h2">Goods/Item Pickup</a>
                  <div className="des">Goods/Item pickup at stores, shopping mall, supermarket or factory here in Dubai-U.A.E and cargo/ship it down to the destination country.</div>
                </div>
                <div className="service-icon-box">
                  <div className="icon">
                    <GiCommercialAirplane color="darkgreen" size="85px" />
                    </div>
                  <a href="#" className="title h2">Air Freight</a>
                  <div className="des">We handle the custom clearance of your goods/items when we handle the logistics, you do not have to worry about the custom clearance. We definitely render an affordable services at any point in time.</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center sm-mb-45px">
                  <img src="assets/img/about-img.png" alt="" className="border-radius-500" />
                  {/*<GiWorld color="darkgreen" size="170px" />*/}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-icon-box">
                  <div className="icon">
                   <GiCargoShip color="darkgreen" size="85px" />
                    </div>
                  <a href="#" className="title h2">Ocean Freight</a>
                  <div className="des">We handle the custom clearance of your goods/items when we handle your sea shipment, you do not have to worry about the custom clearance. We definitely render an affordable services at any point in time.</div>
                </div>
                <div className="service-icon-box">
                  <div className="icon">
                    <BiPackage color="darkgreen" size="85px" />
                  </div>
                  <a href="#" className="title h2">Packaging Storage &amp; Delivery</a>
                  <div className="des">You need to deliver a package somewhere but you are too busy to get that done as soon as possible? We got you covered at Gofaz Rossul, we can get your package deliver to the destination at any point in time.</div>
                </div>
              </div>
            </div>
            <div className="text-center margin-top-35px">
                <Link href='/contact'>
        <a href="" className="nile-bottom md">Contact Us <i className="fa fa-arrow-right" /> </a>
              </Link>
            </div>
          </div>
        </div>
         <Footer />
         </>
     )
}

export default About