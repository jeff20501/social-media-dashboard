export function DashBoard(props){
    return(
        <article className="top_socials">                       
            <div>
                <img src={props.data.logo.img} alt={props.data.logo.alt}/>
                <p>{props.data.username}</p>
            </div>
            <h2>{props.data.followers}</h2>
            <p className="numberOf">{props.data.numberOf}</p>
            <div className="rates">
                <img src={props.data.iconUpDown.img} />
                <p>{props.data.visit} Today</p>
            </div>
            
        </article>
    )
}