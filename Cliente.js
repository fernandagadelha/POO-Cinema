"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(id, fone) {
        this.id = id;
        this.fone = fone;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.setId = function (id) {
        this.id = id;
    };
    Cliente.prototype.getFone = function () {
        return this.fone;
    };
    Cliente.prototype.setFone = function (fone) {
        this.fone = fone;
    };
    Cliente.prototype.toString = function () {
        var cli = "" +
            this.id + ":" + this.fone + " ";
        return cli;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
