import Link from 'next/link'
import React from "react";
import {useRouter} from 'next/router'
import { GiCommercialAirplane } from 'react-icons/gi'
import TextTransition, { presets } from "react-text-transition";

function Footer()
{
  const TEXTS = [
    "Gofaz",
    "Rossul",
    "Logistics"    
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
         <footer className="layout-dark">
        <div className="container padding-tb-100px">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="about-us sm-mb-45px">
                <div className="logo-footer margin-bottom-35px">
                  <a href="#">
                    {/*<img src="assets/img/logo-1.png" alt="" />*/}
                    {/*<GiCommercialAirplane color="white" size="55px" />*/}
                    <h2 styles="color:white"><strong>
                      {/*Gofaz Rossul*/}
                      <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                        className="footerLogoAnimatedText"
      />

                      </strong></h2>
                    </a>
                </div>
                <div className="text margin-bottom-35px">
                  Cargo, Shipping, Package Delivery, Picking up your goods or items at store, shopping mall, factory in Dubai-UAE and cargo it down to Nigeria and rendering the custom clearance services is our business. 
                </div>
                <Link href="/services">
                <a href="#" className="nile-bottom sm">Read More</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="nile-widget widget_nav_menu sm-mb-45px">
                <h2 className="title">Our Services</h2>
                <ul className="footer-menu">
                <Link href='/services'>
                 <li><a href="#">What we do</a></li>
                </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="nile-widget widget_nav_menu sm-mb-45px">
                <h2 className="title">Site Pages</h2>
                <ul className="footer-menu">
                
                 <Link href='../faq'>
                            <li><a href="">FAQ</a></li>
                 </Link>

                 <Link href='../track'>
                            <li><a href="">Track</a></li>
                 </Link>
               
                <Link href='../login'>
                            <li><a href="">Login</a></li>
                </Link>

                <Link href='../register'>
                            <li><a href="">Register</a></li>
                </Link> 

                <Link href='../about'>
                            <li><a href="">About Gofaz Rossul</a></li>
                </Link>

                <Link href='../contact'>
                            <li><a href="">Contact Gofaz Rossul</a></li>
                </Link> 

                <Link href='../privacypolicy'>
                            <li><a href="">Privacy Policy</a></li>
                </Link> 

                <Link href='../termofuse'>
                            <li><a href="">Terms Of Use</a></li>
                </Link> 

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
                      <span className="font-weight-500 text-uppercase">Deira, Dubai-U.A.E</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-weight-500 text-uppercase">Ikeja, Lagos-Nigeria</span>
                    </div>
                  </div>
                </div>
                <div className="call_center">
                  <h2 className="title">Call Center</h2>
                  <div className="contact-info opacity-9">
                    <div className="icon  margin-top-5px"><span className="icon_phone" /></div>
                    <div className="text">
                      <span className="title-in">Call Us :</span><br />
                      <span className="font-weight-500 text-uppercase">+971 55 972 2635</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-weight-500 text-uppercase">+971 56 184 5276</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-weight-500 text-uppercase">+234 905 221 0636</span>
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

      {/*<!-- jquery library  -->*/}
<script src="assets/js/nile-slider.js"></script>
<script src="assets/js/jquery-3.2.1.min.js"></script>

 {/*<!-- REVOLUTION JS FILES -->*/}
<script src="assets/rslider/js/jquery.themepunch.tools.min.js"></script>
<script src="assets/rslider/js/jquery.themepunch.revolution.min.js"></script>

 {/*<!-- SLIDER REVOLUTION 5.0 EXTENSIONS -->*/}
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

export default Footer