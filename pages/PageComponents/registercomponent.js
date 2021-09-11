import { signIn, signOut, useSession } from 'next-auth/client'
import { v4 as uuidv4 } from 'uuid'

function RegisterComponent()
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
              <h6 className="mb-0 text-sm">Name</h6>
          </label> 
          <input className="input1 mb-4" type="text" name="name" id="name" placeholder="Enter your name here" />
           </div>
         
          <div className="row px-3"> 
          <label className="mb-1">
              <h6 className="mb-0 text-sm">Email Address</h6>
          </label> 
          <input className="input1 mb-4" type="text" name="email" id="email" placeholder="Enter a valid email address" />
           </div>

          <div className="row px-3"> <label className="mb-1">
              <h6 className="mb-0 text-sm">Password</h6>
            </label> 
            <input className="input1 mb-4" type="password" name="password" placeholder="Enter password" /> 
            </div>

            <div className="row px-3"> <label className="mb-1">
              <h6 className="mb-0 text-sm">Confirm Password</h6>
            </label> 
            <input className="input1 mb-4" type="confirmpassword" name="confirmpassword" placeholder="Confirm your password" /> 
            </div>
          <div className="row px-3 mb-4">
            <div className="custom-control custom-checkbox custom-control-inline"> 
            <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">I agreed</label> 
            </div>            
          </div>

          <div className="row mb-3 px-3"> 
          <button type="submit" className="btn btn-primary text-center">Register</button> 
          </div>
          </form>
        </>
    )
}

export default RegisterComponent