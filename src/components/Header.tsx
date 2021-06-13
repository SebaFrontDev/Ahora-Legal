import React from 'react';
import Hero from './Hero';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import logo from '../assets/logo_en_blanco.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  menuButton: {
    width: 100,
  },
  toolbar: {
    minHeight: 128,
    width: '66%'
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 500,
  },
  icons: {
    position: 'relative',
    bottom: -2.5,
    color: 'white',
    '&:hover': {
      fontSize: 'calc(100% + 20px)',
    }
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
    bottom: 35,
    right: 35,
    color: 'green',
    fontSize: 50,
    zIndex: 2,
  },
  card: {
    position: 'fixed',
    bottom: 10,
    right: 70,
    height: 40,
    width: 250,
    borderRadius: 20,
    paddingTop: 8,
    paddingLeft: 8,
    zIndex: 1,
  }
}));


const Header: React.FC = () => {
  const classes = useStyles();
    return (
        <>
        <Grid>
          <Hero />
          <AppBar
            position="absolute"
            color="transparent"
            className={classes.appbar}
          >
            <Toolbar id="top" className={classes.toolbar}>
              <Grid container alignItems="center" justify="space-evenly" style={{ paddingRight: 10 }}>
                <img
                  className={classes.menuButton}
                  src={logo}
                  alt="Ahora legal logo"
                />
                <Link href="#services" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Nuestros servicios
                  </Typography>
                </Link>
                <Link href="#stories" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Porqué elegirnos
                  </Typography>
                </Link>
                <Link href="#contacto" style={{ textDecoration: 'none' }}>
                  <Typography className={classes.title} variant="h5" noWrap>
                    Contacto
                  </Typography>
                </Link>
                <Link href="https://instagram.com/ahoralegal?utm_medium=copy_link" target="_blank" color="inherit">
                  <InstagramIcon className={classes.icons}/>
                </Link>
                <Link href="https://www.facebook.com/Ahoralegal-108866178055399" target="_blank" color="inherit">
                  <FacebookIcon className={classes.icons}/>
                </Link>
              </Grid>
            </Toolbar>
          </AppBar>
          <Grid container alignContent="flex-end" className={classes.buttonRoot}>
            <Grid className={classes.buttonContainer}>
              <Button className={classes.button} href="#form">
                Suscribirme
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Link href="https://api.whatsapp.com/send?phone=3517727577" target="_blank">
          <WhatsAppIcon className={classes.fab}/>
          </Link>
        <Link href="https://api.whatsapp.com/send?phone=3517727577" target="_blank">
          <Card className={classes.card}>
            <Typography>¿En que Podemos ayudarte?</Typography>
          </Card>
        </Link>
    </>
    )
};

export default Header;