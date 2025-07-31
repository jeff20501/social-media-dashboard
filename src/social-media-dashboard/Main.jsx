import { Header, Header2 } from "./components/Header"
import { DashBoard } from "./components/dashboard"
import { Overview } from "./components/overview"
import {platForms, overviewData} from "./components/Data"
import { useState } from "react"
export function Page(){
    const data = platForms.map((data)=>{
        return <DashBoard
                    key={data.id} 
                    data={data}
                />
       
    })

    const overview =overviewData.map((overview)=>{
        return <Overview 
                    key={overview.id}
                    overview={overview}
                />
    }) 

    const [dark, setDark]=useState(true)
    const darkTheme = localStorage.getItem(JSON.stringify(dark))
    
    const enableDark = ()=>{
        
    }

    function darkMode(){
        setDark(preBool=>!preBool)
        console.log(dark)
    } 
    return(
        <>  
            <main className="wrapper">
                <Header 
                    darkMode={darkMode}
                />
                <article className="main">
                    {data}
                </article>
                <Header2/>
                <article className="overviews">
                    {overview}
                </article>

            </main>
            
            
        </>
    )
}