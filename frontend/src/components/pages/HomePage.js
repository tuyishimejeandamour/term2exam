import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function HomePage() {
    const [resp,setresp] = useState();
    const [error,seterror] = useState();
    const history = useParams()
   useEffect(() => {
    fetch(`/bill/${history.n}`, {
        // configuration
     })
     .then(response => response.json())
     .then(response => {
         setresp(response)
     })
     .catch(err => err.json())
     .catch(err=> seterror(err))
  
   }, [resp,error])
   
      
    return (
        <div className="text-center">
            <h1>igisubizo</h1>
            <h3 className="main-title home-page-title">{props.message}</h3>
            <footer>
                <p><Link to="/">kwitangiriro</Link>.</p>
            </footer>
        </div>
    )
}
