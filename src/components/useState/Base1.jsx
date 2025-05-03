import { useState } from "react";

export default function Base() {
    
    console.log("render");
    let  a = 10; 
    const [data,setData] = useState(100)
    const [theme,setTheme] = useState("light")
    function HandleClick(){
            a++;
            console.log(a);
            // setData(data+1)
            // setData((prev)=>prev+1)
            setData(data-1)
            
            
    }
    console.log(data);
    
    return(
        <>
        <div className={theme == "light" ? "lt" : "dt"}>{a}
        <button onClick={HandleClick}>Update </button>

        <h1>{data}</h1>
        <button onClick={HandleClick}>Update via UseState</button>

        <button onClick={()=>setTheme((oldTheme)=>oldTheme == "light" ? "dark" :"light")}>Change Color</button>
        </div>
        </>
    )
}