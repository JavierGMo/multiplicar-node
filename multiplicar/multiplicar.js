const fs = require('fs');
const colors = require('colors/safe');

let listarTablas = (base, limite) => {
	return new Promise((resolve, reject) => {
		if(!Number(base) && !Number(limite)){
			reject('No son numeros');
			return;
		}
		let cont = '';

		console.log(`*** Tabla del ${base} ***`.green)

		for (var i = 1; i <= limite; i++) {
			cont += `${base} * ${i} = ${base * i}\n`;
		}

		if(cont == null || cont == undefined){
			reject('Errorss');
		}else{
			resolve(cont);
		}


	});
}


let crearArchivo = (base, limite) => {
	return new Promise ((resolve, reject) => {

		if(!Number(base)){
			reject('No introduciste un numero');
			return;
		}

		let data = '';

		for (var i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${i*base}\n`;
		}

		fs.writeFile(`tablas/tablas-${base}-al-${limite}.txt`, data, (err) => {
		
			if (err){
			  reject(err);
			}else{
			  resolve(`tabla-del-${base}-al-${limite}.txt`);
			  //(`El archivo de la tabla numero ${base} se ha guardado`);
			}

		});
	});
}

module.exports = {
	crearArchivo,
	listarTablas
}
