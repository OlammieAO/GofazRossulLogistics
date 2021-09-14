function FAQComponent()
{

    async function handleOnSubmit(e){
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements). forEach(field=>{
            if(!field.name) return
            formData[field.name] = field.value
        });

        fetch('/api/faq', {
            method: 'POST',
            body: JSON.stringify[formData]
        })
        
        }

   return (
    <>
    <div classname="col-lg-4">
        <div classname="contact-modal">
          <div classname="background-main-color">
            <div classname="padding-30px">
              <h3 classname="padding-bottom-15px">Ask Us Direct </h3>

              <form method='post' onSubmit={handleOnSubmit}>
                <div classname="form-row">
                  <div classname="form-group col-md-6">
                    <label>Full Name</label>
                    <input type="text" classname="form-control" id="name" name="name" placeholder="Name" />
                  </div>
                  <div classname="form-group col-md-6">
                    <label>Email</label>
                 <input type="email" classname="form-control" id="email" name="email" placeholder="Email" />
                  </div>
                </div> {/* closes form row */}
               
                <div classname="form-group">
                  <label>Message</label>
                  <textarea classname="form-control" 
                  id="message" name="message" rows="{3}" >
                    Type your enquiry here  
                  </textarea>
                </div> 

                <a href="#" className="btn-sm btn-lg btn-block background-dark text-white text-center  text-uppercase rounded-0 padding-15px">
                    Send Message</a> 
                    </form> 
                    </div>                
                    </div>              
                    </div>            
                    </div> 
                                  
    </>
   )   
}

export default FAQComponent