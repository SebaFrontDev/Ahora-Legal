import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import cellPhoneImg from '../assets/cellPhoneImg.svg';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import RedLogo from '../assets/logo_color.png';
import asuntosCiviles from '../assets/asuntosCiviles.svg';
import comerciales from '../assets/comerciales.svg';
import penales from '../assets/penales.svg';
import consumidor from '../assets/consumidor.svg';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import decorationLeft from '../assets/decorationLeft.svg';
import decorationRight from '../assets/decorationRight.svg';
import inquiries from '../inquiries';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        width: '22%',
        maxWidth: 340,
        overflow: 'hidden',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 100,
    },
    logo: {
        width: 30,
        marginRight: 10,
    },
    redLogo: {
        width: 100,
        position: 'absolute',
        paddingBottom: 400,
    },
    image: {
        width: 345,
    },
    arrowRight: {
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
        color: 'red',
    },
    arrowLeft: {
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
        color: 'red',
    },
    slide: {
        opacity: 0,
        transitionDuration: '1s ease',
    },
    slideActive: {
        opacity: 1,
        transitionDuration: '1s',
    }
  }));

const Main: React.FC = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if(current === inquiries.length - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    };
    const prevSlide = () => {
        if(current === 0){
            setCurrent(inquiries.length - 1)
        } else {
            setCurrent(current - 1)
        }
    };

    return(
        <>
        <Container style={{ overflow: 'hidden' }}>
            <div className={classes.title}>
                <img
                    className={classes.logo}
                    src={ahoaraLegalLogo}
                    alt="Ahora legal logo rojo"
                />
                <Typography variant="h4" noWrap>
                    <strong>¿Qué podés consultar?</strong>
                </Typography>
            </div>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={4}>
                    <Grid container justify="space-around">
                        <Grid item>
                            <Grid container direction="column">
                                <img src={asuntosCiviles} alt="Asuntos civiles logo" />
                                <Typography variant="subtitle1" noWrap align="center">
                                    Asuntos Civiles
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <img src={comerciales} alt="Asuntos comerciales logo" />
                                <Typography variant="subtitle1" noWrap align="center">
                                    Comerciales
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container alignItems="center" justify="center">
                        <img
                            className={classes.image}
                            src={cellPhoneImg}
                            alt="imagen de celular"
                        />
                        <img
                            className={classes.redLogo}
                            src={RedLogo}
                            alt="Logo rojo"
                        />
                        <Grid
                            container
                            className={classes.root}
                            alignItems="center"
                            wrap="nowrap"
                        >
                            <NavigateBeforeIcon className={classes.arrowLeft} onClick={prevSlide} />
                                {inquiries.map((slide, index) => {
                                    return(
                                        <Grid
                                            item
                                            key={index}
                                            className={index === current ? classes.slideActive : classes.slide}
                                        >
                                            {index === current && 
                                                <Grid container direction="column">
                                                    <img
                                                        className=""
                                                        src={slide.url}
                                                        alt={slide.title}
                                                    />
                                                    <Typography variant="subtitle1" align="center"><strong>{slide.title}</strong></Typography>
                                                    <Typography variant="body2" align="center">{slide.subtitle}</Typography>
                                                </Grid> 
                                            }
                                        </Grid>
                                    )})
                                }
                            <NavigateNextIcon className={classes.arrowRight} onClick={nextSlide} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="space-around">
                        <Grid item>
                            <Grid container direction="column">
                                <img src={penales} alt="Asuntos penales logo" />
                                <Typography variant="subtitle1" noWrap align="center">
                                    Penales
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <img src={consumidor} alt="Asuntos del consumidor logo" />
                                <Typography variant="subtitle1" noWrap align="center">
                                    Consumidor
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>    
                </Grid>
            </Grid>
            <img src={decorationLeft} alt="decoración izquierda" style={{width: 900, position: 'absolute', left: -550, top: 1200 }} />
            <div style={{ overflow: 'hidden' }}><img src={decorationRight} alt="decoración derecha" style={{width: 1100, position: 'absolute', right: -640, top: 1800 }} /></div>
        </Container>
        </>
    )
};

export default Main;
