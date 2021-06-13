import React, { useState } from 'react';
import { registerRequest } from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
        backgroundColor: '#f8c47c',
        border: 'none',
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

const MobileCheckoutForm = (props) => {
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
        <Grid container direction="column" justify="flex-end" className={classes.card2}>
            <Grid>
                <Grid container direction="column" style={{ paddingLeft: 20 }}>
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
                                <Grid className={classes.buttonContainer}>
                                    <Button type="submite" className={classes.button} href="#top">
                                        Enviar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
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

MobileCheckoutForm.propTypes = {
    registerRequest: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(MobileCheckoutForm);