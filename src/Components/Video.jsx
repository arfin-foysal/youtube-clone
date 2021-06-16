import React from 'react'
import { Avatar } from '@material-ui/core';

import "./Video.css"

export default function Video({image,tittle,channel,view,timestamp,channelImage}) {
    return (
        <div className= "video">
            <img src={image} className="video_thumbail" alt="" />
            <div className="videoCard_info" >
              <Avatar className="videoCard_avatar" alt={channel} src={channelImage} />  
              <div className="Video_info">
                  <h4>{tittle}</h4>
                  <p>{channel}</p>
                  <p>{view}.{timestamp}</p>
                  
              </div>
            </div>
        </div>
    ) 
}

