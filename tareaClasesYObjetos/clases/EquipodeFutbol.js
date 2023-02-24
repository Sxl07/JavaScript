class EquipoDeFutbol {
    constructor(nombre, ciudad, fundacion, estadio, jugadores) {
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.fundacion = fundacion;
      this.estadio = estadio;
      this.jugadores = jugadores;
    }
    
    mostrarNombre() {
      console.log(`El nombre del equipo de fútbol es ${this.nombre}`);
    }
    
    mostrarCiudad() {
      console.log(`El equipo de fútbol es de ${this.ciudad}`);
    }
    
    mostrarEstadio() {
      console.log(`El estadio del equipo de fútbol es ${this.estadio}`);
    }
    
    agregarJugador(jugador) {
      this.jugadores.push(jugador);
      console.log(`Se ha agregado a ${jugador} al equipo de fútbol`);
    }
    
    eliminarJugador(jugadorEliminado) {
      this.jugadores.splice(jugadorEliminado,30);
      console.log(`Se ha eliminado a ${jugadorEliminado} del equipo de fútbol`);
    }
  }  