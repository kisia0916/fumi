import React from "react";
import "./LinkContent.css"

function LinkContent(props:{img:string,title:string,account:string,link:string}){
    return (
            <div className="linkContentMain">
        <a href={props.link} style={{textDecoration:"none"}}>

                <div className="linkIconWarpp">
                    <img src={props.img} className="linkIcon"/>
                </div>
                <div className="linkInfo">
                    <div className="linkInfoWarpp">
                        <div className="linkNameWarpp">
                            <span className="linkName">{props.title}</span>
                        </div>
                        <div className="linkAccountWarpp">
                            <span className="linkAccountName">@{props.account}</span>
                        </div>
                    </div>
                </div>
        </a>

            </div>
    )
}
export default LinkContent