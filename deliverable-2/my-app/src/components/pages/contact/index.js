import {Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {APIContext} from "../../../Contexts/APIContext";
import './contact.css'
import Helmet from "react-helmet"

const Contact = () => {
    const {refresh, setRefresh} = useContext(APIContext)



    useEffect(() => {
        let contact = document.getElementById("contact")
        if (contact.style.color !== "white"){
            let home = document.getElementById("home")
            let about = document.getElementById("about")
            home.style.color = null
            home.style.backgroundColor = null
            about.style.color = null
            about.style.backgroundColor = null
            contact.style.color = "white"
            contact.style.backgroundColor = "rgb(0, 139, 176)"

        }

    }, [setRefresh, refresh])

    return <>
        <div className="project-details" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <h1>Contact Information:</h1>
        <p className="phone" style={{width: '100%'}}>Phone call: 123-456-7890</p>
        <a href="mailto:abcde@email.com" id="email" style={{width: '100%'}}>Email: abcde@email.com</a>
        </div>
    </>
}

export default Contact
