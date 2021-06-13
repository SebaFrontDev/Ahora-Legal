import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
        backgroundColor: '#f2f1f1',
    },
    icons: {
        marginRight: 5,
      },
    socialMedia: {
        fontSize: 50,
        marginRight: 30,
    },
    foot: {
        color: 'white',
        backgroundColor: '#0a0420',
    }
  }));

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container className={classes.root} wrap="nowrap">
            <Grid container alignItems="center" justify="space-evenly" direction="column">
                <Grid container alignItems="center" justify="center">
                  <RoomIcon className={classes.icons} style={{ marginTop: 30 }}/>
                  <p style={{ paddingTop: 30 }}>Córdoba- Argentina</p>
                </Grid>
                <Grid container alignItems="center" justify="center">
                  <MailIcon className={classes.icons} style={{ marginBottom: 30 }}/>
                  <p style={{ paddingBottom: 30 }}>ahoralegal@gmail.com</p>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justify="space-evenly" direction="column">
                <Link href="#top" style={{ textDecoration: 'none', color: 'black', paddingTop: 30 }}>Beneficios</Link>
                <Link href="#top" style={{ textDecoration: 'none', color: 'black' }}>Servicios</Link>
                <Link href="#top" style={{ textDecoration: 'none', color: 'black', paddingBottom: 30 }}>Bases y condiciones</Link>
            </Grid>
            <Grid container alignItems="center" justify="center">
            <Link href="https://instagram.com/ahoralegal?utm_medium=copy_link" target="_blank" color="inherit">
              <InstagramIcon className={classes.socialMedia}/>
            </Link>
            <Link href="https://www.facebook.com/Ahoralegal-108866178055399" target="_blank" color="inherit">
              <FacebookIcon className={classes.socialMedia}/>
            </Link>
            </Grid>
        </Grid>
        <Grid container justify="flex-end" className={classes.foot}>
            <Typography variant="subtitle2">© 2021 Ahora Legal. Todos los derechos reservados.</Typography>
        </Grid>
        </>
    )
};

export default Footer;
