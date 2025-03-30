"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Jarra = /** @class */ (function () {
    function Jarra(capacidad, cantidad) {
        this.capacidad = capacidad;
        this.cantidad = cantidad;
    }
    Jarra.prototype.setCantidad = function (cantidad) {
        if (cantidad <= this.capacidad) {
            this.cantidad = cantidad;
        }
    };
    Jarra.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Jarra.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    Jarra.prototype.llenar = function () {
        this.cantidad = this.capacidad;
    };
    Jarra.prototype.vaciar = function () {
        this.cantidad = 0;
    };
    Jarra.prototype.llenarDesde = function (otraJarra) {
        var espacio = this.capacidad - this.cantidad;
        if (espacio >= otraJarra.getCantidad()) {
            this.cantidad += otraJarra.getCantidad();
        }
        else {
            this.llenar();
            otraJarra.setCantidad(otraJarra.getCantidad() - espacio);
        }
    };
    Jarra.comparar = function (jarra1, jarra2) {
        if (jarra1.getCantidad() >= jarra2.getCantidad()) {
            return jarra1;
        }
        else {
            return jarra2;
        }
    };
    return Jarra;
}());
var JarraLimitada = /** @class */ (function (_super) {
    __extends(JarraLimitada, _super);
    function JarraLimitada(capacidad, cantidad) {
        var _this = this;
        if (capacidad <= 10) {
            _this = _super.call(this, capacidad, cantidad) || this;
        }
        return _this;
    }
    JarraLimitada.prototype.vaciarMitad = function () {
        this.setCantidad(this.getCantidad() / 2);
    };
    return JarraLimitada;
}(Jarra));
function testeoJarra() {
    var jarra1 = new Jarra(10, 4); // Crea una jarra de 10 litros de capacidad y llena con 4 litros
    var jarra2 = new Jarra(15, 8); // Crea una jarra de 15 litros de capacidad y llena con 8 litros
    Jarra.comparar(jarra1, jarra2); // Debería devolver jarra2, ya que contiene más litros que jarra1
    jarra1.llenarDesde(jarra2); // Llena jarra1 con el contenido que quepa de jarra2. A jarra1 le quedan 6 litros para llenarse, por lo que jarra1 debería llenarse completamente (4+6=10 litros) y jarra2 quedar con 2 litros (8-6= 2 litros)
    console.log("cantidad jarra1: ".concat(jarra1.getCantidad())); // Debería mostrar 10 litros
    console.log("cantidad jarra2: ".concat(jarra2.getCantidad())); // Debería mostrar 2 litros
    jarra2.vaciar(); //Debería vaciarse completamente la jarra2
    console.log("cantidad jarra2: ".concat(jarra2.getCantidad())); // Debería mostrar 0 litros
}
