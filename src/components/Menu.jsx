import React from "react";
import FlareIcon from '@mui/icons-material/Flare';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import "./Menu.css"


const Menu = () => {
    return (

    <div className="topbarContainer">
        <div className="topbarLeft">
            <a className="logo" href="/">E4T</a>
        </div>
        <div className="topbarCenter">
        </div>
        <div className="topbarRight">
            <div className="topbarIcons">
                <a className="topbarIconItem" href="/inovations">
                    <FlareIcon />
                </a>
                <a className="topbarIconItem" href="/profile">
                    <AccountCircleIcon />
                </a>
                <a className="topbarIconItem" href="/messages">
                    <ChatIcon />
                </a>
            </div>
        </div>

    </div>
    )
}

export default Menu; 