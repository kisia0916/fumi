import React from "react";
import LinkContent from "./contents/LinkContent";
import "./LinkMain.css"

function LinkMain(){
    return (
        <div className="linkPageMainWarpp">
            <LinkContent img="./icon/social_x_line (1).svg" title="X" account="kisia0916" link="https://twitter.com/kisia0012"/>
            <LinkContent img="./icon/discord_fill.svg" title="Discord" account="f_mi" link="https://discord.com/invite/tUGemHTA"/>
            <LinkContent img="./icon/github_fill.svg" title="GitHub" account="kisia0012" link="https://github.com/kisia0916"/>
            <LinkContent img="./icon/ins_fill (5).svg"title="Instagram" account="fumi_fumi_0916" link="https://www.instagram.com/fumi_fumi_0916/?hl=ja"/>
            <LinkContent img="./icon/logo-only-white.svg" title="Zenn" account="fumi0916" link="https://zenn.dev/fumi0916"/>
        </div>
    )
}
export default LinkMain