import React,{useState} from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom'
export default function Header() {
    const [search, setInputSearch] = useState("")
    return (
           
      
        <div className="header">
            <div className="header_left">
             <MenuIcon/>
             <Link to="/">
             <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="Youtube"/>
             </Link>
             
            
            </div>
            <div className="header_middle">
            <input type="text" value={search} onChange={(e)=>setInputSearch(e.target.value)}/>
               <Link to={`/search/${search}`}>
               <SearchIcon className="header_input_icon" />
               </Link>
            </div>
            <div className="header_right">
                <MicIcon className="iconSpace"/>
                <VideoCallIcon className="iconSpace"/>
                <AppsIcon className="iconSpace"/>
                <NotificationsIcon className="iconSpace"/>
                <AccountCircleIcon />
            </div>
            </div>
    
    )
}
