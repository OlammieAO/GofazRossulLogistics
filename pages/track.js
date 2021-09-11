import Link from 'next/link'
import {useRouter} from 'next/router'
import Footer from './Layout/footer'
import Header from './Layout/header'
import TrackingComponent from './PageComponents/trackingcomponent'

function Track()
{
   return (
       <>
        <Header />        
        <div className="page-title">
        <div className="container">
            <div className="padding-tb-120px">
                <h1>Your Goods, Items or Package delivery status</h1>
                <ol className="breadcrumb">
                    <li><a href="#">Home / </a></li>
                    <li className="active">Track </li>
                </ol>
            </div>
        </div>
    </div>

    <div>
        <div className="padding-tb-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 sm-mb-45px">

              <div className="col-lg-12">
        <div className="card2 card border-0 px-4 py-5">
          <div className="row mb-4 px-3">
          
           
          
           
          </div>
         
         
        <TrackingComponent />
         
        </div>
      </div>
              
              </div>
              
            </div>
          </div>
        </div>
        <div className="map-layout">
          <div className="map-embed">
          
          </div>
          <div className="container">
            <div className="row">             
              
            </div>
          </div>
        </div>
      </div>
       <Footer />

       </>
   )
}

export default Track