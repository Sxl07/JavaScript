let zapatos = {
    marca: "Nike",
    modelo: "Air Max",
    talla: 8.5,
    color: "Blanco",
    precio: 1000,
    
    usar: function() {
      console.log("Me he puesto los zapatos.");
    },
    
    quitar: function() {
      console.log("Me he quitado los zapatos.");
    },
    
    caminar: function() {
      console.log("Estoy caminando con los zapatos.");
    },
    
    comprar: function() {
      console.log(`He comprado los zapatos por ${this.precio}.`);
    },
    
    cambiarTalla: function(nuevaTalla) {
      this.talla = nuevaTalla;
      console.log(`La talla de los zapatos ahora es ${this.talla}.`);
    }
  };