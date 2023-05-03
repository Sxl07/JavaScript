class Bus {
    constructor(modelo, capacidad, tipo) {
      this.modelo = modelo;
      this.capacidad = capacidad;
      this.tipo = tipo;
    }
  }
  
  // Clases hijas de Bus
  class Troncales extends Bus {
    constructor(modelo, capacidad, tipo, numRutas, cant_pasj, nombre) {
      super(modelo, capacidad, tipo);
      this.numRutas = numRutas;
      this.cant_pasj = cant_pasj;
      this.nombre = nombre;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerCapacidad() {
      return this.cant_pasj;
    }
  
    obtenerRuta() {
      return this.numRutas;
    }
  
  }
  
  class Pretroncales extends Bus {
    constructor(modelo, capacidad, tipo, numRutas, cant_pasj, nombre) {
      super(modelo, capacidad, tipo);
      this.numRutas = numRutas;
      this.cant_pasj = cant_pasj;
      this.nombre = nombre;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerCapacidad() {
      return this.cant_pasj;
    }
  
    obtenerRuta() {
      return this.numRutas;
    }
  
  }
  
  class Alimentadores extends Bus {
    constructor(modelo, capacidad, tipo, numRutas, cant_pasj, nombre) {
      super(modelo, capacidad, tipo);
      this.numRutas = numRutas;
      this.cant_pasj = cant_pasj;
      this.nombre = nombre;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerCapacidad() {
      return this.cant_pasj;
    }
  
    obtenerRuta() {
      return this.numRutas;
    }
  
  }
  
  class Express extends Bus {
    constructor(modelo, capacidad, tipo, numRutas, cant_pasj, nombre) {
      super(modelo, capacidad, tipo);
      this.numRutas = numRutas;
      this.cant_pasj = cant_pasj;
      this.nombre = nombre;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerCapacidad() {
      return this.cant_pasj;
    }
  
    obtenerRuta() {
      return this.numRutas;
    }
  
  }
  
  // Clase Estacion
  class Estacion {
    constructor(nombre, ubicacion, capacidad) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.capacidad = capacidad;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerUbicacion() {
      return this.ubicacion;
    }
  
    obtenerHorario() {
      return this.horario;
    }
  
  }
  
  // Ejemplo de uso
  const troncal1 = new Troncales("Volvo", 50, "Troncal", 5);
  const estacion1 = new Estacion("estacion A", "Calle 1 #123", 1000);
  
  console.log(troncal1);
  console.log(estacion1);