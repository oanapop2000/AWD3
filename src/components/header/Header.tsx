import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import imageToAdd from "../header/logo_en.png";
import styles from "../helper/styles";
import React from "react";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

  const classes = styles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={imageToAdd} alt="Image" />
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/aboutMe" className={classes.link}>
            About me
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Button
            className={classes.button}
            onClick={handleClick}
          >
            Teaching
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleClose}><Link to='/oop' className='content'>Object oriented programming</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/ai' className='content'>Artificial intelligence</Link></MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;