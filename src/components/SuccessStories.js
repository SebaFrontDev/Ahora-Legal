import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-grid-carousel';
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
        paddingLeft: 30,
        position: 'relative',
        width: '100%',
        marginBottom: 100,
    },
    arrowRight: {
        position: 'absolute',
        right: 0,
        bottom: 350,
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
    },
    arrowLeft: {
        position: 'absolute',
        left: 0,
        bottom: 350,
        fontSize: '3rem',
        zIndex: 10,
        cursor: 'pointer',
        userSelect: 'none',
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
    card: {
        maxWidth: 300,
        height: 350,
        marginLeft: 180
    },
  }));

const SuccessStories = () => {
    const classes = useStyles();

    return(
        <>
        <div id="stories" className={classes.title}>
            <img
                className={classes.logo}
                src={ahoaraLegalLogo}
                alt="Ahora legal logo rojo"
            />
            <Typography variant="h4" noWrap>
                <strong>Consultas Resueltas</strong>
            </Typography>
        </div>
            <Carousel
              cols={2}
              rows={1}
              gap={11}
              loop
              containerStyle={{ boxShadow: '5px 10px 8px #888888', paddingBottom: 200 }}
              responsiveLayout={[
                  {
                      breakpoint: 1200,
                      cols: 2
                  },
                  {
                      breakpoint: 990,
                      cols: 1
                  }
              ]}
              mobileBreakpoint={670}
              arrowRight={<NavigateNextIcon className={classes.arrowRight} />}
              arrowLeft={<NavigateBeforeIcon className={classes.arrowLeft} />}
            >
              {successStories.map((slide, index) => {
                    return(
                        <Carousel.Item key={index}>
                             <Card className={classes.card}>
                                <CardContent>
                                    <Grid container justify="center">
                                    <img src={estrella} alt="estrella" />
                                    <img src={estrella} alt="estrella" />
                                    <img src={estrella} alt="estrella" />
                                    </Grid>
                                    <Typography ><strong>{slide.title}</strong></Typography>
                                    <Typography>{slide.subtitle}</Typography>
                                    <Typography><strong>{slide.hashtag}</strong></Typography>
                                </CardContent>
                            </Card>
                        </Carousel.Item>
                    )})
                }
            </Carousel>
    </>
    )
};

export default SuccessStories;
