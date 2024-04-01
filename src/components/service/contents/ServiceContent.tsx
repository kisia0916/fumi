import React from "react";
import "./ServiceContent.css"
import { Link } from "react-router-dom";
function ServiceContent(props:{img:string,title:string,language:string,url:string}){
    return (
        <a href={props.url} style={{textDecoration:"none"}}>
            <div className="serviceContentMain">
                <img src={props.img} className="serviceImg"/>
                <div className="serviceInfo">
                    <span className="serviceTitle">{props.title}</span>
                    <div className="serviceInfoBottom">
                        <span className="userLanguage">Language : <span className="developLanguageText">{props.language}</span></span>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default ServiceContent