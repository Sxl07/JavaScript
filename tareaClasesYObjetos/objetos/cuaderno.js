let cuaderno = {
    marca: "Norma",
    tipo: "Cuadriculado",
    tamaño: "A5",
    hojas: 100,
    color: "Negro",
    
    escribir: function(texto) {
      console.log(`He escrito "${texto}" en el cuaderno.`);
    },
    
    borrar: function() {
      console.log("He borrado el contenido del cuaderno.");
    },
    
    cerrar: function() {
      console.log("He cerrado el cuaderno.");
    },
    
    agregarPaginas: function(nuevasHojas) {
      this.hojas += nuevasHojas;
      console.log(`Ahora el cuaderno tiene ${this.hojas} hojas.`);
    },
    
    cambiarColor: function(nuevoColor) {
      this.color = nuevoColor;
      console.log(`El color del cuaderno ahora es ${this.color}.`);
    }
  };
