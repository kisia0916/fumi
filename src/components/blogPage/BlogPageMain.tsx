import React, { useEffect, useState } from "react";
import "./BlogPageMain.css"
import { client } from "../../App";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser"
import parseDate from "../../functions/parseDate";
import parseTag from "../../functions/parseTag";

function BlogPageMain(){
    const contentId = useParams().id
    const [title,setTitle] = useState<string>("")
    const [blogData,setBlogData] = useState<string>("")
    const [date,setDate] = useState<string>("")
    const [thumbnail,setThumbnail] = useState<string>("")
    const [tag,setTag] = useState<string>("")
    useEffect(()=>{
        console.log(contentId)
        client.get({endpoint:"blog",contentId:contentId}).then((res)=>{
            setTitle(res.title)
            setBlogData(res.body)
            setDate(res.date)
            setThumbnail(res.thumbnail.url)
            console.log(res)
            setTag(res.tag)
        }).catch((error)=>{})
    },[])
    return (
        <div className="BlogPageMain2">
            <div className="BlogPageTopBar">
            <Link to="/" style={{textDecoration:"none"}}>
 
                <div className="BlogPageTopBarLeft">
                    <img src="/icon/zbnU2dcD_400x400.jpg" className="blogPageIcon"/>
                    <span className="blogTopIconText">fumi-profile</span>
                </div>
                </Link>

                <div className="blogTopDateTextWarpp">
                    <span className="blogTopDateText">{parseDate(date)}</span>
                </div>
            </div>
            <div className="BlogPageTop">

                <img src={thumbnail} className="thumbnailBlogImg"/>
            </div>
            <div className="BlogPageTitle">
            <div className="BlogPageTags">
                {parseTag(tag).map((i:string)=>{
                    return (
                        <div className="BlogPageTag">
                        <img src="/icon/tag_fill (1).svg" className="blogPageTagIcon"/>
                        <span className="blogPageTagTitle">{i}</span>
                        </div>
                    )
                })}
                </div>
                <p className="BlogPageTitleText">{title}</p>
            </div>
            <div className="BlogPageTitleLine"></div>
            <div className="BlogMainSpace">
                {parse(blogData)}
            </div>
            <div style={{height:"30px"}}></div>
        </div>
    )
}
export default BlogPageMain