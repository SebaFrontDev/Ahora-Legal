import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MobileImg from '../assetsMobile/MobileImg.png';
import bannerLeft from '../assets/bannerLeft.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 200,
    },
    text: {
        flexGrow: 1,
        paddingTop: 50,
        paddingBottom: 50,
    },
    banner: {
        width: 360,
        position: 'absolute',
        right: 0,
    },
    bannerLeft: {
        position: 'relative',
        left: -10,
        height: 250,
    },
    card: {
        flexGrow: 1,
        height: '100%',
    }
  }));

const MobileBanner: React.FC = () => {
    const classes = useStyles();

    return(
        <>
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
                <img src={MobileImg} alt="MobileImg" className={classes.banner}/>  
                </Grid>
            </Grid>
        </>
    )
};

export default MobileBanner;