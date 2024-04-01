import React from "react";
import "./SkillsContent.css"

function SkillsContent(props:{skillName:string,type:string,img:string}){

    return (
        <div className="skillsContentMain">
            <img src={props.img} className="skillIcon"/>
            <div className="skillInfo">
                <span className="skillName">{props.skillName}</span>
                <p className="skillTypeText">{props.type}</p>
            </div>
        </div>
    )
}
export default SkillsContent