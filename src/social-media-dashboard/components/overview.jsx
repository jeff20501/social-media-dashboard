
export function Overview(props){
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
                    <p>{props.overview.percentageStats}</p>
                </div>
                
            </div>
        </article>
    )
}