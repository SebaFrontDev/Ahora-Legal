import React, { useState } from 'react';
import HeroMobile from './HeroMobile';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import logo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    maxWidth: 100,
  },
  toolbar: {
    minHeight: 128,
  },
  icons: {
    marginRight:20,
    color: 'white',
  },
  buttonRoot: {
    position: 'absolute',
  },
  buttonContainer: {
    position: 'absolute',
    left: 80,
    bottom: 80,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 200,
    height: 40,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: '#0a0420',
    borderRadius: 20,
    color: 'white',
    width: 200,
    height: 40,
    '&:hover': {
      backgroundColor: '#0a0420',
    }
  },
  fab: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    color: 'green',
    fontSize: 50,
    zIndex: 10,
  }
}));


const MobileHeader: React.FC = () => {
  const classes = useStyles();
  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <>
          <HeroMobile />
          <AppBar
            position="absolute"
            color="transparent"
            style={{
              background: 'transparent',
              boxShadow: 'none',
              }}
          >
            <Toolbar id="top" className={classes.toolbar}>
              <img
                className={classes.menuButton}
                src={logo}
                alt="Ahora legal logo"
              />
              <div style={{ flexGrow: 1 }} />
              <Link href="https://instagram.com/ahoralegal?utm_medium=copy_link" target="_blank" color="inherit">
                <InstagramIcon className={classes.icons}/>
              </Link>
              <Link href="https://www.facebook.com/Ahoralegal-108866178055399" target="_blank" color="inherit">
                <FacebookIcon className={classes.icons}/>
              </Link>
              {auth && (
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <MenuIcon style={{ color: 'white', fontSize: 50 }} />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                    <Link href="#services" style={{ textDecoration: 'none' }}>
                        <strong>Nuestros servicios</strong>
                    </Link>    
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link href="#stories" style={{ textDecoration: 'none' }}>
                        <strong>Porqué elegirnos</strong>
                    </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Link href="#contacto" style={{ textDecoration: 'none' }}>
                        <strong>Contacto</strong>
                    </Link>
                    </MenuItem>
                </Menu>
                </div>
            )}
            </Toolbar>
          </AppBar>
          <Grid container alignContent="flex-end" className={classes.buttonRoot}>
            <Grid className={classes.buttonContainer}>
              <Button className={classes.button} href="#form">
                Suscribirme
              </Button>
            </Grid>
          </Grid>
        <Link href="https://api.whatsapp.com/send?phone=3517727577" target="_blank">
          <WhatsAppIcon className={classes.fab}/>
          </Link>
    </>
    )
};

export default MobileHeader;