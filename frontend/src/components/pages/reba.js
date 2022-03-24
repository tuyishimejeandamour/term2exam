import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    const [number,setNumber] = useState(null)
    const viewdays = (event)=>{
      setNumber(event.target.value)
    }

    return (
        <div className="text-center m-5-auto">
            <h2>reba ibiciro niminsi usigaranye</h2>
            <form action='/ibisubizo'>
                <p>
                    <label id="reset_pass_lbl">nimero yawe</label><br/>
                    <input type="number" onChange={viewdays} value={number} name="n" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={submit}>reba</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/gura">gura</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
