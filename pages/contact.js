import Link from 'next/link'
import {useRouter} from 'next/router'
import Footer from './Layout/footer'
import Header from './Layout/header'
import ReachUsComponent from './PageComponents/reachuscomponent'


function Contact()
{
    return (
                  
        <>
        <Header />        
        <div className="page-title">
        <div className="container">
            <div className="padding-tb-120px">
                <h1>Reach Us</h1>
                <ol className="breadcrumb">
                    <li><a href="#">Home / </a></li>
                    <li className="active">Contact Us</li>
                </ol>
            </div>
        </div>
    </div>

    <div>
        <div className="padding-tb-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 sm-mb-45px">
                <p> At Gofaz Rossul, we understand how curious our customers can be when they give their cargo, shipping, package delivery and goods/item pickup business to us; we have made communication easier by providing an easy 24/7 communication channel for our customers to reach us at any point in time.</p>
                
                <h5>Phone :</h5>
                <span className="d-block"><i className="fa fa-phone text-main-color margin-right-10px" aria-hidden="true" /><strong>Dubai - U.A.E :</strong> +971 55 972 2635</span>

                <span className="d-block"><i className="fa fa-phone text-main-color margin-right-10px" aria-hidden="true" /><strong>Dubai - U.A.E :</strong> +971 56 184 5276</span>

                <span className="d-block sm-mb-30px"><i className="fa fa-mobile text-main-color margin-right-10px" aria-hidden="true" /><strong>Ikeja, Lagos - Nigeria :</strong> +234 905 221 0636</span>
               
                <h5 className="margin-top-20px">Address :</h5>
                <span className="d-block sm-mb-30px"><i className="fa fa-map text-main-color margin-right-10px" aria-hidden="true" /> Deira, Dubai - U.A.E </span>

                <span className="d-block sm-mb-30px"><i className="fa fa-map text-main-color margin-right-10px" aria-hidden="true" /> Ikeja, Lagos - Nigeria </span>

                <h5 className="margin-top-20px">Email :</h5>
                <span className="d-block sm-mb-30px"><i className="fa fa-envelope-open text-main-color margin-right-10px" aria-hidden="true" /> enquiry@gofazrossul.com </span>
              </div>
              <div className="col-lg-6">
                <div className="contact-modal">
                  <div className="background-main-color">
                    <div className="padding-30px">
                      <h3 className="padding-bottom-15px"><u>24/7 Online Availability To Serve You... Tell Us</u></h3>
                     <ReachUsComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map-layout">
          <div className="map-embed">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.70667420086!2d55.29058378069607!3d25.26909963826963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sng!4v1631272804078!5m2!1sen!2sng" width="100%" height={390} frameBorder={0} style={{border: 0}} allowFullScreen />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8" />
              <div className="col-lg-4">
                <div className="padding-tb-50px padding-lr-30px background-main-color pull-top-309px">
                  <div className="contact-info-map">
                    <div className="margin-bottom-30px">
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
                    <hr />
                    <div className="call_center margin-top-30px">
                      <h2 className="title">Call Center</h2>
                      <div className="contact-info opacity-9">
                        <div className="icon  margin-top-5px"><span className="icon_phone" /></div>
                        <div className="text">
                          <span className="title-in">Call Us :</span><br />
                          <span className="font-weight-500 text-uppercase"><strong>Dubai:</strong> +971 55 972 2635</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="font-weight-500 text-uppercase"><strong>Dubai:</strong> +971 56 184 5276</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="font-weight-500 text-uppercase"><strong>Lagos:</strong> +234 905 221 0636</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer />
       </>
          
    )
}

export default Contact