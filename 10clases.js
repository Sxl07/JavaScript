// Clase padre
class Continente {
  constructor(nombre, poblacion) {
    this.nombre = nombre;
    this.poblacion = poblacion;
  }

  presentar() {
    console.log(`El continente ${this.nombre} tiene una población de ${this.poblacion} habitantes.`);
  }

  destacar() {
    console.log(`Este es un continente muy importante.`);
  }
}

// Subclase 1
class America extends Continente {
  constructor(nombre, poblacion, idiomas, paises) {
    super(nombre, poblacion);
    this.idiomas = idiomas;
    this.paises = paises;
  }

  presentarIdiomas() {
    console.log(`Los idiomas más hablados en América son ${this.idiomas}.`);
  }

  presentarPaises() {
    console.log(`América tiene ${this.paises} países.`);
  }
}

// Subclase 2
class Europa extends Continente {
  constructor(nombre, poblacion, idiomas, monedas) {
    super(nombre, poblacion);
    this.idiomas = idiomas;
    this.monedas = monedas;
  }

  presentarIdiomas() {
    console.log(`Los idiomas más hablados en Europa son ${this.idiomas}.`);
  }

  presentarMonedas() {
    console.log(`En Europa se usan las siguientes monedas: ${this.monedas}.`);
  }
}

// Subclase 3
class Asia extends Continente {
  constructor(nombre, poblacion, idiomas, religiones) {
    super(nombre, poblacion);
    this.idiomas = idiomas;
    this.religiones = religiones;
  }

  presentarIdiomas() {
    console.log(`Los idiomas más hablados en Asia son ${this.idiomas}.`);
  }

  presentarReligiones() {
    console.log(`En Asia se practican diversas religiones, entre ellas: ${this.religiones}.`);
  }
}

// Sub-subclase 1.1
class AmericaDelNorte extends America {
  constructor(nombre, poblacion, idiomas, paises, ciudades, estados) {
    super(nombre, poblacion, idiomas, paises);
    this.ciudades = ciudades;
    this.estados = estados;
  }

  presentarCiudades() {
    console.log(`Algunas de las ciudades más importantes de América del Norte son ${this.ciudades}.`);
  }

  presentarEstados() {
    console.log(`América del Norte está conformada por ${this.estados} estados.`);
  }
}

// Sub-subclase 1.2
class AmericaDelSur extends America {
  constructor(nombre, poblacion, idiomas, paises, recursos, climas) {
    super(nombre, poblacion, idiomas, paises);
    this.recursos = recursos;
    this.climas = climas;
  }

  presentarRecursos() {
    console.log(`América del Sur es rica en recursos naturales como ${this.recursos}.`);
  }

  presentarClimas() {
    console.log(`Los climas de América del Sur son muy diversos, encontramos ${this.climas}.`);
  }
}

//Sub-subclase 2.1
class EuropaOccidental extends Europa {
  constructor(nombre, poblacion, idiomas, monedas, clima) {
    super(nombre, poblacion, idiomas, monedas);
    this.clima = clima;
  }

  presentarClima() {
    console.log(`El clima en Europa Occidental es ${this.clima}.`);
  }

  presentarTurismo() {
    console.log(`Europa Occidental es un destino turístico muy popular.`);
  }
}

// Sub-subclase 2.2
class EuropaOriental extends Europa {
  constructor(nombre, poblacion, idiomas, monedas, religiones) {
    super(nombre, poblacion, idiomas, monedas);
    this.religiones = religiones;
  }

  presentarReligiones() {
    console.log(`En Europa Oriental se practican diversas religiones, entre ellas: ${this.religiones}.`);
  }

  presentarHistoria() {
    console.log(`Europa Oriental tiene una rica historia y patrimonio cultural.`);
  }
}

// Sub-subclase 3.1

class AsiaOriental extends Asia {
  constructor(nombre, poblacion, idiomas, religiones, paises, ciudades) {
    super(nombre, poblacion, idiomas, religiones);
    this.paises = paises;
    this.ciudades = ciudades;
  }

  presentarPaises() {
    console.log(`Los países que conforman Asia Oriental son: ${this.paises}.`);
  }

  presentarCiudades() {
    console.log(`Algunas de las ciudades más importantes de Asia Oriental son: ${this.ciudades}.`);
  }
}

// Sub-subclase 3.2
class AsiaOccidental extends Asia {
  constructor(nombre, poblacion, idiomas, religiones, gastronomia, arquitectura) {
    super(nombre, poblacion, idiomas, religiones);
    this.gastronomia = gastronomia;
    this.arquitectura = arquitectura;
  }

  presentarGastronomia() {
    console.log(`La gastronomía de Asia Occidental es muy variada y exquisita, con platos típicos como ${this.gastronomia}.`);
  }

  presentarArquitectura() {
    console.log(`La arquitectura de Asia Occidental es muy impresionante, con construcciones como ${this.arquitectura}.`);
  }
}