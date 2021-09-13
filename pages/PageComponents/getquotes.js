import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'

function GetQuotes()
{

  const initialValues = {
    email: '',
    fullname: '',
    address: '',
    message: ''
}
const validationSchema = Yup.object({
    email: Yup.string().required('required'),    
    message: Yup.string().required('required'),
    address: Yup.string().required('required'),    
    fullname: Yup.string().required('required')
})

    async function handleOnSubmit(e){
        //e.preventDefault()
        //const formData = {}
        //Array.from(e.currentTarget.elements). forEach(field=>{
            //if(!field.name) return
            //formData[field.name] = field.value
       // });

        fetch('/api/contactform', {
            method: 'POST',
            body: JSON.stringify[formData]
        })
        
        }


        return (
            <>
            {/* Get A Quote  */}
      <div className="modal contact-modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content margin-top-150px background-main-color">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <img src="assets/img/contact-img5.jpg" height="620px" alt="" />
              </div>
              
              <div className="col-lg-7">
                <div className="padding-30px">
                  <h3 className="padding-bottom-15px"><u>Get A Free Quote</u></h3>
                  <Formik 
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {handleOnSubmit}
            >
               {
                    formik =>(
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Full Name</label>
                        <input type="text" className="form-control" id="fullname" placeholder="Name" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <div><label>Business Type</label></div>
                          <select className="form-controlquoteselect" id="subject">
                            <option id="">--Business Type--</option>
                    <option id="Cargo">Cargo Freight Forwarding</option>
                    <option id="Sea Shipping">Sea Shipping</option>                           
                    <option id="Package Pickup and Delivery">Package Pickup and Delivery</option>
                    <option id="Store Pickup">Store, Shopping Mall, or Factory Pickup</option>
                          </select>
                        </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea className="form-control" id="message" rows={3}>
                          Type your message here and make it detailed
                        </textarea>
                    </div>
                    <button type="submit" class="btn btn-primary-outline">
                          SEND MESSAGE
                          </button>
                    {/*<a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">SEND MESSAGE</a>*/}
                  </form>
                   )
                  }
              </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // Get A Quote  */}
            </>
        )
}

export default GetQuotes 