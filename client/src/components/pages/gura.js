import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import '../../App.css'

export default function SignInPage() {
   const [state,setState] = useState({})
    const onsubmit = () => {
        axios.post('/api/', state)
            .then(() => { alert('success post') })
        console.log(state)
    }
    return (
        <div className="text-center m-5-auto">
            <h2>gura umuriri</h2>
            <form action="/ibisubizo">
                <p>
                    <label>nimero yawe</label><br />
                    <input type="text" name="first_name" required onChange={(event)=>setState({usernumber:event.target.value})} />
                </p>
                <p>
                    <label>amafaranga</label>
                    <Link to="/reba"><label className="right-label">reba ibiciro</label></Link>
                    <br />
                    <input type="password" name="password" required onChange={(event)=>setState({amount:event.target.value})} />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={onsubmit}>gura</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">kwitangiriro</Link>.</p>
            </footer>
        </div>
    )
}
