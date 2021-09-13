import Link from 'next/link'
import React from "react";
import {useRouter} from 'next/router'
import Footer from './Layout/footer'
import Header from './Layout/header'
import { FcShipped } from 'react-icons/fc'
import { GiCommercialAirplane } from 'react-icons/gi'
import { GiCargoShip } from 'react-icons/gi'
import { BiPackage } from 'react-icons/bi'
import TextTransition, { presets } from "react-text-transition";

import GetQuotes from './PageComponents/getquotes'

function Services()
{
  const TEXTS = [
    "Cargo Freight Forwarding",
    "Sea Container Shipping",
    "Goods/Items Pickup",
    "Package Delivery",    
    "Dubai-U.A.E Visa Procurement" 
  ];

  const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        3000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
  <Header />
         <div class="page-title">
        <div class="container">
            <div class="padding-tb-120px">
                <h1>Our Services</h1>
                <ol class="breadcrumb">
                    <li><a href="#">Home / </a></li>
                    <li class="active">What we do</li>
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
                    {/*<img src="assets/icons/title-icon-1.png" alt="" />*/}
                    <GiCommercialAirplane color="darkgreen" size="55px" />
                    </div>
                  <h2 className="title-text">What we do? </h2>   
                </div>
                <div className="about-text margin-tb-25px">
                  <h4><TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
      /></h4>
                  Gofaz Rossul is specialized in cargo, sea container shipping, package delivery and goods/items pickup at store, shopping mall, supermarket or factory in Dubai-U.A.E and send it down to the destination. We handle freight, custom clearance and door-to-door delivery of your goods/items. We have partners in logistics business across Asia continent especially in China. We can get a sample item and deliver it to factory on our customers behalf for production. <br/><br/>

                  Customers satisfaction and assurance of safe delivery is our business traits as we know that we make money only when you make money. We are available to be reached across different channels of communication as we handle your cargo, sea or package delivery service. You can as well track your package in order to know the status of our logistics processing on your cargo, sea shipment or package delivery.
                </div>

                <Link href='/contact'>
                <a href="#" className="nile-bottom sm">Reach Us</a>
                </Link>
              </div>
              <div className="col-lg-6">
                <img src="assets/img/about-cargo.png" width="650px" height="320px" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*============= //About Us =============*/}

        <div className="nile-about-section">
          <div className="container">
            {/* Title */}
            <div className="section-title margin-bottom-40px">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="icon text-main-color"><i className="fa fa-truck" /></div>
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
                  <div className="des">We handle the custom clearance of your cargo goods/items when we handle the logistics and we try all we can to deliver your goods, you do not have to worry about the custom clearance. We definitely render an affordable services at any point in time.</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center sm-mb-45px">
                  <img src="assets/img/about-img.png" alt="" className="border-radius-500" />
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
                  <a href="#" className="title h2">Package Storage &amp; Delivery</a>
                  <div className="des">You need to deliver a package somewhere but you are too busy to get that done as soon as possible? We got you covered at Gofaz Rossul, we can get your package deliver to the destination at any point in time.</div>
                </div>
              </div>
            </div>
            <div className="text-center margin-top-35px">
                <Link href='../contact'>
        <a href="" className="nile-bottom md">
          Contact Us 
          <i className="fa fa-arrow-right" /> 
          </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />

        </>
    )
}

export default Services