import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import ReactPlayer from 'react-player';
import heroImage from '../assets/HeroImage.png';

const useStyles = makeStyles({
    root: {
      height: '100vh',
       '& video': {
      objectFit: 'cover',
      },
    },
    reproductor: {
      position: 'relative',
      top: 0,
      left: 0,
    }
  });

  const heroVideo = 'https://drive.google.com/file/d/1cjdEjYxcuodQHC0VoaWdgnVYebGzR9-i/view?usp=sharing'

const Hero = () => {
    const classes = useStyles();
    return (
        <>
        { heroImage ? 
          <Grid item className={classes.root}>
            <CardMedia
              component="img"
              alt="imagen de fondo"
              image={heroImage}
            />
          </Grid>
        :
         <Grid item lg={12} md={12} sm={12} className={classes.root}>
          <ReactPlayer
            url={heroVideo}
            playing
            loop
            muted
            width="100%"
            height="100%"
            className={classes.reproductor}
          />
        </Grid> 
        }
    </>
    )
};

export default Hero;