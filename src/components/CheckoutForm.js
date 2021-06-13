import { useState } from 'react';
import { registerRequest } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import balanza from '../assets/balanza.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
    },
    card: {
        height: 500,
        position: 'relative',
        right: -40,
        borderRadius: 25,
        backgroundColor: '#fd1716',
    },
    card1: {
        height: '96%',
        width: '98%',
        borderRadius: 25,
        backgroundColor: '#fe5e11',
    },
    card2: {
        height: '96%',
        width: '98%',
        borderRadius: 25,
        backgroundColor: '#ff9e17',
    },
    bases: {
        height: '90%',
        position: 'relative',
        left: 20,
        color: 'white',
        borderRadius: 25,
        backgroundColor: '#0a0420',
    },
    basesContainer: {
        height: 70,
        width: '60%',
        position: 'relative',
        marginBottom: 30,
        left: -40,
        color: 'white',
        borderRadius: 25,
        backgroundColor: '#fe5e11',
    },
    email: {
        height: '96%',
        width: '100%',
        color: 'white',
        position: 'relative',
        left: 20,
        borderRadius: 25,
        backgroundColor: '#0a0420',
    },
    emailContainer: {
        height: 300,
        width: '60%',
        position: 'relative',
        left: -40,
        color: 'white',
        borderRadius: 25,
        backgroundColor: '#fe5e11',
    },
    balanza: {
        position: 'relative',
        right: -200,
        width: 500,
    },
    inputs: {
        width: 400,
        height: 30,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#f8c47c',
        border: 'none',
        paddingLeft: 20,
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
      tuMail:{
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 20,
        marginBottom: 20,
        paddingLeft: 10,
        '&::placeholder': {
            fontSize: 18
        }

      }
  }));

const CheckoutForm = (props) => {
    const [form, setValues] = useState({
        name: '',
        email: '',
        telefono: '',
        consulta: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefoult();
        props.registerRequest(form);
    }

    const classes = useStyles();
    return(
        <>
        <Grid container id="contacto" style={{ marginBottom: 100, overflow: 'hidden' }}>
            <Grid item xs={4}>
                <Grid container justify="flex-start" alignItems="center">
                    <Grid container className={classes.basesContainer}>
                        <Grid container className={classes.bases}>
                            <Grid container justify="center" alignItems="center">
                                <Button style={{ color: 'white' }} href="#top">Bases y Condiciones</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.emailContainer}>
                        <Grid container className={classes.email}>
                            <Grid container justify="center" className={classes.root}>
                                <Typography variant="subtitle1" align="center">
                                    Un correo al mes no hace daño a nadie
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <input
                                    type="email"
                                    id="tu mail"
                                    placeholder="tu mail @"
                                    autoComplete="email"
                                    className={classes.tuMail}
                                    onChange={handleInput}
                                    />
                                    <div className={classes.buttonContainer}>
                                        <Button type="submit" className={classes.button} href="#top">
                                            Enviar
                                        </Button>
                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid container className={classes.card} alignItems="flex-end" justify="flex-end">
                    <Grid container className={classes.card1} alignItems="flex-end" justify="flex-end">
                        <Grid container alignItems="center" justify="space-between" className={classes.card2}>
                            <Grid item xs={5}>
                                <Grid container direction="column" style={{ marginLeft: 100 }}>
                                    <Typography variant="subtitle1" align="center">
                                    <strong>Dejanos tu consulta y dentro de las 24 hs te respoderemos</strong>
                                    </Typography>
                                    <Grid container justify="center">
                                        <form onSubmit={handleSubmit} >
                                            <input
                                              id="Nombre"
                                              placeholder="Nombre"
                                              autoComplete="name"
                                              type="text"
                                              className={classes.inputs}
                                              onChange={handleInput}
                                            />
                                            <input
                                              id="Email"
                                              placeholder="Email"
                                              autoComplete="email"
                                              type="email"
                                              className={classes.inputs}
                                              onChange={handleInput}
                                            />
                                            <input
                                              id="Telefono"
                                              placeholder="Teléfono"
                                              autoComplete="tel"
                                              type="number"
                                              className={classes.inputs}
                                              onChange={handleInput}
                                            />
                                            <input
                                              id="Consulta"
                                              placeholder="Consulta"
                                              type="text"
                                              className={classes.inputs}
                                              style={{ height: 100 }}
                                              onChange={handleInput}
                                            />
                                            <Grid item>
                                                <Grid className={classes.buttonContainer} style={{ backgroundColor: '#fff' }}>
                                                    <Button type="submit" className={classes.button} href="#top">
                                                        Enviar
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container justify="flex-end">
                                    <img src={balanza} alt="balanza" className={classes.balanza}></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    )
};

const mapDispatchToProps = {
    registerRequest,
};

CheckoutForm.propTypes = {
    registerRequest: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(CheckoutForm);
