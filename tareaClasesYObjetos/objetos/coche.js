let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2018,
    color: "Rojo",
    kilometraje: 50000,
    
    encender: function() {
      console.log("El coche ha sido encendido.");
    },
    
    apagar: function() {
      console.log("El coche ha sido apagado.");
    },
    
    acelerar: function() {
      console.log("El coche está acelerando.");
    },
    
    frenar: function() {
      console.log("El coche está frenando.");
    },
    
    cambiarColor: function(nuevoColor) {
      this.color = nuevoColor;
      console.log(`El color del coche ahora es ${this.color}.`);
    }
  };