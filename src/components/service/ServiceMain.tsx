import React from "react";
import ServiceContent from "./contents/ServiceContent";
function ServiceMain(){
    return (
        <>
            <ServiceContent img={"./photo/Chat Meets (1).png"} title={"ChatMeets"} language={"Javascript,HTML,CSS"} url="https://fumiapp.com"/>
            <ServiceContent img={"./photo/スクリーンショット 2024-03-29 224733.png"} title="ONLINE REVERSI" language={"Javascript,HTML,CSS"} url="https://onlinereversi.onrender.com/"/>  
            <ServiceContent img={"./photo/falcon-v2.6-main"} title="Falcon-v2.6" language={"Typescript"} url="https://github.com/kisia0916/falcon-v2.6-main"/>       
            <ServiceContent img={"./photo/github_8rrs.1248.webp"} title="More projects" language={"TS/JS,Python,Rust,Java..etc"} url="https://github.com/kisia0916"/>            

        </>
    )
}
export default ServiceMain