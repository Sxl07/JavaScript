let cereales = {
    marca: "Kellogg's",
    tipo: "Chocokrispis",
    sabor: "chocolate",
    peso: 500,
    precio: 50,
    
    servir: function() {
      console.log("He servido un tazón de cereales.");
    },
    
    agregarLeche: function() {
      console.log("He agregado leche a los cereales.");
    },
    
    mezclar: function() {
      console.log("He mezclado los cereales y la leche.");
    },
    
    comer: function() {
      console.log("Estoy comiendo los cereales.");
    },
    
    comprar: function(cantidad) {
      console.log(`He comprado ${cantidad} cajas de cereales por ${cantidad*this.precio}.`);
    }
  };