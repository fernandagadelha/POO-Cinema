"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var salaCinema_1 = require("./salaCinema");
var menu = "" +
    "1 - criar nova sala" + "\n" +
    "2 - reservar cadeira" + "\n" +
    "3 - cancelar reserva" + "\n" +
    "4 - mostrar estado da sala" + "\n";
var sala = null;
var numAssentos = readline.question("Digite a quantidade de assentos da sala: ");
sala = new salaCinema_1.Sala(numAssentos);
var id = null;
while (true) {
    console.log(menu);
    var comando = readline.question("Digite um comando: ");
    switch (comando) {
        case "1":
            var numAssentos_1 = readline.question("Digite a quantidade de assentos da sala: ");
            sala = new salaCinema_1.Sala(numAssentos_1);
            break;
        case "2":
            id = readline.question("Digite o id: ");
            var fone = readline.question("Digite o telefone: ");
            var num = readline.question("Digite o numero do assento: ");
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
