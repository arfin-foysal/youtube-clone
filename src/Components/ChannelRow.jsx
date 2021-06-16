import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Avatar } from '@material-ui/core';

export default function ChannelRow({image,channel,veryfied,subs,videos,des}) {
    return (
        <div className="channelRow">
            <Avatar src={image} alt={channel} className="channelRow_logo"/>
            <h4>{channel}{veryfied &&<VerifiedUserIcon/>}</h4>
             <p>{subs} Subscribes {videos} videos</p>
             <p>{des}</p>
        </div>
    )
}
 