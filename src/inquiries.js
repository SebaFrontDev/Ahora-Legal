import asuntosCiviles from './assets/asuntosCiviles.svg';
import comerciales from './assets/comerciales.svg';
import penales from './assets/penales.svg';
import consumidor from './assets/consumidor.svg';
import familiares from './assets/familiares.svg';

const inquiries = [  
    {
        title: 'Familiares',
        subtitle: 'Si estás atravesando un proceso de divorcio o tenés dudas acerca de la pensión alimentaria de tu hijo/a, consultános. Otros temas relacionados al derecho familiar :custodia de hijos/as - guarda y custodia - pensión alimenticia -  liquidación de herencias - tutela',
        url: `${familiares}`
    },
    {
        title: 'Consumidor',
        subtitle: '¿Sabías que tenés derechos como consumidor? Por ejemplo: Irregularidades con tarjeta de crédito, por falta de respuesta de la aseguradora del vehículo, incumplimiento de una agencia de viajes, por servicios deficientes en los aeropuertos, entre otros.',
        url: `${consumidor}`
    },
    {
        title: 'Penales',
        subtitle: 'Todos tenemos derecho a una defensa justa. Tratamos temas como:injurias, calumnias, lesiones graves, homicidios, estafa, robo, blanqueo de capitales, delitos de cualquier tipo',
        url: `${penales}`
    },
    {
        title: 'Asuntos Civiles',
        subtitle: 'Contratos entre particulares: compra-venta, alquiler, etc. Reconocimiento de nacionalidad, permisos de residencia, entre otros. Cambio de identidad, estado civil, empadronamiento. Daños y perjuicios a terceros.',
        url: `${asuntosCiviles}`
    },
    {
        title: 'Comerciales',
        subtitle: 'Tratamos temas tales como: Contratación de seguros, contratos mercantiles: compraventa, comisión. litigios comerciales. Títulos Cambiarios: letra de cambio, pagaré y cheque.',
        url: `${comerciales}`
    }
];

export default inquiries;