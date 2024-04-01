import React from "react";
import "./BlogContent.css"
import { Link } from "react-router-dom";

function BlogContent(props:{img:string,title:string,tagList:string[],date:string,id:string}){
    return (
        <Link to={"http://localhost:3000/blog/"+props.id} style={{textDecoration:"none"}}>
            <div className="blogMain">
                <img src={props.img} className="blogImg"/>
                <div className="blogInfo">
                    <span className="blogTitle">{props.title}</span>
                    <div className="blogInfoBottom">
                        <span className="blogDate">{props.date}</span>
                        {props.tagList.map((i)=>{
                            return(          
                            <div className="blogTag">
                                <img src="./icon/tag_fill (1).svg" className="blogTagIcon"/>
                                <span className="blogTagTitle">{i}</span>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default BlogContent