import React from 'react'
import "./VideoRow.css"

export default function VideoRow({views,subs,des,timestamp,channel,image,tittle}) {
    return (
        <div className="videoRow">
        
            <img src={image} alt="" />
            <div className="videoRow_text"></div>
            <h3>{tittle}</h3>
            <p className="videoRow_head">{channel} . <span className="videoRow_sub">{subs} Subscribers</span>  {views}. {timestamp}</p>
            <p className="video_des">{des}</p>
        </div>
    )
}
