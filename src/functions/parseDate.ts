const parseDate = (date:string)=>{
    if (date){
    const dateList = date.split("-")
    return `${dateList[0]}/${dateList[1]}/${dateList[2].slice(0,2)}`
    }else{
        return ""
    }
}
export default parseDate