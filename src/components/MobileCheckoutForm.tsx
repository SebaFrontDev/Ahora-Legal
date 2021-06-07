import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
    },
    card2: {
        backgroundColor: '#ff9e17',
        height: 800,
    },
    inputs: {
        width: '90%',
        margin: 5,
        borderRadius: 20,
    },
      buttonContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 50,
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
      }
  }));

const MobileCheckoutForm: React.FC = () => {
    const classes = useStyles();
    return(
        <>
        <Grid container direction="column" justify="flex-end" className={classes.card2}>
            <Grid>
                <Grid container direction="column" style={{ paddingLeft: 20 }}>
                    <Typography variant="subtitle1" align="center">
                        <strong>Dejanos tu consulta y dentro de las 24 hs te respoderemos</strong>
                    </Typography>
                    <Grid container justify="center">
                        <TextField id="Nombre" label="Nombre" variant="filled" className={classes.inputs} />
                        <TextField id="Email" label="Email" variant="filled" className={classes.inputs}/>
                        <TextField id="Telefono" label="Telefono" variant="filled" className={classes.inputs}/>
                        <TextField
                            className={classes.inputs}
                            id="Consulta"
                            label="Colnsulta"
                            multiline
                            rows={4}
                            variant="outlined"        
                        />
                        <Grid item>
                            <Grid className={classes.buttonContainer}>
                                <Button type="submite" className={classes.button} href="#top">
                                    Enviar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
};

export default MobileCheckoutForm;