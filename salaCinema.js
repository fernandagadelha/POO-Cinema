"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Sala = /** @class */ (function () {
    function Sala(numAssentos) {
        this.numAssentos = numAssentos;
        this.clientes = [];
        for (var i = 0; i < this.numAssentos; i++) {
            this.clientes.push(null);
        }
    }
    Sala.prototype.mostrarEstado = function () {
        var res = "";
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] == null) {
                res += " - ";
            }
            else {
                res += this.clientes[i];
            }
        }
        return res;
    };
    Sala.prototype.reservar = function (id, fone, num) {
        if (num < 0 || num >= this.numAssentos) {
            console.log("Cadeira inexistente");
        }
        else {
            if (this.clientes[num] != null) {
                console.log("Cadeira ja esta ocupada");
            }
            else {
                var encontrouId = false;
                for (var i = 0; i < this.clientes.length; i++) {
                    var cliente = this.clientes[i];
                    if (cliente != null) {
                        if (cliente.getId() == id) {
                            console.log("Cliente ja esta na sala");
                            encontrouId = true;
                        }
                    }
                }
                if (encontrouId == false) {
                    var cli = new Cliente_1.Cliente(id, fone);
                    this.clientes[num] = cli;
                }
            }
        }
    };
    Sala.prototype.cancelar = function (id) {
        var encontrouId = false;
        for (var i = 0; i < this.clientes.length; i++) {
            var cliente = this.clientes[i];
            if (cliente != null) {
                if (cliente.getId() == id) {
                    this.clientes[i] = null;
                    encontrouId = true;
                }
            }
        }
        if (encontrouId == true) {
            console.log("Reserva cancelada com sucesso");
        }
        else {
            console.log("Id nao encontrada");
        }
    };
    return Sala;
}());
exports.Sala = Sala;
