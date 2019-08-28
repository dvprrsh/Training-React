import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer:{season:'summer', text:"Let's hit the beach", icon:'massive sun icon'},
    winter:{season:'winter', text:"Burr, it is chilly", icon:'massive snowflake icon'}
}

const getSeason = (lat,month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? seasonConfig.summer:seasonConfig.winter
    }else{
        return lat > 0 ? seasonConfig.winter:seasonConfig.summer
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())

    const icon = season.icon
    const text = season.text

    return(
        <div className={`${season.season} season-display `}>
            <i className={`icon-left icon-top ${icon}`}/>
            <h1>{text}</h1>
            <i className={`icon-right icon-bottom ${icon}`}/>
        </div>
        )
}

export default SeasonDisplay