export function Header (props){
    return(
        <article className="header1">
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p> Total Followers: 23,004</p>
                </div>
                <div>
                    <button onClick={props.darkMode}>Dark Mode</button>
                </div>
        </article>
    )
}

export function Header2(){
    return(
        <h2 className="header2">OverView - Today </h2>
    )
}