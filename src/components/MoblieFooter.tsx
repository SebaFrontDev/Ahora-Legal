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
        backgroundColor: '#f2f1f1',
        height: 400,
    },
    icons: {
        marginRight: 5,
      },
    socialMedia: {
        fontSize: 80,
    },
    foot: {
        color: 'white',
        backgroundColor: '#0a0420',
    }
  }));

const MobileFooter: React.FC = () => {
    const classes = useStyles();
    return (
        <>
        <Grid container direction="column" className={classes.root} alignItems="center" justify="space-evenly">
            <Typography variant="h5"><strong>Seguinos en nuestras redes</strong></Typography>
                <Grid container justify="space-evenly">
                    <Link href="https://instagram.com/ahoralegal?utm_medium=copy_link" target="_blank" color="inherit">
                        <InstagramIcon className={classes.socialMedia}/>
                    </Link>
                    <Link href="https://www.facebook.com/Ahoralegal-108866178055399" target="_blank" color="inherit">
                        <FacebookIcon className={classes.socialMedia}/>
                    </Link>
                </Grid>
                <Grid container justify="center">
                  <RoomIcon className={classes.icons}/>
                  <Typography>Córdoba- Argentina</Typography>
                </Grid>
                <Grid container justify="center">
                  <MailIcon className={classes.icons}/>
                  <Typography>ahoralegal@gmail.com</Typography>
                </Grid>
            <Grid container alignItems="center" justify="space-between" direction="column" style={{ height: 80 }}>
                <Link href="#top" style={{ textDecoration: 'none', color: 'black' }}>Beneficios</Link>
                <Link href="#top" style={{ textDecoration: 'none', color: 'black' }}>Servicios</Link>
                <Link href="#top" style={{ textDecoration: 'none', color: 'black' }}>Bases y condiciones</Link>
            </Grid>
            
        </Grid>
        <Grid container justify="center" className={classes.foot}>
            <Typography variant="subtitle2">© 2021 Ahora Legal. Todos los derechos reservados.</Typography>
        </Grid>
        </>
    )
};

export default MobileFooter;