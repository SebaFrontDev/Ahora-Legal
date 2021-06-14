import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ahoaraLegalLogo from '../assets/ahoraLegalLogo.svg';
import successStories from '../successStories';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import estrella from '../assets/estrella.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        marginBottom: 100,
        alignItems: 'center',
        justify: 'center',
    },
    arrowRight: {

        fontSize: '3rem',
        cursor: 'pointer',
        userSelect: 'none',
    },
    arrowLeft: {
        fontSize: '3rem',
        cursor: 'pointer',
        userSelect: 'none',
    },
    slide: {
        opacity: 0,
        transitionDuration: '1s ease',
    },
    slideActive: {
        opacity: 1,
        transitionDuration: '1s',
    },
    card: {
        height: 'auto',
        width: 'auto',
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
  }));

const MobileSuccessStories = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        if(current === successStories.length - 1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    };
    const prevSlide = () => {
        if(current === 0){
            setCurrent(successStories.length - 1)
        } else {
            setCurrent(current - 1)
        }
    };

    return(
        <>
        <div id="stories" className={classes.title}>
            <img
                className={classes.logo}
                src={ahoaraLegalLogo}
                alt="Ahora legal logo rojo"
            />
            <Typography variant="h5" noWrap>
                <strong>Consultas Resueltas</strong>
            </Typography>
        </div>
            <div className={classes.root}>
              <NavigateBeforeIcon className={classes.arrowLeft} onClick={prevSlide} />
                {successStories.map((slide, index) => {
                    return(
                        <Grid
                            item
                            key={index}
                            className={index === current ? classes.slideActive : classes.slide}
                        >
                            {index === current && 
                             <Card className={classes.card}>
                                <CardContent>
                                    <Grid container justify="center">
                                    <img src={estrella} alt="estrella" className={classes.logo} />
                                    <img src={estrella} alt="estrella" className={classes.logo}  />
                                    <img src={estrella} alt="estrella" className={classes.logo}  />
                                    </Grid>
                                    <Typography variant="h5" style={{ marginTop: 10 }}><strong>{slide.title}</strong></Typography>
                                    <Typography component="p" style={{ marginTop: 10 }}>{slide.subtitle}</Typography>
                                    <Typography variant="subtitle1"><strong>{slide.hashtag}</strong></Typography>
                                </CardContent>
                            </Card>   
                            }
                        </Grid>
                    )})
                }
              <NavigateNextIcon className={classes.arrowRight} onClick={nextSlide} />
            </div>
    </>
    )
};

export default MobileSuccessStories;