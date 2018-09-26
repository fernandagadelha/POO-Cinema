declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Cliente} from "./Cliente";
import {Sala} from "./salaCinema";

let menu : string = "" +
	"1 - criar nova sala" + "\n" +
	"2 - reservar cadeira" + "\n" +
	"3 - cancelar reserva" + "\n" +
	"4 - mostrar estado da sala" + "\n";

let sala : Sala = null;

let numAssentos : number = readline.question("Digite a quantidade de assentos da sala: ");
sala = new Sala(numAssentos);

let id : string = null;
let fone : string = null;
let num : number = null;		

while(true){
	console.log(menu);
	let comando : string = readline.question("Digite um comando: ");

	switch (comando) {
		case "1":
			let numAssentos : number = readline.question("Digite a quantidade de assentos da sala: ");
			sala = new Sala(numAssentos);
			break;
		
		case "2":
			id = readline.question("Digite o id: ");
			fone = readline.question("Digite o telefone: ");
			num = readline.question("Digite o numero do assento: ");
			sala.reservar(id, fone, num);
			break;

		case "3":
			id = readline.question("Digite o id: ");
			sala.cancelar(id);
			break;

		case "4":
			console.log(sala.mostrarEstado());
			break;

	}
}


