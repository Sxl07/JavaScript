let bandera = {
    pais: "Colombia",
    color1: "Amarillo",
    color2: "Azul",
    color3: "Rojo",
    medida: "150x90cm",
    
    izar: function() {
      console.log("La bandera ha sido izada.");
    },
    
    arriar: function() {
      console.log("La bandera ha sido arriada.");
    },
    
    plegar: function() {
      console.log("La bandera ha sido plegada.");
    },
    
    cambiarColor: function(nuevoColor) {
      console.log(`El color de la bandera ha sido cambiado a ${nuevoColor}.`);
    },
    
    extender: function(nuevaMedida) {
      console.log(`La medida de la bandera ha sido extendida a ${nuevaMedida}.`);
    }
  };