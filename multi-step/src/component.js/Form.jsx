import { useState } from "react"

export default function Form(){

    const [page, setPage] = useState(0);

    return(
        <div>
            <div className="progressbar"></div>
            <div className="form-container">
               <div className="header"></div>
               <div className="body"></div>
               <div className="footer">
                <button>prev</button>
                <button>next</button>
               </div>
            </div>
        </div>
    )
}