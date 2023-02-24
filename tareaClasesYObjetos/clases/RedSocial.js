class RedSocial {
    constructor(nombre, url, usuarios, seguidores, publicaciones) {
      this.nombre = nombre;
      this.url = url;
      this.usuarios = usuarios;
      this.seguidores = seguidores;
      this.publicaciones = publicaciones;
    }
    
    mostrarNombre() {
      console.log(`El nombre de la red social es ${this.nombre}`);
    }
    
    mostrarUsuarios() {
      console.log(`La red social tiene ${this.usuarios} usuarios`);
    }
    
    aumentarSeguidores(cantidad) {
      this.seguidores += cantidad;
      console.log(`Se han añadido ${cantidad} seguidores. Ahora la red social tiene ${this.seguidores} seguidores`);
    }
    
    agregarPublicacion(publicacion) {
      this.publicaciones.push(publicacion);
      console.log(`Se ha agregado una nueva publicación a la red social. Ahora hay ${this.publicaciones.length} publicaciones`);
    }
    
    eliminarPublicacion(id) {
      this.publicaciones = this.publicaciones.filter(publicacion => publicacion.id !== id);
      console.log(`Se ha eliminado la publicación con id ${id}. Ahora hay ${this.publicaciones.length} publicaciones`);
    }
  }
  