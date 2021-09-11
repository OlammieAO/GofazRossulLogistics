import Link from 'next/link'
function TrackingComponent()
{
    async function handleOnSubmit(e){
        e.preventDefault()
        const formData = {}
        Array.from(e.currentTarget.elements). forEach(field=>{
            if(!field.name) return
            formData[field.name] = field.value
        });

        fetch('/api/auth/track', {
            method: 'POST',
            body: JSON.stringify[formData]
        })
        
        }


    return(
        <>
         <form method='post' onSubmit={handleOnSubmit}>
          <div className="row px-3"> 
          <label className="mb-1">
              <h6 className="mb-0 text-sm">Tracking ID</h6>
          </label> 
          <input className="input1 mb-4" type="text" name="track" placeholder="Enter your Tracking ID" />
           </div>                  

          <div className="row mb-3 px-3"> 
          <button type="submit" className="btn btn-primary text-center">Check Delivery Status</button> 
          </div>
          </form>
        </>
    )
}

export default TrackingComponent