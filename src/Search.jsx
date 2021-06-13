import React from 'react'
import "./Search.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';

export default function Search() {
    return (
        <div className="search">
            <div className="search_filter">
                <TuneIcon/>
                <h2>FILTERS</h2>

            </div>
            <hr/>
            <ChannelRow
             image="https://yt3.ggpht.com/ytc/AAUvwnhNSfAHXYwCAT1_dFSBkOKJpkP3XodQAcqEbSyx=s88-c-k-c0x00ffffff-no-rj"
             channel="arfin foysal"
             veryfied
             subs="10k"
             videos={55}
             des="Video and Audio Converters For Android."
            />
        </div>
    )
}
