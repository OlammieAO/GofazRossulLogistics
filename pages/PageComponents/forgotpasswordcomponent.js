
function ForgotPasswordComponent()
{

    async function handleOnSubmit(e){
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements). forEach(field=>{
            if(!field.name) return
            formData[field.name] = field.value
        });

        fetch('/api/contactform', {
            method: 'POST',
            body: JSON.stringify[formData]
        })
        
        }

    return(
        <>
        <form method='post' onSubmit={handleOnSubmit}>
          <div className="row px-3"> 
          <label className="mb-1">
              <h6 className="mb-0 text-sm">Email Address</h6>
          </label> 
          <input className="input1 mb-4" type="text" name="email" placeholder="Enter the email address you registered with us" />
           </div>

          
          <div className="row mb-3 px-3"> <button type="submit" className="btn btn-primary text-center">Request Password Reset</button> 
          </div>
          </form>
        </>
    )
}

export default ForgotPasswordComponent