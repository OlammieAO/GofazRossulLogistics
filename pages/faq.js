import Link from 'next/link'
import {useRouter} from 'next/router'
import Footer from './Layout/footer'
import Header from './Layout/header'
import FAQComponent from './PageComponents/faqcomponent'

function FAQ()
{
    return (
        <>
         <Header />        
         <div class="page-title">
		<div class="container">
			<div class="padding-tb-120px">
				<h1>Frequently Asked QuestionS</h1>
				<ol class="breadcrumb">
					<li><a href="#">Home / </a></li>
					<li class="active">FAQs</li>
				</ol>
			</div>
		</div>
	</div>

    <div className="padding-tb-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div id="accordion" className="nile-accordion sm-mb-45px">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-block btn-link active" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fa fa-info-circle" /> Why Gofaz Rossul ?</button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      With over 9years of experience in Freight Forwarding, Container Shipment and Package Delivery services, we have acquired experiences in this field and this makes us to render infallible services to our esteemed customers. We as well invest in technology by providing cargo consignments, sea container shipment and package delivery tracking services to our customers so that they can be rest assured of on-going process on their consignment/container and package to be delivered. </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i className="fa fa-truck" /> How does store, factory, shopping mall or supermarket goods/items pickup works? </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                    We do store, factory, shopping mall or supermarket goods/items pickup from Dubai-U.A.E and packaged the goods/items using our Logistics years of experience and send to the destination. Many of our customers have enjoyed this service due to the benefits they derive from this. This service has lots of benefits e.g cutting down of cost ranging from airline travel fee, hotel lodging, transport fare and some miscellaneous expenses when you travel all the way from your country to make purchases of goods/items here in <strong>Dubai-U.A.E.</strong> <br/><br/>
                    <strong>
                        <Link href='/contact'>
                            <a href='#' styles="text-color:green">Talk to us today</a>
                        </Link>
                        </strong> and permit us to render you our infallible services. </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i className="fa fa-plane" /> How do I send Cargo Freight or Sea shipment(20ft/40ft Container)?</button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      We render the services of Cargo Freight Forwarding and Custom Clearance, Sea Container Shipping and Custom Clearance. We make custom clearance for your cargo and sea shipment easier than you can ever thought. We as well invest in technology by providing cargo consignments, sea container shipment and package delivery tracking services to our customers so that they can be rest assured of on-going process on their consignment/container and package to be delivered. </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="heading4">
                    <h5 className="mb-0">
                      <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4"><i className="fa fa-bus" /> I have a package to be delivered, do you do the errand service? </button>
                    </h5>
                  </div>
                  <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                    <div className="card-body">
                      Yes, we provide errand or package delivery services. If you have a package to be delivered in <strong>Dubai-U.A.E</strong> or <strong>Nigeria</strong>, we can do the delivery for you at an affordable fee. We as well invest in technology by providing cargo consignments, sea container shipment and package delivery tracking services to our customers so that they can be rest assured of on-going process on their consignment/container and package to be delivered.</div>

                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-block btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><i className="fa fa-plane" /> I want to travel to <strong>Dubai-U.A.E </strong> for business, can you process a travel document for me?</button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                      If you are a business person that purchase goods/items from overseas especially Dubai, U.A.E and you need a visa procurement, we can process a business visa for your temporary stay to purchase your goods/items. To know more about our visa procurement processing, you can give us a call only on the DUbai-U.A.E phone number made available on our website for more details or 
                      <Link href='../contact'>
                        <a href="">
                      send us
                      </a>
                      </Link> 
                      mail and we will reply you immediately. </div>
                  </div>
                </div>
              </div>
            </div>
        
          
          </div> {/* // row */}
        </div>{/* // container */}

      </div>
     
         <Footer />
        </>
    )
}

export default FAQ