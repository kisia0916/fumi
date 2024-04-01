import React from "react";
import SkillsContent from "./contents/SkillsContent";

function SkillsMain(){
    return(
        <>
            <SkillsContent skillName={"Javascript"} type={"Language"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
            <SkillsContent skillName={"Typescript"} type={"Language"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>
            <SkillsContent skillName={"Rust"} type={"Language"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"/>
            <SkillsContent skillName={"Python"} type={"Language"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
            <SkillsContent skillName={"HTML5"} type={"Markup language"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/>
            <SkillsContent skillName={"CSS3"} type={"Style sheet"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/>
            <SkillsContent skillName={"React"} type={"Framework"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>
            <SkillsContent skillName={"Express"} type={"Framework"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"/>
            <SkillsContent skillName={"mongoDB"} type={"Database"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"/>
            <SkillsContent skillName={"Node.js"} type={"JSruntime"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"/>
            <SkillsContent skillName={"Git/GitHub"} type={"Version control"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"/>
            <SkillsContent skillName={"VSCode"} type={"Editor"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"/>
            <SkillsContent skillName={"Raspberrypi"} type={"IOT"} img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"/>

        </>
    )
}
export default SkillsMain