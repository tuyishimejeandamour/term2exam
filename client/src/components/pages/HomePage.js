import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage(props) {
    const [resp,setresp] = useState();
    const [error,seterror] = useState();
   useEffect(() => {
    fetch(`/bill/`, {
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
