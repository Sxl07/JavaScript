class Computador {
    constructor(marca, modelo, procesador, ram, almacenamiento) {
      this.marca = marca;
      this.modelo = modelo;
      this.procesador = procesador;
      this.ram = ram;
      this.almacenamiento = almacenamiento;
    }
    
    mostrarMarca() {
      console.log(`La marca del computador es ${this.marca}`);
    }
    
    mostrarModelo() {
      console.log(`El modelo del computador es ${this.modelo}`);
    }
    
    mostrarProcesador() {
      console.log(`El procesador del computador es ${this.procesador}`);
    }
    
    aumentarRam(cantidad) {
      this.ram += cantidad;
      console.log(`Se han aumentado ${cantidad} GB de RAM. Ahora el computador tiene ${this.ram} GB de RAM`);
    }
    
    aumentarAlmacenamiento(cantidad) {
      this.almacenamiento += cantidad;
      console.log(`Se han aumentado ${cantidad} GB de almacenamiento. Ahora el computador tiene ${this.almacenamiento} GB de almacenamiento`);
    }
  }