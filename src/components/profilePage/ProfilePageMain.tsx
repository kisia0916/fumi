import React, { useEffect, useState } from "react";
import "./ProfilePageMain.css"
import { client } from "../../App";
import BlogMain from "../blog/BlogMain";
import ServiceMain from "../service/ServiceMain";
import SkillsMain from "../skill/SkillsMain";
import LinkMain from "../linek/LinkMain";
import { Link } from "react-router-dom";

function ProfilePageMain(){
    const [nowTab,setNowTab] = useState<string>("Blog")
    const [nowTabContent,setNowTabContent] = useState<any>("")
    useEffect(()=>{
      switch (nowTab) {
          case "Blog":
              setNowTabContent(<BlogMain/>)
              break
          case "Services":
              setNowTabContent(<ServiceMain/>)
              break
          case "Skills":
              setNowTabContent(<SkillsMain/>)
              break
          case "Link":
              setNowTabContent(<LinkMain/>)
              break
      }
    },[nowTab])
    return (
        <>
        <div className="topSpace">
        <div className="topSpaceMainContent">
            <div className="proFileTop">
                <img src="/icon/zbnU2dcD_400x400.jpg" className="topSpaceProfileIcon"/>
                <div className="topSpaceMainContentRight">
                    <div className="mainNameLine">
                            <div className="mainNameLineLeft">
                                <p className="mainName">fumi</p>
                                <img src="/icon/check_circle_fill (2).svg" className="mainNameCheckIcon"/>
                            </div>
                        <div className="mainNameLineRight">
                            <a href='https://twitter.com/kisia0012'><img src="/icon/social_x_line (1).svg" className="mainNameLineRightIcon"/></a>
                            <a href='https://github.com/kisia0916'><img src="/icon/github_fill.svg" className="mainNameLineRightIcon"/></a>
                            <a href='https://discord.com/invite/tUGemHTA'><img src="/icon/discord_fill.svg" className="mainNameLineRightIcon"/></a>
                        </div>
                    </div>
                    <p className="mainInfo">15y/o High school student</p>
                </div>
            </div>
            <div className="aboutMe">
                <p className="aboutMeText">Hi, My name is fumi👋</p>
                <p className="aboutMeText">I develop web application and window application</p>
            </div>
        </div>
    </div>
    <div className="sectionSplitLine"></div>
    <div className="selectContentBar">
        <div className="selectButton selectButtonLeft " style={nowTab === "Blog"?{backgroundColor:"#ffbb00",color:"rgb(255, 255, 255)"}:{}} onClick={()=>{setNowTab("Blog")}}>
            <span className="selectButtonText">Blog</span>
        </div>
        <div className="selectButton " style={nowTab === "Services"?{backgroundColor:"#ffbb00",color:"rgb(255, 255, 255)"}:{}} onClick={()=>{setNowTab("Services")}}>
            <span className="selectButtonText">Service</span>
        </div>
        <div className="selectButton" style={nowTab === "Skills"?{backgroundColor:"#ffbb00",color:"rgb(255, 255, 255)"}:{}} onClick={()=>{setNowTab("Skills")}}>
            <span className="selectButtonText">Skill</span>
        </div>
        <div className="selectButton selectButtonRight" style={nowTab === "Link"?{backgroundColor:"#ffbb00",color:"rgb(255, 255, 255)"}:{}} onClick={()=>{setNowTab("Link")}}>
            <span className="selectButtonText">Link</span>
        </div>
    </div>
    <div className='bottomMainContent'>
            {nowTabContent}
        </div>
        </>
    )

}
export default ProfilePageMain