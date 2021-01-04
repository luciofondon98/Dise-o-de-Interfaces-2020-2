import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuLateral() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuList>
        <Link to ="/Mis_Noticias" style={{color: "black"}}>
          <MenuItem>
              <ListItemIcon>
                  <BookmarkBorderIcon/>
                  </ListItemIcon>  
                  <Typography > Mis Noticias</Typography>
          </MenuItem>
          </Link>
          <Link to="/Perfil" style={{color: "black"}}>
        <MenuItem>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
            <Typography> Mi Perfil</Typography>
        </MenuItem>
        </Link>
        <Link to ="/Configuracion" style={{color: "black"}}>
        <MenuItem>
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <Typography> Configuración</Typography>
        </MenuItem>
        </Link>
      </MenuList>
      
    </div>
  );
  //min-width: 150%;
  return (
    <div>
        <React.Fragment>
          <Button onClick={toggleDrawer('right', true)} style={{ width: 45, height:45, marginLeft: 925, position: 'relative', top: 23, marginBottom:35}}>
            <MenuIcon style={{ width: 45, height:45}}></MenuIcon>
          </Button>
          <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}