import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import heroVideo from '../assets/heroVideo.mp4'

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

const Hero = () => {
    const classes = useStyles();
    return (
        <>
         <Grid item className={classes.root}>
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
    </>
    )
};

export default Hero;
