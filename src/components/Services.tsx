import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import planBasic from '../assets/planBasic.svg';
import pesos from '../assets/pesos.png';
import asistencias from '../assets/3asistencias.png';
import horas from '../assets/24hs.png';
import abogados from '../assets/abogados.png';
import multiples from '../assets/multiples.png';
import plataforma from '../assets/plataforma.png';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: 'white',
        boxShadow: '-1px 1px 5px #000',
        paddingBottom: 40,
        '&:hover': {
            position: 'relative',
            right: -20,
            top: -20,
        },
        '& img':{
            width: '100%',
        }
      },
    container:{
        borderRadius: 20,
        backgroundColor: 'red',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        marginTop: 5,
    },
    buttonContainer: {
        backgroundColor: '#fe5e11',
        borderRadius: 20,
        marginTop: 50,
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
        width: '100%',
        position: 'absolute',
        color: 'white',
        marginTop: 20,
    },
    pad: {
        marginTop: 10,
        marginRight: 40,
    }
  }));

const Services: React.FC = () => {
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
                <Typography variant="h4" noWrap>
                    <strong>Nuestros Planes</strong>
                </Typography>
            </div>
            <div className={classes.subTitle}>
                <Typography variant="h5" align="center">
                    Suscribite para acceder a estos servicios de manera ilimitada
                </Typography>
            </div>
            <Grid container justify="space-evenly">
                <Grid item xs={4} className={classes.container}>
                    <Grid container className={classes.root}>
                        <div className={classes.planes}>
                            <Typography><strong>PLAN BASIC</strong></Typography>
                            <Typography><strong>$850</strong></Typography>
                            <Typography><strong>x mes</strong></Typography>
                        </div>
                        <img src={planBasic} alt="fondo naranja"/>
                        <Grid item xs={2}>
                            <Grid container direction="column" justify="space-evenly" style={{ marginTop: 50, height: '90%'}}>
                                <img src={pesos} alt="simbolo de pesos" className={classes.icons}/>
                                <img src={horas} alt="simbolo 24 horas" className={classes.icons}/>
                                <img src={asistencias} alt="simbolo de numero tres" className={classes.icons}/>
                                <img src={abogados} alt="simbolo de personas" className={classes.icons}/>
                                <img src={multiples} alt="simbolo de consultas" className={classes.icons}/>
                                <img src={plataforma} alt="simbolo de celular" className={classes.icons}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column" style={{ marginTop: 50 }}>
                                <Typography className={classes.pad}>
                                    <strong>Precio competitivo:</strong> Te ofrecemos descuentos y bonificaciones en tus consultas.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Respuesta las 24hs:</strong> Frente a problemas urgentes, respuestas ágiles.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Asistencia:</strong> Podés hacer hasta 3 contactos por mes.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Abogado de Excelencia:</strong> Vinculación con expertos en las diferentes áreas.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Múltiples canales de atención:</strong> Calidad de atención y seguimiento del servicio.
                                </Typography>
                                <Typography className={classes.pad}>
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
                </Grid>
                <Grid item lg={4} md={4} sm={10} className={classes.container}>
                    <Grid container className={classes.root}>
                        <div className={classes.planes}>
                            <Typography><strong>PLAN PREMIUM</strong></Typography>
                            <Typography><strong>$1200</strong></Typography>
                            <Typography><strong>x mes</strong></Typography>
                        </div>
                            <img src={planBasic} alt="fondo naranja"/>
                        <Grid item xs={2}>
                            <Grid container direction="column" justify="space-evenly" style={{ marginTop: 50, height: '90%' }}>
                                <img src={pesos} alt="simbolo de pesos" className={classes.icons}/>
                                <img src={horas} alt="simbolo 24 horas" className={classes.icons}/>
                                <img src={asistencias} alt="simbolo de numero tres" className={classes.icons}/>
                                <img src={abogados} alt="simbolo de personas" className={classes.icons}/>
                                <img src={multiples} alt="simbolo de consultas" className={classes.icons}/>
                                <img src={plataforma} alt="simbolo de celular" className={classes.icons}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid container direction="column" style={{ marginTop: 50 }}>
                                <Typography className={classes.pad}>
                                    <strong>Precio competitivo:</strong> Te ofrecemos descuentos y bonificaciones en tus consultas.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Respuesta las 24hs:</strong> Frente a problemas urgentes, respuestas ágiles.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Asistencia:</strong> Te acompañamos de manera ilimitada todo el mes.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Abogado de Excelencia:</strong> Vinculación con expertos en las diferentes áreas.
                                </Typography>
                                <Typography className={classes.pad}>
                                    <strong>Múltiples canales de atención:</strong> Calidad de atención y seguimiento del servicio.
                                </Typography>
                                <Typography className={classes.pad}>
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
                </Grid>
            </Grid>
        </Container>
        </>
    )
};

export default Services;
