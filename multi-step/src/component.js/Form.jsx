import { useState } from "react"
import SignUp from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

export default function Form(){

    const [page, setPage] = useState(0);



    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUp/>
        } else if (page === 1) {
            return <PersonalInfo/>
        } else {
            return <OtherInfo/>
        }
    } 

    return(
        <div>
            <div className="progressbar"></div>
            <div className="form-container">
               <div className="header">
                <h1>{FormTitles[page]}</h1>
               </div>
               <div className="body">
                <h1>{PageDisplay()}</h1>
               </div>
               <div className="footer">
                <button  disabled = {page == 0}
                onClick={() => {setPage((currPage) => currPage - 1)}}>prev</button>
                <button disabled={page == FormTitles.length -1}
                 onClick={() => {setPage((currPage) => currPage + 1) }}>next</button>
               </div>
            </div>
        </div>
    )
}