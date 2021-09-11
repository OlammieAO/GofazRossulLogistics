import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'

function ReachUsComponent() {
    const initialValues = {
        email: '',
        fullname: '',
        address: '',
        message: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('required'),    
        message: Yup.string().required('required'),
        phone: Yup.string().required('required'),    
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
                            <input type="text" className="form-control" id="fullname" placeholder="Full Name" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Tracking ID</label>
                            <input type="text" className="form-control" id="trackingid" placeholder="Tracking ID if available" />
                          </div>
                        </div>
                        <div className="form-group">
                        <div><label>Subject</label></div>
                          <select className="form-controlselect" id="subject">
                            <option id="">--What do you have to tell us--</option>
                            <option id="Commend">Commend</option>
                            <option id="Complain">Complain</option>                           
                            <option id="Business Enquiry">Business Enquiry</option>
                            <option id="Suggestion">Suggestion</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Message</label>
                          <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                        </div>
                        <button type="submit" class="btn btn-primary-outline">
                          SEND MESSAGE
                          </button>
                        {/*<button type="submit" styles="border-color: #ffffff; border-style: solid">
                          SEND MESSAGE
                    </button>*/}
                      </form>
                       )
                    }
                </Formik>
         </>
     )
}

export default ReachUsComponent