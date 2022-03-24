import React, { useState,useEffect } from 'react'
import { Link,searchParams } from 'react-router-dom'

export default function HomePage(props) {
    const [resp,setresp] = useState();
   
   
   useEffect(() => {
    axios.get(`/api/${props.location.query.token}`)
      .then((response) => {
          setresp(response)
      })
  
   }, [resp])
   
      
    return (
        <div className="text-center">
            <h1>igisubizo</h1>
            <h3 className="main-title home-page-title">{resp}</h3>
            <footer>
                <p><Link to="/">kwitangiriro</Link>.</p>
            </footer>
        </div>
    )
}
