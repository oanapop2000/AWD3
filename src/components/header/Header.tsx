import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import imageToAdd from "../header/logo_en.png";
import { Link } from "react-router-dom";
import styles from '../helper/styles';

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

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div className={classes.logo}>
          <img src={imageToAdd} alt="Image" className={classes.logoImage}/>
        </div>
        <div className={classes.navlinks}>
          <Button>

            <Link to="/" className={classes.button}>
              Home
            </Link>
          </Button>

          <Button>

            <Link to="/aboutMe" className={classes.button}>
              About me
            </Link>
          </Button>

          <Button>
            <Link to="/contact" className={classes.button}>
              Contact
            </Link>
          </Button>

          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            className={classes.button}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Teaching
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Link to='/oop' className={classes.link}>Object oriented programming</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Link to='/ai' className={classes.link}>Artificial intelligence</Link>
            </MenuItem>
          </StyledMenu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;