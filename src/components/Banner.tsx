import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import banner from '../assets/banner.png';
import bannerLeft from '../assets/bannerLeft.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 200,
    },
    text: {
        flexGrow: 1,
        paddingLeft: 100,
        paddingTop: 50,
        paddingBottom: 50,
    },
    banner: {
        width: 400,
        position: 'relative',
    },
    bannerLeft: {
        height: 250,
    },
    card: {
        flexGrow: 1,
        height: '100%',
    }
  }));

const Banner: React.FC = () => {
    const classes = useStyles();

    const screenSize = window.innerWidth;

    return(
        <>
        {screenSize > 800 ? 
            <Grid container className={classes.root} wrap="nowrap">
                <Grid item>
                <img src={bannerLeft} alt="banner left" className={classes.bannerLeft}/>  
                </Grid>
                <Grid item className={classes.text}>
                    <Grid container  alignItems="center" className={classes.card}>
                        <Typography variant="h5"><strong>PROXIMAMENTE</strong></Typography>
                        <Typography component="p">
                            Plataforma exclusiva para nuestros clientes.
                            Con ella  podrán acceder y tener toda la información
                            de asesoramientos, profesionales, etc. Además de recibir
                            asistencia por WhatsApp o teléfono.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <img src={banner} alt="banner" className={classes.banner}/>  
                </Grid>
            </Grid>
        :
            <Grid container className={classes.root}>
                <Grid item>
                <img src={bannerLeft} alt="banner left" className={classes.bannerLeft}/>  
                </Grid>
                <Grid item className={classes.text}>
                    <Grid container  alignItems="center" className={classes.card}>
                        <Typography variant="h5"><strong>PROXIMAMENTE</strong></Typography>
                        <Typography component="p">
                            Plataforma exclusiva para nuestros clientes.
                            Con ella  podrán acceder y tener toda la información
                            de asesoramientos, profesionales, etc. Además de recibir
                            asistencia por WhatsApp o teléfono.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <img src={banner} alt="banner" className={classes.banner}/>  
                </Grid>
            </Grid>
        }
        </>
    )
};

export default Banner;