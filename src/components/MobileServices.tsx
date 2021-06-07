import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import planBasic from '../assets/planBasic.svg';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Looks3Icon from '@material-ui/icons/Looks3';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import PeopleIcon from '@material-ui/icons/People';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import SettingsCellIcon from '@material-ui/icons/SettingsCell';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: 30,
        paddingBottom: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        boxShadow: '-1px 1px 5px #000',
        '& img':{
            width: '100%',
        }
      },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    subTitle: {
        marginBottom: 150,
    },
    logo: {
        width: 30,
        marginRight: 10,
    },
    icons: {
        fontSize: 50,
        marginBottom: 20,
        color: '#ff9e17',
    },
    buttonContainer: {
        backgroundColor: '#fe5e11',
        borderRadius: 20,
        marginTop: 15,
        width: 200,
        height: 40,
        textAlign: 'center',
      },
    button: {
        position: 'relative',
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
    planes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        color: 'white',
        marginTop: 10,
    }
  }));

const MobileServices: React.FC = () => {
    const classes = useStyles();
    return(
        <>
        <Container id="services">
            <div className={classes.title}>
                <img
                    className={classes.logo}
                    src={ahoaraLegalLogo}
                    alt="Ahora legal logo rojo"
                />
                <Typography variant="h5" noWrap>
                    <strong>Nuestros Planes</strong>
                </Typography>
            </div>
            <div className={classes.subTitle}>
                <Typography variant="h5" align="center">
                    Por medio de un abono mensual accedé a estos servicios
                    de manera ilimitada
                </Typography>
            </div>
                <Grid container justify="center" className={classes.root}>
                    <div className={classes.planes}>
                        <Typography><strong>PLAN BASIC</strong></Typography>
                        <Typography><strong>$850</strong></Typography>
                        <Typography><strong>x mes</strong></Typography>
                    </div>
                    <img src={planBasic} alt="fondo naranja"/>
                    <Grid item xs={2}>
                        <Grid container justify="space-evenly" direction="column" style={{ height: '100%' }}>
                            <MonetizationOnIcon className={classes.icons}/>
                            <PhoneInTalkIcon className={classes.icons}/>
                            <Looks3Icon className={classes.icons}/>
                            <PeopleIcon className={classes.icons}/>
                            <HowToRegIcon className={classes.icons}/>
                            <SettingsCellIcon className={classes.icons}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction="column">
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Precio competitivo:</strong> Te ofrecemos descuentos y bonificaciones en tus consultas.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Respuesta las 24hs:</strong> Frente a problemas urgentes, respuestas ágiles.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Asistencia:</strong> Podés hacer hasta 3 contactos por mes.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Abogado de Excelencia:</strong> Vinculación con expertos en las diferentes áreas.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Múltiples canales de atención:</strong> Calidad de atención y seguimiento del servicio.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Plataforma:</strong> Posibilidad de realizar consultas,  acceso a documentos, videos y club de beneficios.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid className={classes.buttonContainer}>
                            <Button type="submite" className={classes.button} href="#top">
                                Comprar ahora
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center" className={classes.root}>
                    <div className={classes.planes}>
                        <Typography><strong>PLAN BASIC</strong></Typography>
                        <Typography><strong>$1200</strong></Typography>
                        <Typography><strong>x mes</strong></Typography>
                    </div>
                        <img src={planBasic} alt="fondo naranja"/>
                    <Grid item xs={2}>
                        <Grid container justify="space-between" direction="column">
                            <MonetizationOnIcon className={classes.icons}/>
                            <PhoneInTalkIcon className={classes.icons}/>
                            <Looks3Icon className={classes.icons}/>
                            <PeopleIcon className={classes.icons}/>
                            <HowToRegIcon className={classes.icons}/>
                            <SettingsCellIcon className={classes.icons}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container direction="column">
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Precio competitivo:</strong> Te ofrecemos descuentos y bonificaciones en tus consultas.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Respuesta las 24hs:</strong> Frente a problemas urgentes, respuestas ágiles.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Asistencia:</strong> Podés hacer hasta 3 contactos por mes.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Abogado de Excelencia:</strong> Vinculación con expertos en las diferentes áreas.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Múltiples canales de atención:</strong> Calidad de atención y seguimiento del servicio.
                            </Typography>
                            <Typography style={{ marginBottom: 5 }}>
                                <strong>Plataforma:</strong> Posibilidad de realizar consultas,  acceso a documentos, videos y club de beneficios.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid className={classes.buttonContainer}>
                            <Button type="submite" className={classes.button} href="#top">
                                Comprar ahora
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
        </Container>
        </>
    )
};

export default MobileServices;