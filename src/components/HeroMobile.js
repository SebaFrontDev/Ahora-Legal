import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assetsMobile/frontImg.png';
import familia from '../assetsMobile/familia.png';
import penal from '../assetsMobile/penal.png';
import comercio from '../assetsMobile/comercio.png';
import consumidor from '../assetsMobile/consumidor.png';

const useStyles = makeStyles((theme) => ({
    background: {
        width: '100%',
        height: 800,
        '&img': {
            width: '100%',
            height: '100%'
        }
    },
    slide: {
        opacity: 1,
        transitionDuration: '1s ease',
    },
    slideActive: {
        opacity: 1,
        transitionDuration: '1s',
    },
}));

const assets = [
    {
        src: logo,
        alt: 'logo',
    },
    {
        src: familia,
        alt: 'familia',
    },
    {
        src: penal,
        alt: 'penal',
    },
    {
        src: comercio,
        alt: 'comercio',
    },
    {
        src: consumidor,
        alt: 'consumidor',
    }
]

const HeroMobile = () => {
    const classes = useStyles();
    const [current, setCurrent] = useState(0);

    const nextImage = () => {
        if(current === assets.length -1){
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    };

    setTimeout(nextImage, 3000)

    return (
        <>
        <div className={classes.background}>
            {assets.map((image, index) => {
                return(
                    <div key={index} className={index === current ? classes.slideActive : classes.slide}>
                        {index === current && <img src={image.src} alt={image.alt} />}
                    </div>
                )
              })
            }
        </div>
        </>
    )
};

export default HeroMobile;