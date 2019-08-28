import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';


export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            </Button> */}
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start"  color="inherit" aria-label="menu">
            </IconButton>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <Button><Link className="links" to="/userProfile">userProfile</Link></Button>
                <Button><Link className="links" to="/register">register</Link></Button>
                <Button><Link className="links" to="/emergency">emergency</Link></Button> */}
                <MenuItem onClick={handleClose}><Link className="links" to="/emergency">emergency</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className="links" to="/register">register</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link className="links" to="/userProfile">userProfile</Link></MenuItem>
            </Menu>
        </div>
    );
}