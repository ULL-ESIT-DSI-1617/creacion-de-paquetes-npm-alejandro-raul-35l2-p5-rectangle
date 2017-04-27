"use strict";

let Shape = require('@ull-alejandro-raul-35l2/ull-shape');

/**
 * Paquete npm de Rectangle
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-alejandro-raul-35l2-p5-rectangle
 * 
 * Autor: Raúl Martín Morales
 * 
 * 
 * Team: alejandro-raul-35l2
 * 
 * Aquí creamos la clase Rectangle que hereda de Shape
 * 
 * 
 * @class Rectangle
 * @param {hash} options Ancho y Alto
 * 
 */
 
 
class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    /** 
    * @function Area
    * @return {value} el valor del area del Rectangle
    */
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
