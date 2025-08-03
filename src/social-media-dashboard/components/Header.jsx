export function Header (props){
    return(
        <article className="header1">
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p> Total Followers: 23,004</p>
                </div>
                <div className="toggle">
                    <span>{props.theme?"Switch to dark":"Switch to light"}</span>
                    <input type="checkbox" id="darkLight" onClick={props.handleClick}/>
                    <label htmlFor="darkLight" className="button"></label>
                </div>
        </article>
    )
}

export function Header2(){
    return(
        <h2 className="header2">OverView - Today </h2>
    )
} 