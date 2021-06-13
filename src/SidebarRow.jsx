import React from 'react'
import "./SidebarRow.css" 

export default function SidebarRow({Icon, tittle}) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow_icon"/>
            <h4 className="sidebarRow_tittle">{tittle}</h4>
        </div>
    )
}
