import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Sidebar() {
    return (
        <div className="sidebar">
           <SidebarRow Icon={HomeIcon} tittle="Home"/> 
           <SidebarRow Icon={ExploreIcon} tittle="Explore"/> 
           <SidebarRow Icon={SubscriptionsIcon} tittle="Subscriptions"/> 
           <hr></hr>
           <SidebarRow Icon={LibraryAddCheckIcon} tittle="Library"/> 
           <SidebarRow Icon={HistoryIcon} tittle="History"/> 
           <SidebarRow Icon={OndemandVideoIcon} tittle="Your videos"/> 
           <SidebarRow Icon={WatchLaterIcon} tittle="Watch Later"/> 
           <SidebarRow Icon={ThumbUpAltIcon} tittle="Like videos"/> 
           <SidebarRow Icon={ExpandMoreIcon} tittle="Show more"/> 
           <hr></hr>
        </div>
    )
}

