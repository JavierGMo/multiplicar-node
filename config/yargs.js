const opts = {
	base: {
			demand: true,
			alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
	.command('listar', 'Imprimir en consola la tabla de multiplicar', opts)
	.command('crear', 'Crea un archivo .txt de la tabla que pida hasta un limite que decida', opts)
	.help()
	.argv;

module.exports = {
	argv
}