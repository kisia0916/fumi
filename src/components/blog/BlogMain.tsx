import React, { useEffect, useState } from "react";
import "./BlogMain.css"
import BlogContent from "./contents/BlogContent";
import { client } from "../../App";
import parseTag from "../../functions/parseTag";
import parseDate from "../../functions/parseDate";

function BlogMain(){
    const [blogList,setBlogList] = useState<any>([])
    useEffect(()=>{
        client.get({endpoint:"blog",queries:{fields:"title,tag,thumbnail,date,id"}}).then((res)=>{
            console.log(res)
            setBlogList(res.contents)
        }).catch((error)=>{})
    },[])
    return(
        <>
            {blogList.map((i:any)=>{
               return <BlogContent img={i.thumbnail.url} title={i.title} tagList={parseTag(i.tag)} date={parseDate(i.date)} id={i.id}/>
            })}
            {/* <BlogContent img="./photo/PXL_20230807_022020350.jpg" title="セキュリティキャンプに参加しました!"/>
            <BlogContent img="./photo/PXL_20220715_005410459.jpg" title="長野駅にもついでに行ってみた"/>
            <BlogContent img="./photo/PXL_20221116_015801353.jpg" title="社会科見学で鎌倉に行った"/>
            <BlogContent img="./photo/PXL_20220804_031613742.MP.jpg" title="テニスの合宿に行ってみた"/>
            <BlogContent img="./photo/PXL_20220714_043423593.jpg" title="黒部ダムに行った感想"/> */}

        </>
    )
}
export default BlogMain