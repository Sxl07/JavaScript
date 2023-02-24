class Frutas {
    constructor(nombre, color, sabor, origen, precio) {
      this.nombre = nombre;
      this.color = color;
      this.sabor = sabor;
      this.origen = origen;
      this.precio = precio;
    }
    
    mostrarNombre() {
      console.log(`El nombre de la fruta es ${this.nombre}`);
    }
    
    mostrarColor() {
      console.log(`La fruta es de color ${this.color}`);
    }
    
    mostrarSabor() {
      console.log(`La fruta tiene un sabor ${this.sabor}`);
    }
    
    cambiarPrecio(nuevoPrecio) {
      this.precio = nuevoPrecio;
      console.log(`El nuevo precio de la fruta es ${this.precio}`);
    }
    
    obtenerOrigen() {
      return this.origen;
    }
  }
  