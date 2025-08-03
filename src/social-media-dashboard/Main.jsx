import { Header, Header2 } from "./components/Header"
import { DashBoard } from "./components/dashboard"
import { Overview } from "./components/overview"
import {platForms, overviewData} from "./components/Data"
import { useState, useEffect } from "react"
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

    const [theme, setTheme]= useState(()=>{
        return localStorage.getItem("darkmode")==="active"
    })

    useEffect(()=>{
        if(theme){
            document.body.classList.add("darkmode")
            localStorage.setItem("darkmode", "active")
        }
        else{
            document.body.classList.remove("darkmode")
            localStorage.setItem("darkmode", null)
        }
    }, [theme])

    const handleClick=()=>{
        setTheme(preTheme=>!preTheme)
    }

    return(
        <>  
            <main className="wrapper">
                <Header handleClick={handleClick} theme={theme} />
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