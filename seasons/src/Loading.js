import React from 'react'

const Loading = (props) =>{
    return(
        <div class="ui active dimmer">
            <div class="ui text loader">{props.loadingText}</div>
        </div>
    )
}

Loading.defaultProps = {
     loadingText: 'Loading..'
}

export default Loading