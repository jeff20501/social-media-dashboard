import { clsx } from "clsx"

export function DashBoard(props){
    const trueFalse = props.data.trueFalse
    const fontColor= clsx('normal', trueFalse?'rise':'fall')
    return(
        <article className="top_socials"
                 style={{ "--gradient-glow": `linear-gradient(${props.data.gradientGlow})` }}
        >                       
            <div>
                <img src={props.data.logo.img} alt={props.data.logo.alt}/>
                <p>{props.data.username}</p>
            </div>
            <h2>{props.data.followers}</h2>
            <p className="numberOf">{props.data.numberOf}</p>
            <div className="rates">
                <img src={props.data.iconUpDown.img} />
                <p className={fontColor}>{props.data.visit} Today</p>
            </div>
            
        </article>
    )
} 