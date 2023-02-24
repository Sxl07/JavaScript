class Celular {
    constructor(marca, modelo, color, precio, capacidad) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.precio = precio;
      this.capacidad = capacidad;
    }
  
    encender() {
      console.log("El celular se ha encendido.");
    }
  
    apagar() {
      console.log("El celular se ha apagado.");
    }
  
    llamar(numero) {
      console.log(`Llamando al número ${numero}...`);
    }
  
    enviarMensaje(numero, mensaje) {
      console.log(`Enviando mensaje a ${numero}: "${mensaje}"`);
    }
  
    mostrarInformacion() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Color: ${this.color}`);
      console.log(`Precio: ${this.precio}`);
      console.log(`Capacidad: ${this.capacidad} GB`);
    }
  }
  
  // Ejemplo de uso
  const miCelular = new Celular("Samsung", "Galaxy S21", "Negro", 1000, 128);
  miCelular.mostrarInformacion();
  miCelular.encender(); 
  miCelular.llamar("123456789"); 
  miCelular.enviarMensaje("123456789", "Hola, ¿cómo estás?"); 
  miCelular.apagar(); 