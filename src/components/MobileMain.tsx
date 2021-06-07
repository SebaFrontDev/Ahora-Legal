import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import cellPhoneImg from '../assets/cellPhoneImg.svg';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import RedLogo from '../assetsMobile/RedLogo.png';
import inquiries from '../inquiries';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
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
        paddingBottom: 10,
    },
    image: {
        width: 300,
    },
    arrowRight: {
        fontSize: '3rem',
        cursor: 'pointer',
        userSelect: 'none',
        color: 'red',
    },
    arrowLeft: {
        fontSize: '3rem',
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

const MobileMain: React.FC = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if(current === inquiries.length - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    };

    return(
        <>
        <Container>
            <div className={classes.title}>
                <img className={classes.logo} src={ahoaraLegalLogo} alt="Ahora legal logo rojo" />
                <Typography variant="h5" noWrap>
                    <strong>¿Qué podés consultar?</strong>
                </Typography>
            </div>
            <Grid container alignItems="center" justify="center">
                <img className={classes.image} src={cellPhoneImg} alt="imagen de celular" />
                <Grid container direction="column" className={classes.root} alignItems="center" alignContent="center" justify="center">
                    <img
                        className={classes.redLogo}
                        src={RedLogo}
                        alt="Logo Rojo"
                    />
                        {inquiries.map((slide, index) => {
                            return(
                                <Grid
                                    item
                                    xs={6}
                                    key={index}
                                    className={index === current ? classes.slideActive : classes.slide}
                                >
                                    {index === current && 
                                        <Grid>
                                            <Grid container direction="column">
                                                <img src={slide.url} alt={slide.title} />
                                                <Typography variant="subtitle1" align="center"><strong>{slide.title}</strong></Typography>
                                                <Typography variant="body2" align="center">{slide.subtitle}</Typography>
                                            </Grid>
                                        </Grid>   
                                    }
                                </Grid>
                            )})
                        }
                    <Grid item xs={3}><NavigateNextIcon className={classes.arrowRight} onClick={nextSlide} /></Grid>
                </Grid>
            </Grid>
        </Container>
        </>
    )
};

export default MobileMain;