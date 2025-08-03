import { clsx } from "clsx"
export function Overview(props){
    const trueFalse = props.overview.trueFalse
    const fontColor= clsx('normal', trueFalse?'rise':'fall')

    return(
        <article className="tabs">
            <div className='top'>
                <p>{props.overview.stats}</p>
                <img src={props.overview.logo.img} alt={props.overview.logo.alt} />
            </div>
            <div className='bottom'>
                <h3>{props.overview.numberStats}</h3>
                <div className="percentageStats">
                    <img src={props.overview.iconUpDown.img}/>
                    <p className={fontColor}>{props.overview.percentageStats}</p>
                </div>
                
            </div>
        </article>
    )
} 