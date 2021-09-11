import Link from 'next/link'
import {useRouter} from 'next/router'
import { providers, signIn } from 'next-auth/client'
import Footer from './Layout/footer'
import Header from './Layout/header'
import LoginComponent from './PageComponents/logincomponent'

function Login({ providers })
{
   return (
       <>
        <Header />        
        <div className="page-title">
        <div className="container">
            <div className="padding-tb-120px">
                <h1>Login To Customer Portal</h1>
                <ol className="breadcrumb">
                    <li><a href="#">Home / </a></li>
                    <li className="active">Login </li>
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
            <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>

            <div className="google text-center mr-3">
               <div className="fa fa-google" />
          </div>

          <div className="facebookk text-center mr-3">
              <div className="fa fa-facebook" />
          </div>

          <div className="twitter text-center mr-3">
               <div className="fa fa-twitter" />
          </div>

          <div className="instagram text-center mr-3">
            <div className="fa fa-instagram" />
          </div>
          
            {
            providers.name == "Instagram" ? 
            <InstagramIcon /> : 
            ""
            }
                       
          </div>
          <div className="row px-3 mb-4">
            <div className="line" /> <small className="or text-center">Or login with your email and password if you have created an account with us</small>
            <div className="line" />
          </div>
         
        <LoginComponent />
          <div className="row mb-4 px-3"> 
          <h5 className="font-weight-bold">Don't have an account?
          <Link href='/register'> 
          <a className="text-primary "> Register</a>
          </Link> 
         
          </h5> 
          </div>
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

export default Login

Login.getInitialProps = async (context) => {
  return {
      providers: await providers(context)
  }
}

const GoogleIcon = () =>{
  <div className="google text-center mr-3">
  <div className="fab fa-google" />
</div>
}

const FacebookIcon = () =>{
  <div className="facebookk text-center mr-3">
            <div className="fa fa-facebook" />
          </div>
}

const InstagramIcon = () =>{
  <div className="instagram text-center mr-3">
            <div className="fa fa-instagram" />
          </div>
}

const TwitterIcon = () =>{
  <div className="twitter text-center mr-3">
  <div className="fa fa-twitter" />
</div>
}