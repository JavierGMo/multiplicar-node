//requireds

const {crearArchivo, listarTablas} = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];


switch(comando){
	case 'listar':
		listarTablas(argv.base, argv.limite)
			.then(res => console.log(`Tabla:\n${res}`))
			.catch(e => console.log(e));
	break;
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log('Archivo creado:', `${archivo}`.blue))
			.catch(e => console.log(e));
	break;
	default:
		console.log('Comando no reconocido');
}

//const fs = require('express');
//const fs = require('./fs');

//let base = 10;


//console.log(process.argv);

//let argv2 = process.argv;

//let parametro = argv[2];

//let base = parametro.split('=')[1];

//console.log(base);

